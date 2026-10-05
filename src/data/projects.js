// To add a project, append an object to this array.
//
// group:      'main'    -> large cards at the top of the Projects section
//             'backend' -> compact cards in the "Backend & API Projects" subsection
// variant:    'primary' | 'secondary' | 'compact'
// categories: any of 'Featured' | 'Frontend' | 'Backend' | 'API' | 'Mobile' | 'AI'
// image:      path inside /public (e.g. /images/hishabi.png). If the file is missing
//             the card falls back to a neutral preview, so nothing breaks.
// problem / features / live / github are optional.
//
// Only facts that could be verified from the public repositories or were provided
// by the owner are listed here.

export const projects = [
  {
    id: 'hishabi',
    group: 'main',
    variant: 'primary',
    title: 'Hishabi — হিসাবী',
    tagline: 'সব হিসাব, এক জায়গায়',
    description:
      'A personal finance and mess management application designed for students and everyday users.',
    problem:
      'Personal spending, shared mess costs and who-owes-whom tend to live in notebooks and chat threads. Hishabi keeps expenses, budgets, meals and dena-pawna in one place.',
    features: [
      'Daily expense tracking',
      'Monthly expense tracking',
      'Budget management',
      'Mess management',
      'Meal management',
      'Dena-Pawna tracking',
      'Loan management',
      'Expense reports',
      'AI-assisted expense insights',
      'Budget warnings',
      'PDF expense reports',
    ],
    tech: [
      'Flutter',
      'Firebase',
      'Cloud Firestore',
      'Firebase Authentication',
      'Google Sign-In',
      'AI',
    ],
    categories: ['Featured', 'Mobile', 'AI'],
    live: 'https://hishabi-app.web.app',
    // No public Hishabi repository was found on the GitHub profile.
    // When it exists, add: github: 'https://github.com/tahsan410/<repo>'
    github: null,
    image: '/images/hishabi.png',
  },
  {
    id: 'courier-management-system',
    group: 'main',
    variant: 'secondary',
    title: 'Courier Management System',
    description:
      'A full-stack courier management platform designed to manage courier operations and delivery workflows through a centralized system.',
    problem:
      'Gives customers a simple way to book and track parcels, and gives admins one dashboard to manage every shipment.',
    features: [
      'Customer registration and JWT login',
      'Live delivery charge calculation',
      'Unique tracking codes',
      'Public parcel tracking, no login needed',
      'Admin dashboard with search, filters and CSV export',
      'Role-based access control',
      'Password reset via email',
      'Pending → Picked Up → In Transit → Delivered status flow',
    ],
    tech: [
      'Python',
      'FastAPI',
      'React',
      'Vite',
      'Tailwind CSS',
      'SQLAlchemy',
      'SQLite',
      'JWT',
      'REST API',
    ],
    categories: ['Featured', 'Frontend', 'Backend', 'API'],
    live: 'https://courier-management-system01.netlify.app/',
    github: 'https://github.com/tahsan410/courier-management-system',
    image: '/images/courier.png',
  },
  {
    id: 'expense-tracker-api',
    group: 'backend',
    variant: 'compact',
    title: 'Expense Tracker API',
    description:
      'A REST API for managing personal expenses with authentication, transaction management and database integration.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'JWT', 'REST API'],
    categories: ['Backend', 'API'],
    github: 'https://github.com/tahsan410/Expense-Tracker-API',
  },
  {
    id: 'fastapi-todoapp',
    group: 'backend',
    variant: 'compact',
    title: 'FastAPI Todo App',
    description:
      'A backend API for managing todo items with authentication and structured RESTful endpoints.',
    tech: ['Python', 'FastAPI', 'REST API', 'Authentication', 'Alembic'],
    categories: ['Backend', 'API'],
    github: 'https://github.com/tahsan410/fastapi-todoapp',
  },
  {
    id: 'movie-collection-api',
    group: 'backend',
    variant: 'compact',
    title: 'Movie Collection API',
    description:
      'A backend API for managing movie collection data through structured RESTful endpoints.',
    tech: ['Python', 'FastAPI', 'REST API'],
    categories: ['Backend', 'API'],
    github: 'https://github.com/tahsan410/Movie-Collection-API',
  },
  {
    id: 'api-project',
    group: 'backend',
    variant: 'compact',
    title: 'API Project',
    description:
      'An API-focused JavaScript project demonstrating practical API development.',
    tech: ['JavaScript', 'HTML', 'CSS', 'API'],
    categories: ['API'],
    github: 'https://github.com/tahsan410/API-Project',
  },
]
