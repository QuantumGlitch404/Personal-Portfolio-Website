import { useState, useEffect } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Custom hook to fetch projects from the backend API.
 * Falls back to local data if the API is unreachable.
 */
export function useProjects(options = {}) {
  const { category, featured, sort } = options;
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProjects() {
      setLoading(true);
      setError(null);

      try {
        // Build query string
        const params = new URLSearchParams();
        if (category) params.set('category', category);
        if (featured !== undefined) params.set('featured', String(featured));
        if (sort) params.set('sort', sort);

        const queryString = params.toString();
        const url = `${API_BASE}/api/projects${queryString ? `?${queryString}` : ''}`;

        const response = await fetch(url, {
          signal: controller.signal,
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          setProjects(result.data);
        } else {
          throw new Error('Invalid API response format');
        }
      } catch (err) {
        if (err.name === 'AbortError') return;

        console.warn('⚠️ API fetch failed, falling back to local data:', err.message);
        setError(err.message);

        // Graceful fallback: load from local static data
        try {
          const { projects: localProjects } = await import('../data/projects.js');
          setProjects(localProjects);
        } catch (fallbackErr) {
          console.error('❌ Local fallback also failed:', fallbackErr.message);
          setProjects([]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();

    return () => controller.abort();
  }, [category, featured, sort]);

  return { projects, loading, error };
}

/**
 * Fetch a single project by slug or ID.
 */
export function useProject(idOrSlug) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!idOrSlug) return;

    const controller = new AbortController();

    async function fetchProject() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_BASE}/api/projects/${idOrSlug}`, {
          signal: controller.signal,
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`Project not found: ${response.status}`);
        }

        const result = await response.json();
        setProject(result.data);
      } catch (err) {
        if (err.name === 'AbortError') return;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();

    return () => controller.abort();
  }, [idOrSlug]);

  return { project, loading, error };
}
