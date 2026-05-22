import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useProjects } from '../../hooks/useProjects';
import './Projects.css';

// Skeleton loader for projects while API data is loading
function ProjectSkeleton({ index }) {
  const isImageLeft = index % 2 === 0;
  return (
    <div className={`project-spread ${isImageLeft ? 'layout-left' : 'layout-right'}`}>
      <div className="project-image-col">
        <div className="project-screenshot-wrapper skeleton-shimmer" style={{ aspectRatio: '16/10', borderRadius: '12px' }} />
      </div>
      <div className="project-content-col">
        <div className="skeleton-shimmer" style={{ width: '80px', height: '14px', marginBottom: '16px', borderRadius: '4px' }} />
        <div className="skeleton-shimmer" style={{ width: '200px', height: '32px', marginBottom: '10px', borderRadius: '6px' }} />
        <div className="skeleton-shimmer" style={{ width: '260px', height: '18px', marginBottom: '20px', borderRadius: '4px' }} />
        <div className="skeleton-shimmer" style={{ width: '100%', height: '60px', marginBottom: '16px', borderRadius: '6px' }} />
        <div className="skeleton-shimmer" style={{ width: '70%', height: '14px', marginBottom: '24px', borderRadius: '4px' }} />
        <div className="skeleton-shimmer" style={{ width: '140px', height: '36px', borderRadius: '6px' }} />
      </div>
    </div>
  );
}

// Project Component
function ProjectSpread({ project, index }) {
  const [ref, isVisible] = useScrollReveal({ margin: "-30% 0px" });
  
  // Alternating layout: even is image left, odd is image right
  const isImageLeft = index % 2 === 0;

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.98 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const contentVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 }
    }
  };

  const formattedNum = String(index + 1).padStart(2, '0');

  const mockMetrics = [
    "Production-grade architecture",
    "Optimized performance metrics",
    "Comprehensive test coverage"
  ];

  return (
    <div 
      className={`project-spread ${isImageLeft ? 'layout-left' : 'layout-right'}`}
      ref={ref}
    >
      <motion.div 
        className="project-image-col"
        variants={imageVariant}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
      >
        <div className="project-screenshot-wrapper">
          <img 
            src={project.image || "/placeholder.jpg"} 
            alt={project.title} 
            className="project-screenshot"
          />
        </div>
      </motion.div>

      <motion.div 
        className="project-content-col"
        variants={contentVariant}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
      >
        <div className="project-number text-mono">
          {formattedNum} — {project.featured && <span className="featured-badge">Featured Project</span>}
        </div>
        
        <h2 className="project-title text-display">{project.title}</h2>
        <h3 className="project-tagline">{project.tagline}</h3>
        
        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tech-stack text-mono">
          {(project.techStack || []).join(' • ')}
        </div>

        <div className="project-metrics">
          <div className="metrics-title text-mono">Key Metrics</div>
          <ul className="metrics-list">
            {(project.highlights || mockMetrics).map((metric, i) => (
              <li key={i}>• {metric}</li>
            ))}
          </ul>
        </div>

        <div className="project-links">
          {project.links?.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer" className="cta-link">
              View Project →
            </a>
          )}
          {project.links?.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer" className="cta-link" style={{marginLeft: '24px'}}>
              Source Code →
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();
  const { projects, loading, error } = useProjects();
  
  return (
    <section id="projects" className="projects-editorial">
      {/* Section Header */}
      <div className="projects-header-container" ref={ref}>
        <motion.div 
          className="projects-header-box"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ph-top">
            <span className="text-mono">FEATURED WORK</span>
            <span className="text-mono">━━━━ {String(projects.length || '04').padStart(2, '0')}</span>
          </div>
          <div className="ph-title text-display">
            SELECTED<br/>PROJECTS
          </div>
          <div className="ph-subtitle">
            A collection of products, experiments,<br/>
            and ideas brought to life through code.
          </div>
          {error && (
            <div className="api-status text-mono" style={{ color: '#FFD60A', fontSize: '11px', marginTop: '12px', opacity: 0.7 }}>
              ⚡ Showing cached data • API: offline
            </div>
          )}
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="projects-list">
        {loading ? (
          // Show skeleton loaders while fetching
          [0, 1, 2, 3].map((i) => <ProjectSkeleton key={i} index={i} />)
        ) : (
          projects.map((project, index) => (
            <ProjectSpread key={project._id || project.id} project={project} index={index} />
          ))
        )}
      </div>
    </section>
  );
}
