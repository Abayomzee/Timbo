import React from "react";
import {
  Route,
  BrowserRouter,
  Switch,
  useRouteMatch,
  // Redirect,
} from "react-router-dom";

// import AdminSignIn from "./AdminSignIn";
import AdminDashboardIndex from "./AdminDashboard/AdminDashboardIndex";
import Users from "./AdminDashboard/Users";
import UserDetails from "./AdminDashboard/Users/UserDetails";
import Roles from "./AdminDashboard/Roles";
import Settings from "./AdminDashboard/Settings";
import SupportTickets from "./AdminDashboard/SupportTickets";
import Subscriptions from "./AdminDashboard/Subscriptions";
import AdminSideNav from "./../../common/Admin/AdminSideNav";

interface Props {}
const AdminIndex: React.FC<Props> = () => {
  const { path } = useRouteMatch();

  return (
    <main className="admin-layout">
      <BrowserRouter>
        <AdminSideNav />
        <Switch>
          <Route path={`${path}/user-details/:id`} component={UserDetails} />
          <Route path={`${path}/settings`} component={Settings} />
          <Route path={`${path}/subsciptions`} component={Subscriptions} />
          <Route path={`${path}/supports`} component={SupportTickets} />
          <Route path={`${path}/roles`} component={Roles} />
          <Route path={`${path}/users`} component={Users} />
          <Route path={`${path}/dashboard`} component={AdminDashboardIndex} />
          <Route path={`${path}/`} component={AdminDashboardIndex} exact />
          {/* <Route path={`${path}/auth`} component={AdminSignIn} /> */}
          {/* <Redirect from={`${path}/`} to={`${path}/auth/admin`} /> */}
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default AdminIndex;
