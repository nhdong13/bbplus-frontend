import MainLayout from "@/components/Layout/MainLayout";
import { H2 } from "@/components/Typography";
import useAccountSetting from "./hooks";
import {
  BreadcrumbContainer,
  AccountSettingContainer,
  BreadcrumbBody,
  Input,
  LegendBox,
  LabelText,
  LegendText,
  InputDetails,
  AccountSettingHeader,
  NextStepBox,
  ButtonNextStep,
} from "./styles";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Autocomplete,
} from "@mui/material";
import FileInput from "./FileInput";

interface Props {}
interface State {}

function AccountSetting() {
  const {} = useAccountSetting();
  return (
    <MainLayout>
      <AccountSettingContainer id="account-setting">
        <BreadcrumbContainer>
          <BreadcrumbBody>
            <div className="company-information">Company Information</div>
            <div>Preferences</div>
            <div>User Management</div>
          </BreadcrumbBody>
        </BreadcrumbContainer>
        <div id="account-setting-section">
          <AccountSettingHeader>
            <H2 fontFamily="Montserrat" fontWeight="500" lineHeight="38px">
              Platform settings
            </H2>
            <div className="fill-information-title">
              Please fill in the information below to complete your account
              setup
            </div>
          </AccountSettingHeader>
          <div className="body-section">
            <div className="body-section-item">
              <LegendBox>
                <LegendText>Agency details</LegendText>
                <div className="contact-title">
                  Primary contact method <span className="red-start">*</span>
                </div>
                <InputDetails>
                  <LabelText>Agency Name</LabelText>
                  <Input type="text" />
                </InputDetails>
                <InputDetails>
                  <LabelText>Email Address</LabelText>
                  <Input type="email" />
                </InputDetails>
                <InputDetails>
                  <LabelText>Phone number</LabelText>
                  <Input type="text" />
                </InputDetails>
                <InputDetails>
                  <LabelText>Country</LabelText>
                  <Input type="text"></Input>
                </InputDetails>
                <InputDetails>
                  <LabelText>Physical Address</LabelText>
                  <Input type="text" />
                </InputDetails>
              </LegendBox>
              <LegendBox className="legenbox-right">
                <LegendText>Agency Logo</LegendText>
                <FileInput />
              </LegendBox>
            </div>

            <div className="body-section-item">
              <LegendBox>
                <LegendText>Finance details</LegendText>
                <div className="contact-title">
                  Contact for handling accounting and finance{" "}
                  <span className="red-start">*</span>
                </div>
                <InputDetails>
                  <LabelText>Email Address</LabelText>
                  <Input type="email" />
                </InputDetails>
                <InputDetails>
                  <LabelText>Phone number</LabelText>
                  <Input type="text" />
                </InputDetails>
              </LegendBox>
              <NextStepBox>
                <ButtonNextStep>Next Step</ButtonNextStep>
              </NextStepBox>
            </div>
          </div>
        </div>
      </AccountSettingContainer>
    </MainLayout>
  );
}

export default AccountSetting;
