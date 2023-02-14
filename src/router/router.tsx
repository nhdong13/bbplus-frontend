import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { HomePage, LoginPage } from "@/pages";
import { RouterName } from "./config";
import AccountSetting from "@/pages/AccountSetting";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterName.home} element={<HomePage />} />
        <Route path={RouterName.login} element={<LoginPage />} />
        <Route path={RouterName.accountSetting} element={<AccountSetting />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
