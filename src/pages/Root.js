import { Outlet } from "react-router-dom";
import MainNavigator from "../components/MainNavigator";
import classes from "./Root.modules.css";

function RootLayout() {
  return (
    <>
      <MainNavigator />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
