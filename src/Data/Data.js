// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilChart,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilCheckSquare, UilUtensils , UilBan  } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Relatórios",
  },
  {
    icon: UilUsersAlt,
    heading: "Funcionários",
  },
  {
    icon: UilChart,
    heading: 'Gráficos'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Pontos Registrados",
    color: {
      backGround: "linear-gradient(180deg, #063970 0%, #315d7f 100%)",
      boxShadow: "0px 10px 20px 0px #ffffff",
    },
    barValue: 90,
    value: "486",
    png: UilCheckSquare ,
    series: [
      {
        name: "Pontos Registrados",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Faltas",
    color: {
      backGround: "linear-gradient(180deg, #290911 0%, #4e1d29 100%)",
      boxShadow: "0px 10px 20px 0px #Bd7788",
    },
    barValue: 80,
    value: "14",
    png: UilBan,
    series: [
      {
        name: "Faltas",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Intervalos",
    color: {
      backGround:
        "linear-gradient(180deg, #F7cd1c 0%, #C9b148 100%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilUtensils ,
    series: [
      {
        name: "Intervalos",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Patrick Martins",
    noti: "Registrou a entrada.",
    time: "25 minutos atrás",
  },
  {
    img: img2,
    name: "Vanderson Godoy",
    noti: "Registrou a entrada.",
    time: "30 minutos atrás",
  },
  {
    img: img3,
    name: "Rogério Siqueira",
    noti: "Registrou a saída.",
    time: "2 horas atrás",
  },
];
