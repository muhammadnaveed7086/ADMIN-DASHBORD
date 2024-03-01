// .SidebarImport
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

// Export Sidebar
export const SidebarData = [
  { icon: UilEstate, heading: "Dashboard" },
  { icon: UilClipboardAlt, heading: "Orders" },
  { icon: UilUsersAlt, heading: "Customers" },
  { icon: UilPackage, heading: "Products" },
  { icon: UilChart, heading: "Analytics" },
  
];

export const CardsData = [
  {
    title: "Sales",
    color: {
      background: "linear-gradient(180deg,#BB67FF 0%, #C484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 80,
    value: "52,670", // Corrected prop name from vlaue to value
    png: UilEstate,
    series: [{ name: "Sales", data: [31, 40, 28, 51, 42, 109, 100] }],
  },
  {
    title: "Revenue",
    color: {
      background: "linear-gradient(180deg,#FF919d 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970", // Corrected prop name from vlaue to value
    png: UilEstate,
    series: [{ name: "Revenue", data: [21, 40, 98, 32, 78, 109, 100] }],
  },
  {
    title: "Expenses",
    color: {
      background:
        "linear-gradient(rgb(248,21,154) -146.42%, rgb(255,202,113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9d59B",
    },
    barValue: 60,
    value: "4,270", // Corrected prop name from vlaue to value
    png: UilEstate,
    series: [{ name: "Expenses", data: [10, 25, 15, 30, 12, 15, 20] }],
  },
];

