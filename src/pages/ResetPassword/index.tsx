import IMAGES from "@/assets/images";
import { GradientButton } from "@/components/Button";
import { FormInput } from "@/components/FormInput";
import MainLayout from "@/components/Layout/MainLayout";
import { H2 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundAuthentication,
  AuthenticationFormContainer,
  AuthenticationFormWrapper,
  AuthenticationLogoMobile,
} from "../Login/styles";
import useResetPassword from "./hooks";
import useWindowSize from "@/utils/windowResize";

export default function ResetPassword() {
  const {
    setNewPassword,
    setConfirmationPassword,
    handleSubmitPassword,
    requestSent,
  } = useResetPassword();
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
                <H2 className="header">Password Updated</H2>
                <div className="body b-updated">
                  <img
                    src={IMAGES.iconSuccessSubmitForm}
                    className="form-sent-success-icn"
                  />
                  <p className="sub-text-under-form-sent-icon">
                    Your password has been updated successfully
                  </p>
                </div>
                <div className="footer">
                  <GradientButton
                    color={COLORS.gradient1}
                    text="LOGIN"
                    isSelected={true}
                    maxWidth="100%"
                    height="65px"
                    textPadding="4px 33px"
                    handleSubmit={() => navigate("/login")}
                  />
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <H2 className="header" lineHeight="32px">
                  Welcome
                </H2>
                <div className="sub-header">
                  <p>
                    <a>Please create your account password below.</a>
                  </p>
                </div>
                <div className="body">
                  <FormInput
                    label="New password"
                    iconUrl={IMAGES.iconPasswordFormInput}
                    valid={true}
                    handleChange={(e) => setNewPassword(e.target.value)}
                  />
                  <FormInput
                    label="Repeat the new password"
                    iconUrl={IMAGES.iconPasswordFormInput}
                    marginTop="25px"
                    valid={true}
                    handleChange={(e) =>
                      setConfirmationPassword(e.target.value)
                    }
                  />
                </div>
                <div className="footer lower-footer">
                  <GradientButton
                    color={COLORS.gradient1}
                    text="SUBMIT"
                    isSelected={true}
                    maxWidth="100%"
                    height="65px"
                    textPadding="4px 33px"
                    handleSubmit={() => handleSubmitPassword()}
                  />
                  <div className="password-conditions">
                    <p>Password must contain the following:</p>
                    <p>
                      <img src={IMAGES.iconCondtionResetPassword} />A lowercase
                      letter
                    </p>
                    <p>
                      <img src={IMAGES.iconCondtionResetPassword} />A uppercase
                      letter
                    </p>
                    <p>
                      <img src={IMAGES.iconCondtionResetPassword} />A number
                    </p>
                    <p>
                      <img src={IMAGES.iconCondtionResetPassword} />
                      Minimum 8 characters
                    </p>
                  </div>
                </div>
              </React.Fragment>
            )}
          </AuthenticationFormWrapper>
        </AuthenticationFormContainer>
      </BackgroundAuthentication>
    </MainLayout>
  );
}
