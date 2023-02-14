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
  LegendBoxFinance,
  AccountSettingHeader,
  LegendBoxLogo,
} from "./styles";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Autocomplete,
} from "@mui/material";
import FileInput from "@/components/FileInput";

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
          <div id="body-section">
            <div id="body-section-1">
              <LegendBox>
                <LegendText className="LegendText-title">
                  Agency details
                </LegendText>
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

              <LegendBoxFinance className="final-details">
                <LegendText className="LegendText-title">
                  Finance details
                </LegendText>
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
              </LegendBoxFinance>
            </div>

            <div id="body-section-2">
              <LegendBoxLogo>
                <LegendText className="LegendText-title">
                  Agency details
                </LegendText>
                <FileInput />
              </LegendBoxLogo>
            </div>
          </div>
        </div>
      </AccountSettingContainer>
    </MainLayout>
  );
}

export default AccountSetting;
