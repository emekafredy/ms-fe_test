import HomeIcon from "../assets/icons/nav/icon-home.svg";
import AnalyticsIcon from "../assets/icons/nav/icon-analytics.svg";
import RevenueIcon from "../assets/icons/nav/icon-revenue.svg";
import CRMIcon from "../assets/icons/nav/icon-user-group.svg";
import WidgetsIcon from "../assets/icons/nav/icon-widgets.svg";
import BellIcon from "../assets/icons/nav/icon-bell.svg";
import ChatIcon from "../assets/icons/nav/icon-chat.svg";

export const menuItems = {
  appMenu: [
    { id: "1", title: "Home", icon: HomeIcon },
    { id: "2", title: "Analytics", icon: AnalyticsIcon },
    { id: "3", title: "Revenue", icon: RevenueIcon },
    { id: "4", title: "CRM", icon: CRMIcon },
  ],
  apps: { title: "Apps", icon: WidgetsIcon },
  commsMenu: [
    { id: "1", title: "Notification", icon: BellIcon },
    { id: "2", title: "Chat", icon: ChatIcon },
  ],
};
