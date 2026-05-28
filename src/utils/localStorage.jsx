const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Create monthly sales performance report.",
        taskDate: "2026-05-28",
        category: "Reports",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update CRM",
        taskDescription: "Update customer records in CRM system.",
        taskDate: "2026-05-20",
        category: "Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Attend project discussion with client.",
        taskDate: "2026-05-30",
        category: "Meetings",
      },
    ],
  },

  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve authentication issue in app.",
        taskDate: "2026-05-27",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests from team members.",
        taskDate: "2026-05-18",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy API",
        taskDescription: "Deploy latest API build to server.",
        taskDate: "2026-05-15",
        category: "Deployment",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Add unit tests for dashboard module.",
        taskDate: "2026-05-29",
        category: "Testing",
      },
    ],
  },

  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create responsive landing page UI.",
        taskDate: "2026-05-31",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Logo",
        taskDescription: "Redesign company logo for branding.",
        taskDate: "2026-05-12",
        category: "Branding",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Banner",
        taskDescription: "Design promotional banner for campaign.",
        taskDate: "2026-06-01",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prototype Review",
        taskDescription: "Present app prototype to stakeholders.",
        taskDate: "2026-05-16",
        category: "UI/UX",
      },
    ],
  },

  {
    id: 4,
    firstName: "Krishna",
    email: "employee4@example.com",
    password: "123",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Backup production database securely.",
        taskDate: "2026-05-27",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve SQL query performance.",
        taskDate: "2026-05-21",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Monitor uptime and server logs.",
        taskDate: "2026-05-30",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Migration Task",
        taskDescription: "Migrate old database to new server.",
        taskDate: "2026-05-10",
        category: "Migration",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Check vulnerabilities in backend system.",
        taskDate: "2026-06-02",
        category: "Security",
      },
    ],
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Social Media Post",
        taskDescription: "Create Instagram campaign content.",
        taskDate: "2026-05-28",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email Campaign",
        taskDescription: "Send newsletter to subscribers.",
        taskDate: "2026-05-19",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website SEO ranking.",
        taskDate: "2026-06-03",
        category: "SEO",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Ad Campaign",
        taskDescription: "Launch Facebook ads campaign.",
        taskDate: "2026-05-14",
        category: "Advertising",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Analyze competitors in the market.",
        taskDate: "2026-06-05",
        category: "Research",
      },
    ],
  },
];
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
