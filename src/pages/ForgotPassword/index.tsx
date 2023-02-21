import MainLayout from "@/components/Layout/MainLayout";
import { GradientButton } from "@/components/Button";
import { FormInput } from "@/components/FormInput";
import { H2 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";
import { AuthenticationFormContainer } from "../Login/styles";
import useForgotPassword from "./hooks";
import React from "react";
import IMAGES from "@/assets/images";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const {
    emailAddressValid,
    setEmailAddress,
    handleResetPassword,
    requestSent,
  } = useForgotPassword();

  const navigate = useNavigate();

  return (
    <>
      <MainLayout>
        <AuthenticationFormContainer centralizeItems={requestSent}>
          {requestSent ? (
            <React.Fragment>
              <H2 className="header">Check your email</H2>
              <div className="body">
                <img
                  src={IMAGES.iconSuccessSubmitForm}
                  className="form-sent-success-icn"
                />
                <p className="sub-text-under-form-sent-icon">
                  We have sent a password recovery link to your email
                </p>
              </div>
              <div className="footer">
                <p className="retry-forgot-password">
                  Did not receive that email? Check your spam folder, or{" "}
                  <a onClick={() => navigate("/forgot-password")}>try another email address</a>
                </p>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <H2 className="header">Reset Password</H2>
              <div className="sub-header">
                <p>
                  Enter your e-mail address and we will send you the link for
                  restoring the password?
                </p>
              </div>
              <div className="body">
                <FormInput
                  label="Email address"
                  isImportant={true}
                  marginTop={"33px"}
                  valid={emailAddressValid}
                  handleChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>
              <div className="footer">
                <GradientButton
                  color={COLORS.gradient1}
                  text="RESET PASSWORD"
                  isSelected={true}
                  maxWidth="100%"
                  fontSize="17px"
                  height="65px"
                  textPadding="4px 33px"
                  borderRadius="unset"
                  handleSubmit={() => handleResetPassword()}
                />
              </div>
            </React.Fragment>
          )}
        </AuthenticationFormContainer>
      </MainLayout>
    </>
  );
}
