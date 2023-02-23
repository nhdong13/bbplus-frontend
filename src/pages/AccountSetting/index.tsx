import MainLayout from "@/components/Layout/MainLayout";
import { H2 } from "@/components/Typography";
import useAccountSetting from "./hooks";
import {
  AccountSettingContainer,
  BreadcrumbContainer,
  BreadcrumbBody,
  BreadcrumbItem,
  LegendBox,
  LabelText,
  LegendTitle,
  LegendItem,
  AccountSettingHeader,
  NextStepBox,
  ButtonNextStep,
} from "./styles";

import { FormInput } from "@/components/FormInput";
import PhoneInput from "@/components/PhoneInput";
import Select from "@/components/Select";
import FileInput from "./FileInput";
import Preferences from "./Preferences";

function AccountSetting() {
  const {} = useAccountSetting();
  return (
    <MainLayout>
      <AccountSettingContainer id="account-setting">
        <BreadcrumbContainer>
          <BreadcrumbBody>
            <BreadcrumbItem>Company Information</BreadcrumbItem>
            <BreadcrumbItem>Preferences</BreadcrumbItem>
            <BreadcrumbItem>User Management</BreadcrumbItem>
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
          <Preferences />
          {/* <div className="body-section">
            <div className="body-section-item">
              <LegendBox>
                <LegendTitle>Agency details</LegendTitle>
                <div className="contact-title">
                  Primary contact method <span className="red-start">*</span>
                </div>
                <LegendItem>
                  <LabelText>Agency Name</LabelText>
                  <FormInput
                    width="339px"
                    maxHeight="68px"
                    label="Agency Name"
                    marginTop="0px"
                  />
                </LegendItem>
                <LegendItem>
                  <LabelText>Email Address</LabelText>
                  <FormInput
                    width="339px"
                    maxHeight="68px"
                    label="Email Address"
                    marginTop="0px"
                  />
                </LegendItem>
                <LegendItem>
                  <LabelText>Phone number</LabelText>
                  <PhoneInput
                    label="Phone number"
                    width="339px"
                    maxHeight="68px"
                    marginTop="0px"
                  />
                </LegendItem>
                <LegendItem>
                  <LabelText>Country</LabelText>
                  <Select
                    label="Country"
                    width="339px"
                    maxHeight="68px"
                    marginTop="0px"
                  />
                </LegendItem>
                <LegendItem>
                  <LabelText>Physical Address</LabelText>
                  <FormInput
                    width="339px"
                    maxHeight="68px"
                    label="Physical Address"
                    marginTop="0px"
                  />
                </LegendItem>
              </LegendBox>
              <LegendBox className="legenbox-right">
                <LegendTitle>Agency Logo</LegendTitle>
                <FileInput />
              </LegendBox>
            </div>

            <div className="body-section-item">
              <LegendBox>
                <LegendTitle>Finance details</LegendTitle>
                <div className="contact-title">
                  Contact for handling accounting and finance{" "}
                  <span className="red-start">*</span>
                </div>
                <LegendItem>
                  <LabelText>Email Address</LabelText>
                  <FormInput
                    width="339px"
                    maxHeight="68px"
                    label="Email Address"
                    marginTop="0px"
                  />
                </LegendItem>
                <LegendItem>
                  <LabelText>Phone number</LabelText>
                  <PhoneInput
                    label="Phone number"
                    width="339px"
                    maxHeight="68px"
                    marginTop="0px"
                  />
                </LegendItem>
              </LegendBox>
              <NextStepBox>
                <ButtonNextStep>Next Step</ButtonNextStep>
              </NextStepBox>
            </div>
          </div> */}
        </div>
      </AccountSettingContainer>
    </MainLayout>
  );
}

export default AccountSetting;
