import { Career } from "../landing/CareerPanel";

export const careers: Career[] = [
  {
    companyName: "wizcore",
    startDate: new Date("2021-11-21"),
    endDate: new Date("2024-07-14"),
    position: "Front-End Web Developer",
    mainColor: "#1C51FA",
    projects: [
      {
        id: "1",
        title: "Safely",
        thumbnailSrc: "/images/safely-logo.png",
      },
      {
        id: "2",
        title: "Find-e",
        thumbnailSrc: "/images/finde/finde-logo.png",
      },

      {
        id: "3",
        title: "WCM",
        thumbnailSrc: "/images/cm-logo.png",
      },
    ],
  },
  {
    companyName: "ideaconcert",
    startDate: new Date("2020-09-01"),
    endDate: new Date("2020-11-25"),
    position: "Front-End Web Developer",
    mainColor: "#FC943B",
    projects: [],
  },
];
