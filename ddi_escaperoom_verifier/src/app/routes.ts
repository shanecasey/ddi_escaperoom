import { createBrowserRouter } from "react-router";
import { HomeScreen } from "./components/home-screen";
import { ScanScreen } from "./components/scan-screen";
import { SuccessScreen } from "./components/success-screen";
import { FailScreen } from "./components/fail-screen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeScreen,
  },
  {
    path: "/scan",
    Component: ScanScreen,
  },
  {
    path: "/success",
    Component: SuccessScreen,
  },
  {
    path: "/fail",
    Component: FailScreen,
  },
], { basename: import.meta.env.BASE_URL });
