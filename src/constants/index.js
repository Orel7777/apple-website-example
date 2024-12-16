// constants/index.js
import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["חנות", "מק", "אייפון", "תמיכה"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: ["הדבר הבא A17 שבב פורץ דרך, ביצועים חסרי תקדים"],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["קל ,חזק, מהיר ומקצועי ברמה מקסימלית"],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: ["כפתור פעולה חדש "],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "אייפון 15 Pro בטיטניום טבעי",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "אייפון 15 Pro בטיטניום כחול",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "אייפון 15 Pro בטיטניום לבן",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "אייפון 15 Pro בטיטניום שחור",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "מדיניות פרטיות",
  "תנאי שימוש",
  "מדיניות מכירה",
  "משפטי",
  "מפת האתר",
];
