type Project = Readonly<{
  id: string;
  title: string;
  description: string;
  isPrivate?: boolean;
  url?: string;
  tags: string[];
}>;

export const projects: Project[] = [
  {
    id: 'mule',
    title: 'Mule',
    description:
      "An iOS and Android app that served as a peer-to-peer delivery platform empowering students to be one another's service providers while efficiently managing their time (100+ users)",
    url: 'https://github.com/themuleapp/mule-app',
    tags: ['Flutter', 'Express', 'Firebase'],
  },
  {
    id: 'tools-for-business',
    title: 'Tools for Business',
    description:
      'Browse over 100+ curated AI tools for business that will enable you to scale and create more revenue, reduce your costs, and optimize your content and customer engagement',
    url: 'https://github.com/mrigankdoshy/tools-for-business',
    isPrivate: true,
    tags: ['Next.js', 'Supabase', 'Framer Motion'],
  },
  {
    id: 'personal-website-v1',
    title: 'Personal Website v1',
    description:
      'A personal portfolio website built using Flutter and hosted with Vercel',
    url: 'https://github.com/mrigankdoshy/personal-website-v1/',
    tags: ['Flutter', 'Vercel'],
  },
  {
    id: 'personal-website-v2',
    title: 'Personal Website v2',
    description:
      'v2 of my personal portfolio website, built using Next.js and hosted with Vercel',
    url: 'https://github.com/mrigankdoshy/personal-website-v2/',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 'astronutz',
    title: 'Astronutz',
    description:
      'Website for Astronutz - a collection of 10,000 nutty NFTs. Built using React + Chakra UI and hosted with Netlify',
    url: 'https://github.com/mrigankdoshy/astronutz',
    tags: ['React', 'Typescript', 'Vite'],
  },
  {
    id: 'ui-clones',
    title: 'UI Clones',
    description:
      'Cloning UIs of apps: Twitter, Spotify, Netflix, Instagram, Snapchat',
    url: 'https://github.com/mrigankdoshy/ui-clones',
    tags: ['Flutter', 'iOS', 'Android'],
  },
  {
    id: 'options-pricing',
    title: 'Options Pricing',
    description:
      'Applying High Performance Computing techniques to compute the prices of American and European options using different pricing methods',
    url: 'https://github.com/mrigankdoshy/options-pricing',
    tags: ['OpenMP', 'MPI', 'Monte Carlo'],
  },
  {
    id: 'monte-carlo-simulation',
    title: 'Monte Carlo Simulation',
    description:
      'A serial, a multithreaded and two parallel programs for the estimation of Pi using the Monte Carlo Method. Parallelized using OpenMP and MPI',
    url: 'https://github.com/mrigankdoshy/monte-carlo-simulation-pi',
    tags: ['OpenMP', 'MPI', 'Monte Carlo'],
  },
  {
    id: 'netflix-memories',
    title: 'Netflix Memories',
    description: 'A collection of memories in a Netflix themed app',
    url: 'https://github.com/mrigankdoshy/netflix-memories',
    isPrivate: true,
    tags: ['Flutter', 'iOS', 'Android'],
  },
  {
    id: 'components',
    title: 'Components',
    description:
      'A collection of components built with Tailwind CSS and Framer Motion',
    url: 'https://github.com/mrigankdoshy/components',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 'principal-component-analysis',
    title: 'Principal Component Analysis',
    description:
      'Explore PCA to discern whether low-dimensional structure exists in a set of data and to find good representations of the data in that subspace',
    url: 'https://github.com/mrigankdoshy/principal-component-analysis',
    isPrivate: true,
    tags: ['Python', 'Scikit-learn', 'PCA'],
  },
  {
    id: 'k-means-clustering',
    title: 'K-means Clustering',
    description:
      'Implementing the k-means++ algorithm using it to cluster Iris dataset from the UCI Machine Learning Repository',
    url: 'https://github.com/mrigankdoshy/k-means-clustering',
    isPrivate: true,
    tags: ['Python', 'Scipy', 'K-means'],
  },
  {
    id: 'non-linear-classifiers',
    title: 'Non-Linear Classifiers',
    description:
      'Experiment with non-linear classifiers: Boosted Decision Trees (i.e., boosting with decision trees as weak learner) and Random Forests',
    url: 'https://github.com/mrigankdoshy/non-linear-classifiers',
    isPrivate: true,
    tags: ['Python', 'Scikit-learn', 'XGBoost'],
  },
  {
    id: 'linear-regression',
    title: 'Linear Regression',
    description:
      'A simple linear regression model with a modified loss function and try to solve it with Gradient Descant (GD) and Stochastic Gradient Descant (SGD)',
    url: 'https://github.com/mrigankdoshy/linear-regression-gd-sgd',
    isPrivate: true,
    tags: ['Python', 'Matplotlib'],
  },
  {
    id: 'knn-algorithm',
    title: 'K-NN Algorithm',
    description:
      'Use the k-NN algorithm to find the optimal value for the number of neighbors k, using the implementation in scikit-learn',
    url: 'https://github.com/mrigankdoshy/k-NN-algorithm',
    isPrivate: true,
    tags: ['Python', 'Scikit-learn'],
  },
  {
    id: 'exploratory-data-analysis',
    title: 'Exploratory Data Analysis',
    description:
      'Basic data analysis on a simple data set (UCI Adult data set) using pandas package in Python',
    url: 'https://github.com/mrigankdoshy/exploratory-data-analysis',
    isPrivate: true,
    tags: ['Python', 'Pandas'],
  },
  {
    id: 'virtual-memory-paging',
    title: 'Virtual Memory Paging',
    description:
      'Implemented an access control mechanism to perform translations / accesses for when pages are already in memory, and fault over to the software when the page is not resident',
    url: 'https://github.com/PSU473/p3-2020-vm-paging-cmpsc-473-project-3',
    isPrivate: true,
    tags: ['C', 'OS', 'Page Replacement'],
  },
  {
    id: 'memory-allocation',
    title: 'Memory Allocation',
    description:
      'Implemented the Buddy System and Slab Allocation for memory allocation / de-allocation, and reduced Internal Fragmentation',
    url: 'https://github.com/PSU473/p2-2020-memory-allocation-cmpsc-473-project-2',
    isPrivate: true,
    tags: ['C', 'OS', 'Memory Management'],
  },
  {
    id: 'thread-schedulers-with-semaphore-synchronization',
    title: 'Thread Schedulers with Semaphore Synchronization',
    description:
      'Designed four multi-threaded schedulers (FCFS, SRTF, PBS, MLFQ) with preemption and synchronization for a uni-processor environment',
    url: 'https://github.com/PSU473/p1-2020-thread-schedulers-cmpsc-473-project-1',
    isPrivate: true,
    tags: ['C', 'Multi-threading'],
  },
  {
    id: 'recursive-decent-parser',
    title: 'Recursive Decent Parser',
    description:
      'Developed a Lexical Analyzer and a Syntactic Analyzer which parses the tokens given by the Lexer using the Recursive Descent technique for a restricted for of SQL',
    url: 'https://github.com/mrigankdoshy/recursive-descent-parser',
    isPrivate: true,
    tags: ['Python'],
  },
  {
    id: 'matrix-multiplication',
    title: 'Matrix Multiplication',
    description:
      'Comparison of Sequential, OpenMP Parallel and MPI Parallel code that accomplishes Matrix Multiplication',
    url: 'https://github.com/mrigankdoshy/matrix-multiplication',
    tags: ['OpenMP', 'MPI'],
  },
  {
    id: '32-bit-cpu',
    title: '32-bit CPU',
    description:
      'Created an 32-bit processor using the pipelining technique for building a fast CPU',
    url: 'https://github.com/mrigankdoshy/32bit-cpu',
    isPrivate: true,
    tags: ['Verilog', 'FPGA', 'Xilinx'],
  },
  {
    id: 'lion-launchpad-app',
    title: 'Lion LaunchPad App',
    description:
      'An app that provides an accessible way for members to visualize, track and lend out inventory items, and perform other exigencies of the SLO',
    tags: ['FramerX', 'Adobe XD'],
  },
  {
    id: 'sequential-caching-web-proxy',
    title: 'Sequential Caching Web Proxy',
    description: 'A Sequential Caching Web Proxy with Range Support',
    url: 'https://github.com/mrigankdoshy/sequential-caching-web-proxy',
    isPrivate: true,
    tags: ['C', 'Cache'],
  },
  {
    id: 'unix-shell',
    title: 'Unix Shell',
    description:
      'Created a simple Unix Shell that supports job control, allows users to move jobs back and forth between the back-ground and foreground, and to change the process state of a job',
    url: 'https://github.com/mrigankdoshy/unix-shell',
    isPrivate: true,
    tags: ['C', 'Unix'],
  },
  {
    id: 'text-based-game',
    title: 'Text Based Game',
    description:
      'Developed a text-based game using Model View Controller Design Pattern that lets you explore campus and pick up different items via the console',
    url: 'https://github.com/mrigankdoshy/text-based-game',
    isPrivate: true,
    tags: ['Java', 'MVC', 'Strategy Pattern'],
  },
];
