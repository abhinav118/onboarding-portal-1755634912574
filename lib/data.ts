export const siteData = {
  "user": {
    "id": "1",
    "firstName": "",
    "lastName": "",
    "email": "",
    "department": "",
    "startDate": "",
    "profileComplete": false
  },
  "requiredDocs": [
    {
      "id": "1",
      "name": "ID Verification",
      "description": "Government issued photo ID",
      "required": true,
      "status": "pending",
      "dueDate": "2024-01-15"
    },
    {
      "id": "2",
      "name": "Tax Forms",
      "description": "W-4 and state tax forms",
      "required": true,
      "status": "pending",
      "dueDate": "2024-01-15"
    },
    {
      "id": "3",
      "name": "Emergency Contact Form",
      "description": "Emergency contact information",
      "required": true,
      "status": "pending",
      "dueDate": "2024-01-20"
    },
    {
      "id": "4",
      "name": "Direct Deposit Form",
      "description": "Banking information for payroll",
      "required": true,
      "status": "pending",
      "dueDate": "2024-01-20"
    }
  ],
  "onboardingTasks": [
    {
      "id": "1",
      "title": "Complete Profile Information",
      "description": "Fill out your personal and professional details",
      "status": "in-progress",
      "priority": "high",
      "dueDate": "2024-01-15",
      "estimatedTime": "15 minutes"
    },
    {
      "id": "2",
      "title": "Upload Required Documents",
      "description": "Submit all necessary paperwork",
      "status": "pending",
      "priority": "high",
      "dueDate": "2024-01-15",
      "estimatedTime": "20 minutes"
    },
    {
      "id": "3",
      "title": "Schedule HR Orientation",
      "description": "Meet with HR for company overview",
      "status": "pending",
      "priority": "medium",
      "dueDate": "2024-01-18",
      "estimatedTime": "1 hour"
    },
    {
      "id": "4",
      "title": "Meet Your Team",
      "description": "Introduction meeting with team members",
      "status": "pending",
      "priority": "medium",
      "dueDate": "2024-01-22",
      "estimatedTime": "30 minutes"
    },
    {
      "id": "5",
      "title": "Complete IT Setup",
      "description": "Set up accounts and access permissions",
      "status": "completed",
      "priority": "high",
      "dueDate": "2024-01-12",
      "estimatedTime": "45 minutes"
    },
    {
      "id": "6",
      "title": "Review Company Policies",
      "description": "Read and acknowledge company handbook",
      "status": "pending",
      "priority": "medium",
      "dueDate": "2024-01-25",
      "estimatedTime": "2 hours"
    },
    {
      "id": "7",
      "title": "Benefits Enrollment",
      "description": "Select health insurance and benefits",
      "status": "pending",
      "priority": "high",
      "dueDate": "2024-01-30",
      "estimatedTime": "1 hour"
    },
    {
      "id": "8",
      "title": "First Week Check-in",
      "description": "Meeting with manager to discuss progress",
      "status": "pending",
      "priority": "low",
      "dueDate": "2024-02-01",
      "estimatedTime": "30 minutes"
    }
  ],
  "resources": [
    {
      "id": "1",
      "title": "Employee Handbook",
      "description": "Complete guide to company policies and procedures",
      "type": "document",
      "icon": "book",
      "url": "/resources/handbook.pdf"
    },
    {
      "id": "2",
      "title": "Organization Chart",
      "description": "Visual representation of company structure",
      "type": "document",
      "icon": "users",
      "url": "/resources/org-chart.pdf"
    },
    {
      "id": "3",
      "title": "Benefits Guide",
      "description": "Detailed information about employee benefits",
      "type": "document",
      "icon": "heart",
      "url": "/resources/benefits.pdf"
    },
    {
      "id": "4",
      "title": "IT Support",
      "description": "Technical support and software downloads",
      "type": "link",
      "icon": "computer",
      "url": "https://support.company.com"
    },
    {
      "id": "5",
      "title": "Learning Platform",
      "description": "Access training courses and certifications",
      "type": "link",
      "icon": "academic-cap",
      "url": "https://learning.company.com"
    },
    {
      "id": "6",
      "title": "Office Map",
      "description": "Navigate your workplace with interactive maps",
      "type": "document",
      "icon": "map",
      "url": "/resources/office-map.pdf"
    }
  ],
  "meetings": [
    {
      "id": "1",
      "title": "HR Orientation",
      "description": "Overview of company culture, policies, and procedures",
      "duration": 60,
      "participants": [
        "HR Team"
      ],
      "required": true
    },
    {
      "id": "2",
      "title": "Team Introduction",
      "description": "Meet your immediate team members and learn about ongoing projects",
      "duration": 30,
      "participants": [
        "Direct Team"
      ],
      "required": true
    },
    {
      "id": "3",
      "title": "Manager Check-in",
      "description": "One-on-one with your direct manager",
      "duration": 30,
      "participants": [
        "Direct Manager"
      ],
      "required": true
    }
  ],
  "settings": {
    "companyName": "TechCorp Inc.",
    "supportEmail": "hr@techcorp.com",
    "supportPhone": "+1 (555) 123-4567",
    "workingHours": "9:00 AM - 6:00 PM",
    "timezone": "EST"
  }
};

export const navigation = {
  "main": [
    {
      "label": "Welcome",
      "route": "/",
      "icon": "home"
    },
    {
      "label": "Complete Profile",
      "route": "/profile",
      "icon": "user"
    },
    {
      "label": "Documents",
      "route": "/documents",
      "icon": "document"
    },
    {
      "label": "Tasks",
      "route": "/tasks",
      "icon": "check-circle"
    },
    {
      "label": "Resources",
      "route": "/resources",
      "icon": "library"
    },
    {
      "label": "Schedule",
      "route": "/schedule",
      "icon": "calendar"
    }
  ],
  "footer": [
    {
      "label": "Help & Support",
      "route": "/support",
      "icon": "question-mark-circle"
    },
    {
      "label": "Contact HR",
      "route": "/contact",
      "icon": "phone"
    }
  ]
};