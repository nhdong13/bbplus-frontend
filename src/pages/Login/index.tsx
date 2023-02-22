import IMAGES from "@/assets/images";
import { GradientButton } from "@/components/Button";
import { FormInput } from "@/components/FormInput";
import MainLayout from "@/components/Layout/MainLayout";
import { H1, H2, H5 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";
import {
  AuthenticationFormContainer,
  AuthenticationFormWrapper,
  AuthenticationLogoMobile,
} from "./styles";
import Switch from "react-switch";
import useLogin from "./hooks";
import { useNavigate } from "react-router-dom";
import useWindowSize from "@/utils/windowResize";

export default function Login() {
  const { rememberMe, handleRememberMeSwitcher } = useLogin();
  const navigate = useNavigate();

  const wd = useWindowSize();

  return (
    <>
      <MainLayout>
        <AuthenticationFormContainer>
          {wd <= 430 ? <AuthenticationLogoMobile /> : null}
          <AuthenticationFormWrapper>
            <H2 className="header" lineHeight="32px">
              Welcome
            </H2>
            <div className="sub-header">
              <p>
                Do you need an account?{" "}
                <span>
                  <a onClick={() => navigate("/sign-up")}>Register now</a>
                </span>
              </p>
              <p>Log in to your account using username & password</p>
            </div>
            <div className="body">
              <FormInput
                label="Username"
                iconUrl={IMAGES.iconUserFormInput}
                isImportant={false}
                marginTop="30.1px"
              />
              <FormInput
                label="Password"
                iconUrl={IMAGES.iconPasswordFormInput}
                isImportant={false}
              />
              <div className="remember-me-n-forgot-password-container">
                <div className="remember-me-container">
                  {wd <= 430 ? (
                    <input type="checkbox" className="remember-me-switcher" />
                  ) : (
                    <Switch
                      onChange={handleRememberMeSwitcher}
                      checked={rememberMe}
                      className="remember-me-switcher"
                      onColor={COLORS.darkGreen}
                      uncheckedIcon={false}
                      checkedIcon={false}
                    />
                  )}
                  <span>Remember Me</span>
                </div>
                <a onClick={() => navigate("/forgot-password")}>
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="footer">
              <GradientButton
                color={COLORS.gradient1}
                text="LOGIN"
                isSelected={true}
                maxWidth="100%"
                height="65px"
                textPadding="4px 33px"
                handleSubmit={() => navigate("/")}
              />
              <p>
                By clicking "Login" you confirm that you accept the{" "}
                <a>Terms of Service</a>
              </p>
            </div>
          </AuthenticationFormWrapper>
        </AuthenticationFormContainer>
      </MainLayout>
    </>
  );
}
