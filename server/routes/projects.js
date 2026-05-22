import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// ────────────────────────────────────────────
// GET /api/projects — Fetch all projects
// ────────────────────────────────────────────
router.get('/', async (req, res) => {
  try {
    const { category, featured, status, sort } = req.query;

    // Build dynamic filter
    const filter = {};
    if (category) filter.category = category;
    if (featured !== undefined) filter.featured = featured === 'true';
    if (status) filter.completionStatus = status;

    // Build sort option
    let sortOption = { sortOrder: 1, createdAt: -1 };
    if (sort === 'newest') sortOption = { createdAt: -1 };
    if (sort === 'oldest') sortOption = { createdAt: 1 };
    if (sort === 'title') sortOption = { title: 1 };

    const projects = await Project.find(filter).sort(sortOption);

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error('GET /api/projects error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error fetching projects',
    });
  }
});

// ────────────────────────────────────────────
// GET /api/projects/:idOrSlug — Fetch single project
// ────────────────────────────────────────────
router.get('/:idOrSlug', async (req, res) => {
  try {
    const { idOrSlug } = req.params;

    // Try finding by slug first, then by _id
    let project = await Project.findOne({ slug: idOrSlug });
    if (!project) {
      // Check if it's a valid ObjectId
      if (idOrSlug.match(/^[0-9a-fA-F]{24}$/)) {
        project = await Project.findById(idOrSlug);
      }
    }

    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Project not found: ${idOrSlug}`,
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error('GET /api/projects/:id error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error fetching project',
    });
  }
});

// ────────────────────────────────────────────
// POST /api/projects — Create new project
// ────────────────────────────────────────────
router.post('/', async (req, res) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error('POST /api/projects error:', error.message);

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: messages,
      });
    }

    // Handle duplicate slug
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'A project with this title/slug already exists',
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error creating project',
    });
  }
});

// ────────────────────────────────────────────
// PUT /api/projects/:idOrSlug — Update project
// ────────────────────────────────────────────
router.put('/:idOrSlug', async (req, res) => {
  try {
    const { idOrSlug } = req.params;

    let project = await Project.findOne({ slug: idOrSlug });
    if (!project && idOrSlug.match(/^[0-9a-fA-F]{24}$/)) {
      project = await Project.findById(idOrSlug);
    }

    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Project not found: ${idOrSlug}`,
      });
    }

    // Update fields
    Object.assign(project, req.body);
    await project.save(); // triggers pre-save hooks (slug regeneration)

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error('PUT /api/projects/:id error:', error.message);

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: messages,
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error updating project',
    });
  }
});

// ────────────────────────────────────────────
// DELETE /api/projects/:idOrSlug — Delete project
// ────────────────────────────────────────────
router.delete('/:idOrSlug', async (req, res) => {
  try {
    const { idOrSlug } = req.params;

    let project = await Project.findOne({ slug: idOrSlug });
    if (!project && idOrSlug.match(/^[0-9a-fA-F]{24}$/)) {
      project = await Project.findById(idOrSlug);
    }

    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Project not found: ${idOrSlug}`,
      });
    }

    await project.deleteOne();

    res.status(200).json({
      success: true,
      message: `Project "${project.title}" deleted successfully`,
    });
  } catch (error) {
    console.error('DELETE /api/projects/:id error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error deleting project',
    });
  }
});

export default router;
