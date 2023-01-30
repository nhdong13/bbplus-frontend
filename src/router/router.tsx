import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { HomePage } from "@/pages";
import { RouterName } from "./config";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterName.home} element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
