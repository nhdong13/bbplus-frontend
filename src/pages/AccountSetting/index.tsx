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

function AccountSetting() {
  const { } = useAccountSetting();
  const [settingStep, setSettingStep] = useState<number[]>([0]);
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

  useEffect(() => {
    if (settingStep.includes(currentItem)) {
    } else {
      const tmp = settingStep
      tmp.push(currentItem)
      setSettingStep(tmp)
    }
  }, [settingStep])

  return (
    <MainLayout>
      <StyledAccountSetting>
        <AccountSettingContainer id="account-setting">
          <BreadcrumbContainer>
            <BreadcrumbBody>
              {breadCrumbList?.map((item, key: number) => {
                return (
                  <BreadcrumbItem className={settingStep.includes(currentItem) ? 'active' : ''}
                    onClick={() => setCurrentItem(key)}>{item.title}</BreadcrumbItem>
                )
              })}
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
            {{
              0: <PlatformSetting />,
              1: <PreferenceSetting />,
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
