export const projects = [
  {
    id: 1,
    title: "CPUSIM",
    tagline: "Dual-Architecture Microprocessor Studio",
    description: "Built a browser-based IDE that fully emulates Intel 8085 and 8086 CPUs, including complete instruction sets, 64KB/1MB memory spaces, and modular register management.",
    fullDescription: "CPUSIM is a comprehensive browser-based development environment that emulates two classic microprocessor architectures. The project features a complete implementation of the Intel 8085 and 8086 instruction sets, full memory emulation, and a custom two-pass assembler. Users can write assembly code, execute it step-by-step, set breakpoints, and visualize CPU state in real-time. The emulator includes DOS interrupt support for character and string I/O, allowing authentic assembly programs to run with live console feedback.",
    techStack: ["TypeScript", "React 18", "Next.js 15", "Zustand", "Tailwind CSS"],
    category: "Web App",
    year: 2026,
    featured: true,
    image: "/cpusim.jpg",
    metrics: [
      { icon: "📊", text: "5,000+ instructions/cycle" },
      { icon: "🎯", text: "O(n) assembler complexity" },
      { icon: "⚡", text: "Real-time CPU visualization" },
      { icon: "💾", text: "1MB memory emulation" }
    ],
    links: {
      live: "https://cpusim.vercel.app",
      github: "https://github.com/QuantumGlitch404/cpusim"
    },
    highlights: [
      "Full 8085 & 8086 CPU emulation",
      "Custom two-pass assembler",
      "Step-by-step execution with breakpoints",
      "DOS interrupt emulation (INT 21h)",
      "Batched async execution engine"
    ],
    color: "#00F5FF"
  },
  {
    id: 2,
    title: "Zylarium",
    tagline: "Complete Digital Toolkit Platform",
    description: "Architected a production-ready single-page web app with 30+ utility tools across five modules. Built all file operations to run entirely in the browser—no server required.",
    fullDescription: "Zylarium is an all-in-one digital toolkit featuring 30+ utilities organized into five specialized modules: UniToolBox (file conversions), HustleFinder (job search tools), Finance Dashboard (budget tracking), CodeX-Ray (code analysis), and AI Resume Builder. All heavy operations run client-side using WebAssembly and modern browser APIs, ensuring privacy and performance.",
    techStack: ["React 18", "TypeScript", "Next.js 15", "Tailwind CSS", "Genkit", "TensorFlow.js", "FFmpeg.wasm"],
    category: "Web App",
    year: 2025,
    featured: true,
    image: "/zylarium.jpg",
    metrics: [
      { icon: "🛠️", text: "30+ tools built" },
      { icon: "🔒", text: "100% client-side processing" },
      { icon: "🤖", text: "AI-powered resume builder" },
      { icon: "⚡", text: "Zero backend dependency" }
    ],
    links: {
      live: "https://zylarium.vercel.app",
      github: "https://github.com/QuantumGlitch404/zylarium"
    },
    highlights: [
      "5 specialized tool modules",
      "Client-side OCR and image processing",
      "AI resume optimization",
      "React Context state management",
      "SSR-safe localStorage persistence"
    ],
    color: "#7B2FF7"
  },
  {
    id: 3,
    title: "SplitSmart",
    tagline: "AI-Powered Bill Splitting App",
    description: "Built a multimodal receipt scanner using device camera with AI-powered OCR to extract menu items and prices. Designed a fair financial split engine with proportional tax/tip.",
    fullDescription: "SplitSmart revolutionizes group bill splitting using AI and computer vision. Users can scan receipts with their phone camera, and the app uses Google's Gemini 2.0 Flash to extract menu items, prices, and totals with 95%+ accuracy. The sophisticated split engine fairly distributes tax and tip proportionally based on each person's order value.",
    techStack: ["Next.js 15", "TypeScript", "Genkit", "Radix UI", "Tailwind CSS", "Zod", "Recharts"],
    category: "Web App",
    year: 2025,
    featured: true,
    image: "/splitsmart.jpg",
    metrics: [
      { icon: "📸", text: "95%+ OCR accuracy" },
      { icon: "💰", text: "Fair tax/tip distribution" },
      { icon: "📊", text: "Real-time chart updates" },
      { icon: "🎯", text: "Zod schema validation" }
    ],
    links: {
      live: "https://splitsmart.vercel.app",
      github: "https://github.com/QuantumGlitch404/splitsmart"
    },
    highlights: [
      "Camera-based receipt scanning",
      "Multimodal AI extraction",
      "Proportional tax calculation",
      "Interactive visualization",
      "Server-side AI processing"
    ],
    color: "#FF006E"
  },
  {
    id: 4,
    title: "REDACTED",
    tagline: "Privacy Intelligence Platform",
    description: "Developed a 12-tool privacy platform as a single HTML file with zero backend, zero tracking, and zero data collection. Built with AES-256-GCM encryption.",
    fullDescription: "REDACTED is a comprehensive privacy toolkit that runs entirely offline. As a single self-contained HTML file, it requires no installation and collects zero user data. Tools include PhotoGhost (EXIF metadata extraction), MetadataCorpse (document forensics), SurvivorKit (AES-256 encrypted emergency data storage), and WaterTable (groundwater analysis).",
    techStack: ["Vanilla JavaScript", "HTML5", "CSS3", "Web Crypto API", "Chart.js", "Public APIs"],
    category: "Tool",
    year: 2024,
    featured: true,
    image: "/redacted.jpg",
    metrics: [
      { icon: "🔒", text: "12 privacy tools" },
      { icon: "📦", text: "Single HTML file" },
      { icon: "🔐", text: "AES-256-GCM encryption" },
      { icon: "👻", text: "Zero data collection" }
    ],
    links: {
      live: "https://redacted-privacy.netlify.app",
      github: "https://github.com/QuantumGlitch404/REDACTED"
    },
    highlights: [
      "Fully offline operation",
      "EXIF metadata extraction",
      "Document forensics",
      "Self-decrypting HTML files",
      "Groundwater data analysis"
    ],
    color: "#FFD60A"
  }
];
