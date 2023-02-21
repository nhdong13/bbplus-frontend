import IMAGES from "@/assets/images";
import { GradientButton } from "@/components/Button";
import { FormInput } from "@/components/FormInput";
import MainLayout from "@/components/Layout/MainLayout";
import { H2 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationFormContainer } from "../Login/styles";
import useResetPassword from "./hooks";

export default function ResetPassword() {
  const {
    setNewPassword,
    setConfirmationPassword,
    handleSubmitPassword,
    requestSent,
  } = useResetPassword();
  const navigate = useNavigate();
  return (
    <>
      <MainLayout>
        <AuthenticationFormContainer centralizeItems={requestSent}>
          {requestSent ? (
            <React.Fragment>
              <H2 className="header">Password Updated</H2>
              <div className="body">
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
                  fontSize="17px"
                  height="65px"
                  textPadding="4px 33px"
                  borderRadius="unset"
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
                  handleChange={(e) => setConfirmationPassword(e.target.value)}
                />
              </div>
              <div className="footer lower-footer">
                <GradientButton
                  color={COLORS.gradient1}
                  text="SUBMIT"
                  isSelected={true}
                  maxWidth="100%"
                  fontSize="17px"
                  height="65px"
                  textPadding="4px 33px"
                  borderRadius="unset"
                  handleSubmit={() => handleSubmitPassword()}
                />
                <p>Password must contain the following:</p>
                <div className="password-conditions">
                  <p>
                    <img src={IMAGES.iconCondtionResetPassword} />A lowercase
                    character
                  </p>
                  <p>
                    <img src={IMAGES.iconCondtionResetPassword} />A uppercase
                    character
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
        </AuthenticationFormContainer>
      </MainLayout>
    </>
  );
}
