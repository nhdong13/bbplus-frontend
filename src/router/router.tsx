import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  ResetPassword,
  ForgotPassword,
  SignUp,
} from "@/pages";
import { RouterName } from "./config";
import AccountSetting from "@/pages/AccountSetting";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterName.home} element={<HomePage />} />
        <Route path={RouterName.login} element={<LoginPage />} />
        <Route path={RouterName.resetPassword} element={<ResetPassword />} />
        <Route path={RouterName.forgotPassword} element={<ForgotPassword />} />
        <Route path={RouterName.signUp} element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
