import React, { lazy, Suspense, useEffect } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Preloader from "./components/common/preloader/Preloader";
import NotFound from "./components/pages/NotFound/NotFound";
import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
import {
  lightTheme,
  MeetingProvider,
} from "amazon-chime-sdk-component-library-react";
import { ThemeProvider } from "styled-components";

import "./App.scss";
// import { useStore } from "./store";
import { userStore } from "./store/userStore";

const Home = lazy(() => import("./components/pages/StaticPages/Index"));
const Auth = lazy(() => import("./components/pages/Auth/Auth"));
const Dashboard = lazy(() => import("./components/pages/dashboard/Dashboard"));
const Admin = lazy(() => import("./components/pages/Admin/AdminIndex"));
const Sample = lazy(() => import("./components/pages/sample"));

interface Props {}
const App: React.FC<Props> = () => {
  const getUser = userStore((store) => store.getUser);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <Suspense fallback={<Preloader />}>
      <ThemeProvider theme={lightTheme}>
        <MeetingProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/pre" component={Preloader} />
              <Route path="/sample" component={Sample} />
              <Route path="/home" component={Home} />
              <Route path="/user" component={Dashboard} />
              <Route path="/auth" component={Auth} />
              {/* <Route path="/admin/auth" component={AdminSignIn} /> */}
              <Route path="/admin" component={Admin} />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" to="/auth" exact />
              <Redirect to="/not-found" />
            </Switch>
          </BrowserRouter>
        </MeetingProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
