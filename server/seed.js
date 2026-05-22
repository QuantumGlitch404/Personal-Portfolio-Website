/**
 * Seed script — Populates MongoDB with existing portfolio project data.
 * Run: npm run seed (from the server/ directory)
 */
import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import Project from './models/Project.js';

const seedProjects = [
  {
    title: 'CPUSIM',
    tagline: 'Dual-Architecture Microprocessor Studio',
    description:
      'Built a browser-based IDE that fully emulates Intel 8085 and 8086 CPUs, including complete instruction sets, 64KB/1MB memory spaces, and modular register management.',
    fullDescription:
      'CPUSIM is a comprehensive browser-based development environment that emulates two classic microprocessor architectures. The project features a complete implementation of the Intel 8085 and 8086 instruction sets, full memory emulation, and a custom two-pass assembler. Users can write assembly code, execute it step-by-step, set breakpoints, and visualize CPU state in real-time. The emulator includes DOS interrupt support for character and string I/O, allowing authentic assembly programs to run with live console feedback.',
    techStack: ['TypeScript', 'React 18', 'Next.js 15', 'Zustand', 'Tailwind CSS'],
    category: 'Web App',
    year: 2026,
    featured: true,
    image: '/cpusim.jpg',
    completionStatus: 'Completed',
    difficultyLevel: 'Expert',
    metrics: [
      { icon: '📊', text: '5,000+ instructions/cycle' },
      { icon: '🎯', text: 'O(n) assembler complexity' },
      { icon: '⚡', text: 'Real-time CPU visualization' },
      { icon: '💾', text: '1MB memory emulation' },
    ],
    links: {
      live: 'https://cpusim.vercel.app',
      github: 'https://github.com/QuantumGlitch404/cpusim',
    },
    highlights: [
      'Full 8085 & 8086 CPU emulation',
      'Custom two-pass assembler',
      'Step-by-step execution with breakpoints',
      'DOS interrupt emulation (INT 21h)',
      'Batched async execution engine',
    ],
    features: [
      'Intel 8085 full instruction set',
      'Intel 8086 full instruction set',
      '64KB and 1MB memory emulation',
      'Two-pass assembler with label resolution',
      'Breakpoint debugging',
      'Real-time register visualization',
      'DOS INT 21h support',
    ],
    color: '#00F5FF',
    sortOrder: 1,
  },
  {
    title: 'Zylarium',
    tagline: 'Complete Digital Toolkit Platform',
    description:
      'Architected a production-ready single-page web app with 30+ utility tools across five modules. Built all file operations to run entirely in the browser—no server required.',
    fullDescription:
      "Zylarium is an all-in-one digital toolkit featuring 30+ utilities organized into five specialized modules: UniToolBox (file conversions), HustleFinder (job search tools), Finance Dashboard (budget tracking), CodeX-Ray (code analysis), and AI Resume Builder. All heavy operations run client-side using WebAssembly and modern browser APIs, ensuring privacy and performance.",
    techStack: ['React 18', 'TypeScript', 'Next.js 15', 'Tailwind CSS', 'Genkit', 'TensorFlow.js', 'FFmpeg.wasm'],
    category: 'Web App',
    year: 2025,
    featured: true,
    image: '/zylarium.jpg',
    completionStatus: 'Completed',
    difficultyLevel: 'Advanced',
    metrics: [
      { icon: '🛠️', text: '30+ tools built' },
      { icon: '🔒', text: '100% client-side processing' },
      { icon: '🤖', text: 'AI-powered resume builder' },
      { icon: '⚡', text: 'Zero backend dependency' },
    ],
    links: {
      live: 'https://zylarium.vercel.app',
      github: 'https://github.com/QuantumGlitch404/zylarium',
    },
    highlights: [
      '5 specialized tool modules',
      'Client-side OCR and image processing',
      'AI resume optimization',
      'React Context state management',
      'SSR-safe localStorage persistence',
    ],
    features: [
      'UniToolBox file conversion suite',
      'HustleFinder job search tools',
      'Finance Dashboard with budgeting',
      'CodeX-Ray code analysis',
      'AI Resume Builder with Genkit',
      'FFmpeg.wasm for video processing',
      'TensorFlow.js ML inference',
    ],
    color: '#7B2FF7',
    sortOrder: 2,
  },
  {
    title: 'SplitSmart',
    tagline: 'AI-Powered Bill Splitting App',
    description:
      'Built a multimodal receipt scanner using device camera with AI-powered OCR to extract menu items and prices. Designed a fair financial split engine with proportional tax/tip.',
    fullDescription:
      "SplitSmart revolutionizes group bill splitting using AI and computer vision. Users can scan receipts with their phone camera, and the app uses Google's Gemini 2.0 Flash to extract menu items, prices, and totals with 95%+ accuracy. The sophisticated split engine fairly distributes tax and tip proportionally based on each person's order value.",
    techStack: ['Next.js 15', 'TypeScript', 'Genkit', 'Radix UI', 'Tailwind CSS', 'Zod', 'Recharts'],
    category: 'Web App',
    year: 2025,
    featured: true,
    image: '/splitsmart.jpg',
    completionStatus: 'Completed',
    difficultyLevel: 'Advanced',
    metrics: [
      { icon: '📸', text: '95%+ OCR accuracy' },
      { icon: '💰', text: 'Fair tax/tip distribution' },
      { icon: '📊', text: 'Real-time chart updates' },
      { icon: '🎯', text: 'Zod schema validation' },
    ],
    links: {
      live: 'https://splitsmart.vercel.app',
      github: 'https://github.com/QuantumGlitch404/splitsmart',
    },
    highlights: [
      'Camera-based receipt scanning',
      'Multimodal AI extraction',
      'Proportional tax calculation',
      'Interactive visualization',
      'Server-side AI processing',
    ],
    features: [
      'Device camera receipt capture',
      'Gemini 2.0 Flash OCR extraction',
      'Multi-person bill splitting',
      'Proportional tax/tip distribution',
      'Zod runtime validation',
      'Recharts interactive visualization',
    ],
    color: '#FF006E',
    sortOrder: 3,
  },
  {
    title: 'REDACTED',
    tagline: 'Privacy Intelligence Platform',
    description:
      'Developed a 12-tool privacy platform as a single HTML file with zero backend, zero tracking, and zero data collection. Built with AES-256-GCM encryption.',
    fullDescription:
      'REDACTED is a comprehensive privacy toolkit that runs entirely offline. As a single self-contained HTML file, it requires no installation and collects zero user data. Tools include PhotoGhost (EXIF metadata extraction), MetadataCorpse (document forensics), SurvivorKit (AES-256 encrypted emergency data storage), and WaterTable (groundwater analysis).',
    techStack: ['Vanilla JavaScript', 'HTML5', 'CSS3', 'Web Crypto API', 'Chart.js', 'Public APIs'],
    category: 'Tool',
    year: 2024,
    featured: true,
    image: '/redacted.jpg',
    completionStatus: 'Completed',
    difficultyLevel: 'Advanced',
    metrics: [
      { icon: '🔒', text: '12 privacy tools' },
      { icon: '📦', text: 'Single HTML file' },
      { icon: '🔐', text: 'AES-256-GCM encryption' },
      { icon: '👻', text: 'Zero data collection' },
    ],
    links: {
      live: 'https://redacted-privacy.netlify.app',
      github: 'https://github.com/QuantumGlitch404/REDACTED',
    },
    highlights: [
      'Fully offline operation',
      'EXIF metadata extraction',
      'Document forensics',
      'Self-decrypting HTML files',
      'Groundwater data analysis',
    ],
    features: [
      'PhotoGhost EXIF extraction',
      'MetadataCorpse document forensics',
      'SurvivorKit encrypted storage',
      'WaterTable groundwater analysis',
      'AES-256-GCM encryption engine',
      'Single-file deployment',
      'Zero network requests',
    ],
    color: '#FFD60A',
    sortOrder: 4,
  },
];

async function seed() {
  try {
    await connectDB();
    console.log('\n🌱 Starting database seed...\n');

    // Clear existing projects
    const deleted = await Project.deleteMany({});
    console.log(`🗑️  Cleared ${deleted.deletedCount} existing projects`);

    // Insert all projects
    const created = [];
    for (const projectData of seedProjects) {
      const project = await Project.create(projectData);
      created.push(project);
    }
    
    console.log(`✅ Seeded ${created.length} projects:\n`);

    created.forEach((p, i) => {
      console.log(`   ${i + 1}. ${p.title} (slug: ${p.slug})`);
    });

    console.log('\n🎉 Seed complete!\n');
  } catch (error) {
    console.error('❌ Seed error:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed.');
    process.exit(0);
  }
}

seed();
