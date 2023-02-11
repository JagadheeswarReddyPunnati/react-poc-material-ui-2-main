
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ReportIcon from '@material-ui/icons/Report';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import Home from "../views/home/Home"
import DashboardPage from "../views/dashboard/Dashboard"
import ContractorSearch from "../views/contractor-search/ContractorSearch"
import BPOSearch from "../views/bpo-search/BPOSearch"
import Reports from "../views/reports/Reports"
import UserGuide from "../views/user-guide/UserGuide"
import PreAward from "../views/pre-award/PreAward"
import PostAward from "../views/post-award/PostAaward"
import SystemAdmin from "../views/system-admin/SystemAdmin"
import LogOff from "../views/logoff/LogOff";

const context = "/";
const routes = [
  {
    path: context + "home",
    name: "Home",
    component: Home,
    icon: HomeIcon
  },
  {
    path: context + "dashboard",
    name: "Dashboard",
    component: DashboardPage,
    icon: DashboardIcon
  },
  {
    path: context + "contractor-search",
    name: "ContractorSearch",
    component: ContractorSearch,
    icon: SearchIcon
  },
  {
    path: context + "bpo-search",
    name: "BPOSearch",
    component: BPOSearch,
    icon: SearchIcon
  },
  {
    path: context + "reports",
    name: "Reports",
    component: Reports,
    icon: ReportIcon
  },
  {
    path: context + "user-guide",
    name: "UserGuide",
    component: UserGuide,
    icon: LibraryBooksIcon
  },
  {
    path: context + "pre-award",
    name: "PreAward",
    component: PreAward,
    icon: CardMembershipIcon
  },
  {
    path: context + "post-award",
    name: "PostAward",
    component: PostAward,
    icon: CardMembershipIcon
  },
  {
    path: context + "system-admin",
    name: "SystemAdmin",
    component: SystemAdmin,
    icon: SupervisorAccountIcon
  },
  {
    path: context + "logoff",
    name: "LogOff",
    component: LogOff,
    icon: ExitToAppIcon
  }
];

export default routes;
