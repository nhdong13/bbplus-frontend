import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  ResetPassword,
  ForgotPassword,
  SignUp,
  SearchResult,
  AccountSetting,
  TravelerDetails,
  Booking,
  Confirm,
} from "@/pages";
import { RouterName } from "./config";
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
        <Route path={RouterName.accountSetting} element={<AccountSetting />} />
        <Route
          path={RouterName.step3}
          element={<TravelerDetails />}
        />
        <Route path={RouterName.step2} element={<Booking />} />
        <Route path={RouterName.confirm} element={<Confirm />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
