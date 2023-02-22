import IMAGES from "@/assets/images";
import { GradientButton } from "@/components/Button";
import { FormInput } from "@/components/FormInput";
import Select from "@/components/Select";
import PhoneInput from "@/components/PhoneInput";
import MainLayout from "@/components/Layout/MainLayout";
import { H1, H2, H3, H5 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";
import useWindowSize from "@/utils/windowResize";
import useSignUp from "./hooks";
import { useNavigate } from "react-router-dom";
import {
  SignUpFormContainer,
  SignUpSuccessFormContainer,
  Background,
  Title,
  Content,
  CenterDiv,
} from "./styles";

export default function SignUp() {
  const {
    setBussinessName,
    setPhoneNumber,
    setEmail,
    setRegistration,
    setLocation,
    setCountry,
    setWebsite,
    setFirstname,
    setLastname,
    setAdminPhoneNumber,
    setAdminEmail,
    setHearBy,
    requestSent,
    setRequestSent,
    handleFormSubmit,
  } = useSignUp();

  const wd = useWindowSize();
  const navigate = useNavigate();

  return (
    <>
      <MainLayout>
        {!requestSent ? (
          <SignUpFormContainer>
            <div className="left-side-column">
              <div className="registration-detail">
                <div className="icon-container">
                  <img src={IMAGES.registrationFormIcon1} />
                </div>
                <H3 className="header">Fill Up this registration form</H3>
                <p>
                  Fill this short registration form to initiate your free
                  registration request.
                </p>
              </div>
              <div className="registration-detail">
                <div className="icon-container">
                  <img src={IMAGES.registrationFormIcon2} />
                </div>
                <H3 className="header">Setup your account</H3>
                <p>
                  Our account manager will be assigned to setup your travel
                  agency on the system.
                </p>
              </div>
              <div className="registration-detail">
                <div className="icon-container">
                  <img src={IMAGES.registrationFormIcon3} />
                </div>
                <H3 className="header">Login</H3>
                <p>
                  Use your registered email address to activate your online
                  account and you are all set to go...
                </p>
              </div>
            </div>
            <div className="right-side-column">
              <div className="form-container">
                <div className="step-1">
                  <div className="sub-header">
                    <div className="step-bullet">1</div>
                    <H2>AGENCY INFORMATION</H2>
                    <svg width="64" height="197">
                      <line
                        x1={wd <= 430 ? "25" : "31"}
                        y1="0"
                        x2={wd <= 430 ? "25" : "31"}
                        y2={wd <= 430 ? "350" : "400"}
                        stroke={COLORS.blueRibbon}
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  <div className="form-input-fields">
                    <FormInput
                      label="Bussiness name"
                      isImportant={true}
                      marginTop="16px"
                      maxHeight="60px"
                      handleChange={(e) => setBussinessName(e.target.value)}
                    />
                    <div className="flex">
                      <PhoneInput
                        label="Phone number"
                        isImportant={true}
                        marginTop="21.6px"
                        maxHeight="60px"
                        handleChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <FormInput
                        label="Email address"
                        isImportant={true}
                        marginTop="21.6px"
                        maxHeight="60px"
                        handleChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="registrationid-input">
                      <div>Upload Taxpayer ID/Bussiness Registration</div>
                      <div className="btn-choose-file">Browse</div>
                    </div>
                  </div>
                </div>

                <div className="step-2">
                  <div className="sub-header">
                    <div className="step-bullet">2</div>
                    <H2>AGENCY ADDRESS</H2>
                    <svg width="64" height="197">
                      <line
                        x1={wd <= 430 ? "25" : "31"}
                        y1="0"
                        x2={wd <= 430 ? "25" : "31"}
                        y2={wd <= 430 ? "220" : "300"}
                        stroke={COLORS.blueRibbon}
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  <div className="form-input-fields">
                    <FormInput
                      label="Physical location"
                      isImportant={true}
                      marginTop="16px"
                      maxHeight="60px"
                      handleChange={(e) => setLocation(e.target.value)}
                    />
                    <div className="flex">
                      <Select
                        label="Select Country"
                        isImportant={true}
                        marginTop="21.6px"
                        maxHeight="60px"
                        handleChange={(e) => setCountry(e.target.value)}
                      />
                      <FormInput
                        label="Agency address"
                        marginTop="21.6px"
                        maxHeight="60px"
                        handleChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="step-3">
                  <div className="sub-header">
                    <div className="step-bullet">3</div>
                    <H2>ADMIN DETAILS</H2>
                  </div>

                  <div className="form-input-fields">
                    <div className="flex">
                      <FormInput
                        label="First Name"
                        isImportant={true}
                        marginTop="21.6px"
                        maxHeight="60px"
                        handleChange={(e) => setFirstname(e.target.value)}
                      />
                      <FormInput
                        label="Last Name"
                        isImportant={true}
                        marginTop="21.6px"
                        maxHeight="60px"
                        handleChange={(e) => setLastname(e.target.value)}
                      />
                    </div>
                    <div className="flex">
                      <PhoneInput
                        label="Phone number"
                        isImportant={true}
                        marginTop="21.6px"
                        maxHeight="60px"
                        handleChange={(e) =>
                          setAdminPhoneNumber(e.target.value)
                        }
                      />
                      <FormInput
                        label="Address"
                        isImportant={true}
                        marginTop="21.6px"
                        maxHeight="60px"
                        handleChange={(e) => setAdminEmail(e.target.value)}
                      />
                    </div>
                    <FormInput
                      label="How hid you hear about us?"
                      marginTop="16px"
                      maxHeight="60px"
                      handleChange={(e) => setHearBy(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-confirmation">
                  <div className="center-div">
                    <input type="checkbox" />I agree to the{" "}
                    <a>Terns and Conditions</a>
                  </div>
                  <div className="checked-robot">
                    <div className="center-div form-check">
                      <div className="center-div">
                        <input type="checkbox" />
                        <span>I'm not robot</span>
                      </div>
                      <img src={IMAGES.iconRecaptcha} />
                    </div>
                    <div className="submit-btn">
                      <GradientButton
                        color={COLORS.gradient1}
                        text="SUBMIT"
                        isSelected={true}
                        maxWidth="153.6px"
                        fontSize="17px"
                        height="65px"
                        textPadding="4px 33px"
                        borderRadius="2.66px"
                        handleSubmit={handleFormSubmit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SignUpFormContainer>
        ) : (
          <SignUpSuccessFormContainer>
            <Background className="haha">
              <Title>
                <div className="title-content">
                  <p>Pacific’s Leading Travel</p>
                  <p>Distribution Platform</p>
                </div>
              </Title>
            </Background>

            <Content>
              <div className="desktop">
                <p>Dear Partner,</p>
                <p>Your Application ID is: 12345</p>
                <p>
                  You are just one step away from accessing Bedbank Plus
                  platform, which connects you to a broad range of products
                  across the South Pacific - from hotels, transfers, cruise,
                  sightseeing, and tours - at the most competitive prices.
                </p>
                <p>
                  Our account manager will reach out to you in the next 48 hours
                  to activate your account.
                </p>
                <p>Happy to have you on board!</p>
                <p>Warm Regards,</p>
                <p>Team Bedbank Plus</p>
              </div>
              <div className="mobile">
                <p>Dear Partner,</p>
                <p>Your Application ID is: 12345</p>
                <p className="text-normal mb-2">
                  You are just one step away from accessing Bedbank Plus
                  platform, which connects you to a broad range of products
                  across the South Pacific - from hotels, transfers, cruise,
                  sightseeing, and tours - at the most competitive prices.Our
                  account manager will reach out to you in the next 48 hours to
                  activate your account.
                </p>
                <p className="mb-2">Happy to have you on board!</p>
                <p>Warm Regards,</p>
                <p className="text-normal">Team Bedbank Plus</p>
              </div>
              <CenterDiv>
                <GradientButton
                  color={COLORS.gradient1}
                  text="GO TO HOMEPAGE"
                  isSelected={true}
                  width="222.29px"
                  fontSize="16px"
                  height="64.17px"
                  handleSubmit={() => navigate("/")}
                />
              </CenterDiv>
            </Content>
          </SignUpSuccessFormContainer>
        )}
      </MainLayout>
    </>
  );
}
