import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  ResetPassword,
  ForgotPassword,
  SignUp,
  SearchResult,
} from "@/pages";
import { RouterName } from "./config";
import Booking from "@/pages/Booking";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterName.home} element={<HomePage />} />
        <Route path={RouterName.login} element={<LoginPage />} />
        <Route path={RouterName.resetPassword} element={<ResetPassword />} />
        <Route path={RouterName.forgotPassword} element={<ForgotPassword />} />
        <Route path={RouterName.signUp} element={<SignUp />} />
        <Route path={RouterName.searchResult} element={<SearchResult />} />
        <Route path={RouterName.booking} element={<Booking />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
