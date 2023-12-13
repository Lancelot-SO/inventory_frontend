import { MdDashboardCustomize } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { IoBagAdd } from "react-icons/io5";
import { RiAccountPinCircleFill } from "react-icons/ri";

const menu = [
  {
    title: "Dashboard",
    icon: <MdDashboardCustomize />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <IoBagAdd />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <RiAccountPinCircleFill />,
    childrens: [
      {
        title: "Profile",
        icon1: <RiAccountPinCircleFill />,
        path: "/profile",
      },
      {
        title: "Edit Profile",
        icon2: <RiAccountPinCircleFill />,
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <HiDocumentReport />,
    path: "/contact-us",
  },
];

export default menu;
