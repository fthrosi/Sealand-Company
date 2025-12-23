import type { Division } from "@/types/team";

export const divisionsData: Division[] = [
  {
    id: "top-management",
    name: "Top Management",
    members: [
      {
        id: "1",
        name: "Syawal",
        position: "Director",
        email: "john.smith@company.com",
        photo: "/images/teams/8.jpeg",
        managerId: null,
      },
      {
        id: "2",
        name: "Hepita",
        position: "General Manager",
        email: "sarah.johnson@company.com",
        photo: "/images/teams/1.jpeg",
        managerId: "1",
      },
    ],
  },
  {
    id: "crewing",
    name: "Crewing",
    members: [
      {
        id: "3",
        name: "Rusdin",
        position: "Crewing Manager",
        email: "emma.williams@company.com",
        photo: "/images/teams/7.jpeg",
        managerId: null,
      },
      {
        id: "4",
        name: "Nirma",
        position: "Crewing Staff",
        email: "david.brown@company.com",
        photo: "/images/teams/4.jpeg",
        managerId: "3",
      },
      {
        id: "5",
        name: "Jumriaty",
        position: "Crewing Staff",
        email: "david.brown@company.com",
        photo: "/images/teams/2.jpeg",
        managerId: "3",
      },
      {
        id: "6",
        name: "Yasir",
        position: "Crewing Staff",
        email: "david.brown@company.com",
        photo: "/images/teams/12.jpeg",
        managerId: "3",
      },
      {
        id: "7",
        name: "Aqil",
        position: "Crewing Staff",
        email: "david.brown@company.com",
        photo: "/images/teams/13.jpeg",
        managerId: "3",
      },
      {
        id: "8",
        name: "Wisnu",
        position: "Crewing Staff",
        email: "david.brown@company.com",
        photo: "/images/teams/10.jpeg",
        managerId: "3",
      },
      {
        id: "9",
        name: "Kurriyah",
        position: "Crewing Staff",
        email: "david.brown@company.com",
        photo: "/images/teams/3.jpeg",
        managerId: "3",
      },
    ],
  },
  {
    id: "finance",
    name: "Finance",
    members: [
      {
        id: "10",
        name: "Vivi",
        position: "Finance Manager",
        email: "lisa.anderson@company.com",
        photo: "/images/teams/9.jpeg",
        managerId: null,
      },
      {
        id: "11",
        name: "Nurul",
        position: "Finance & Document",
        email: "james.wilson@company.com",
        photo: "/images/teams/5.jpeg",
        managerId: "10",
      }
    ],
  },
  {
    id: "hr",
    name: "Human Resources",
    members: [
      {
        id: "12",
        name: "Catherine",
        position: "HR Manager",
        email: "patricia.garcia@company.com",
        photo: "/images/teams/14.jpeg",
        managerId: null,
      }
    ],
  },
  {
    id: "trainer",
    name: "Trainer",
    members: [
      {
        id: "13",
        name: "Rudi",
        position: "Engine Trainer",
        email: "patricia.garcia@company.com",
        photo: "/images/teams/6.jpeg",
        managerId: null,
      },
      {
        id: "14",
        name: "Jihad",
        position: "Deck Trainer",
        email: "patricia.garcia@company.com",
        photo: "/images/teams/11.jpeg",
        managerId: null,
      }
    ],
  },
]