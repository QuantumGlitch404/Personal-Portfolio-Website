import mongoose from 'mongoose';

const metricSchema = new mongoose.Schema(
  {
    icon: { type: String, default: '📊' },
    text: { type: String, required: true },
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    // Core identification
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // Descriptions
    tagline: {
      type: String,
      trim: true,
      maxlength: [200, 'Tagline cannot exceed 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Short description is required'],
      trim: true,
    },
    fullDescription: {
      type: String,
      trim: true,
    },

    // Classification
    category: {
      type: String,
      enum: ['Web App', 'Mobile App', 'AI', 'Tool', 'Utility', 'Game', 'Library', 'Other'],
      default: 'Web App',
    },
    difficultyLevel: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
      default: 'Intermediate',
    },

    // Technology & features
    techStack: {
      type: [String],
      default: [],
    },
    highlights: {
      type: [String],
      default: [],
    },
    features: {
      type: [String],
      default: [],
    },
    metrics: {
      type: [metricSchema],
      default: [],
    },

    // Media
    image: {
      type: String,
      default: '/placeholder.jpg',
    },
    screenshots: {
      type: [String],
      default: [],
    },
    videoUrl: {
      type: String,
      default: '',
    },

    // Links
    links: {
      live: { type: String, default: '' },
      github: { type: String, default: '' },
    },

    // Status & visibility
    featured: {
      type: Boolean,
      default: false,
    },
    completionStatus: {
      type: String,
      enum: ['In Progress', 'Completed', 'Archived', 'On Hold'],
      default: 'Completed',
    },

    // Theming
    color: {
      type: String,
      default: '#00F5FF',
    },

    // Metadata
    year: {
      type: Number,
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // auto createdAt & updatedAt
  }
);

// Auto-generate slug from title before saving
projectSchema.pre('save', function (next) {
  if (this.isModified('title') || !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

// Index for fast queries
projectSchema.index({ featured: -1, sortOrder: 1 });
projectSchema.index({ category: 1 });
// Slug is indexed via unique: true

const Project = mongoose.model('Project', projectSchema);

export default Project;
