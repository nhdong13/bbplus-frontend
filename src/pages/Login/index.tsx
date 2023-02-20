import IMAGES from "@/assets/images";
import { GradientButton } from "@/components/Button";
import { FormInput } from "@/components/FormInput";
import MainLayout from "@/components/Layout/MainLayout";
import { H1, H2, H5 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";
import { AuthenticationFormContainer } from "./styles";
import Switch from "react-switch";
import useLogin from "./hooks";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    rememberMe,
    handleRememberMeSwitcher
  } = useLogin();
  const navigate = useNavigate();
  return (
    <>
      <MainLayout>
        <AuthenticationFormContainer>
          <H2 className="header" lineHeight="32px">Welcome</H2>
          <div className="sub-header">
            <p>Do you need an account? <span><a href="#">Register now</a></span></p>
            <p>Log in to your account using username & password</p>
          </div>
          <div className="body">
            <FormInput label="Username" iconUrl={IMAGES.iconUserFormInput} isImportant={false} marginTop="30.1px" />
            <FormInput label="Password" iconUrl={IMAGES.iconPasswordFormInput} isImportant={false} />
            <div className="remember-me-n-forgot-password-container">
              <div className="remember-me-container">
                <Switch onChange={handleRememberMeSwitcher} checked={rememberMe} className="remember-me-switcher" onColor={COLORS.darkGreen} uncheckedIcon={false} checkedIcon={false} />
                <span>Remember Me</span>
              </div>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
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
              handleSubmit={() => navigate("/")}
            />
            <p>By clicking "Login" you confirm that you accept the <a href="#">Terms of Service</a></p>
          </div>
        </AuthenticationFormContainer>
      </MainLayout>
    </>
  );
}
