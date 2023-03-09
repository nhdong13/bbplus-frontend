import ComboButton from "@/components/AccountSettings/ComboButton";
import MainLayout from "@/components/Layout/MainLayout";
import { H2 } from "@/components/Typography";
import { useEffect, useState } from "react";
import useAccountSetting from "./hooks";
import PlatformSetting from "./PlatformSetting";
import PreferenceSetting from "./Preferences";
import {
  AccountSettingContainer,
  BreadcrumbContainer,
  BreadcrumbBody,
  BreadcrumbItem,
  AccountSettingHeader,
  StyledAccountSetting,
} from "./styles";
import UserManagement from "./UserManagement";
import useWindowSize from "@/utils/windowResize";
import { AuthenticationLogoMobile } from "@/pages/Login/styles";


function AccountSetting() {
  const { } = useAccountSetting();
  const [currentItem, setCurrentItem] = useState<number>(0);

  const breadCrumbList = [
    {
      id: 0,
      title: 'Company Information',
    },
    {
      id: 1,
      title: 'Preferences',
    },
    {
      id: 2,
      title: 'User Management',
    }
  ];

  const wd = useWindowSize();



  return (
    <MainLayout>
      <StyledAccountSetting>
        {wd <= 430 ? <AuthenticationLogoMobile /> : null}
        <AccountSettingContainer id="account-setting">
          <BreadcrumbContainer>
            <BreadcrumbBody>
              {breadCrumbList?.map((item: any, key: number) => {
                return (
                  <BreadcrumbItem key={key} activeColor={currentItem === item.id}
                    onClick={() => setCurrentItem(item.id)}>{item.title}</BreadcrumbItem>
                )
              })}
            </BreadcrumbBody>
          </BreadcrumbContainer>
          <div id="account-setting-section">
            {
              currentItem !== 2
                ?
                <AccountSettingHeader>
                  <H2 fontFamily="Montserrat" fontWeight="500" lineHeight="38px">
                    {{
                      0: "Platform settings",
                      1: "Commission display when searching",
                    }[currentItem]}
                  </H2>
                  <div className="fill-information-title">
                    {{
                      0: "Please fill in the information below to complete your account setup",
                      1: "Enter the commission amount that will be automatically added to the NET price during the calculation of the customer price",
                    }[currentItem]}
                  </div>
                </AccountSettingHeader>
                :
                null
            }
            {{
              0: <PlatformSetting onClickNextStep={(id: number) => setCurrentItem(id)} />,
              1: <PreferenceSetting onClickNextStep={(id: number) => setCurrentItem(id)} />,
              2: <UserManagement />,
            }[currentItem]}
            {currentItem == 2 && <ComboButton />}
          </div>
        </AccountSettingContainer>
      </StyledAccountSetting>
    </MainLayout>
  );
}

export default AccountSetting;
