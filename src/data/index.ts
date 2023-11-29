import HomeIcon from "../assets/icons/nav/icon-home.svg";
import WidgetsIcon from "../assets/icons/nav/icon-widgets.svg";
import BellIcon from "../assets/icons/nav/icon-bell.svg";
import ChatIcon from "../assets/icons/nav/icon-chat.svg";

import LinkIcon from "../assets/icons/nav/icon-link.svg";
import StoreIcon from "../assets/icons/nav/icon-store.svg";
import FolderIcon from "../assets/icons/nav/icon-folder.svg";
import InvoiceIcon from "../assets/icons/nav/icon-invoice.svg";

export const menuItems = {
  appMenu: [
    { id: "1", title: "Home" },
    { id: "2", title: "Analytics" },
    { id: "3", title: "Revenue" },
    { id: "4", title: "CRM" },
  ],
  apps: { title: "Apps", icon: WidgetsIcon },
  commsMenu: [
    { id: "1", title: "Notification", icon: BellIcon },
    { id: "2", title: "Chat", icon: ChatIcon },
  ],
  userDropdown: [
    { id: "1", title: "Settings", icon: HomeIcon },
    { id: "2", title: "Purchase History", icon: HomeIcon },
    { id: "3", title: "Refer and Earn", icon: HomeIcon },
    { id: "4", title: "Integrations", icon: WidgetsIcon },
    { id: "5", title: "Report Bug", icon: HomeIcon },
    { id: "6", title: "Switch Account", icon: HomeIcon },
    { id: "7", title: "Sign Out", icon: HomeIcon },
  ],
  appsDropdown: [
    {
      id: "1",
      title: "Link in Bio",
      description: "Manage your Link in Bio",
      icon: LinkIcon,
    },
    {
      id: "2",
      title: "Store",
      description: "Manage your Store ctivities",
      icon: StoreIcon,
    },
    {
      id: "3",
      title: "Media Kit",
      description: "Manage your Media Kit",
      icon: FolderIcon,
    },
    {
      id: "4",
      title: "Invoicing",
      description: "Manage your Invoices",
      icon: InvoiceIcon,
    },
    {
      id: "5",
      title: "Bookings",
      description: "Manage your Bookings",
      icon: HomeIcon,
    },
  ],
};

export const sideNavItems = [
  {
    id: "1",
    title: "Link in Bio",
    description: "Manage your Link in Bio",
    icon: LinkIcon,
  },
  {
    id: "2",
    title: "Store",
    description: "Manage your Store ctivities",
    icon: StoreIcon,
  },
  {
    id: "3",
    title: "Media Kit",
    description: "Manage your Media Kit",
    icon: FolderIcon,
  },
  {
    id: "4",
    title: "Invoicing",
    description: "Manage your Invoices",
    icon: InvoiceIcon,
  },
];

export const filterData = {
  options: [
    { id: "1", period: "Today" },
    { id: "2", period: "Last 7 days" },
    { id: "3", period: "This month" },
    { id: "4", period: "Last 3 months" },
    { id: "5", period: "This year" },
    { id: "6", period: "Last year" },
    { id: "7", period: "All time" },
  ],
};

export const transactionTypesOptions = [
  "store transactions",
  "withdrawal",
  "get tipped",
  "deposit",
  "chargebacks",
  "cashbacks",
  "refer & earn",
];

export const transactionStatusOptions = ["successful", "pending", "failed"];
