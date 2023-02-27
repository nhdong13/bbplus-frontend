import MainLayout from "@/components/Layout/MainLayout";
import { GradientButton } from "@/components/Button";
import { FormInput } from "@/components/FormInput";
import { H2 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";
import {
  BackgroundAuthentication,
  AuthenticationFormContainer,
  AuthenticationFormWrapper,
  AuthenticationLogoMobile,
} from "../Login/styles";
import useForgotPassword from "./hooks";
import React from "react";
import IMAGES from "@/assets/images";
import { useNavigate } from "react-router-dom";
import useWindowSize from "@/utils/windowResize";

export default function ForgotPassword() {
  const {
    emailAddressValid,
    setEmailAddress,
    handleResetPassword,
    requestSent,
  } = useForgotPassword();

  const navigate = useNavigate();
  const wd = useWindowSize();

  return (
    <MainLayout>
      <BackgroundAuthentication>
        <AuthenticationFormContainer>
          {wd <= 430 ? <AuthenticationLogoMobile /> : null}
          <AuthenticationFormWrapper centralizeItems={requestSent}>
            {requestSent ? (
              <React.Fragment>
                <H2 className="header">Check your email</H2>
                <div className="body b-your-email">
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
                    <a onClick={() => handleResetPassword()}>
                      try another email address
                    </a>
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
                <div className="body b-reset">
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
                    height="65px"
                    textPadding="4px 33px"
                    handleSubmit={() => handleResetPassword()}
                  />
                </div>
              </React.Fragment>
            )}
          </AuthenticationFormWrapper>
        </AuthenticationFormContainer>
      </BackgroundAuthentication >
    </MainLayout>
  );
}
