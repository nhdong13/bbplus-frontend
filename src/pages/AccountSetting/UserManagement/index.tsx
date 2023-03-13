import useAccountSetting from "../hooks";
import {
  LegendBox,
  LegendTitle,
  TextErrorInput
} from "../styles";

import styled from "styled-components";
import { COLORS } from "@/utils/colors";
import { Button } from "@mui/material";
import LegendComboBox from "@/components/AccountSettings/LegendComboBox";
import { BREAKPOINTS } from "@/utils/breakpoints";
import useWindowSize from "@/utils/windowResize";
import UserManagementTable from './UserManagementTable'
import UserManagementTableMobile from './UserManagementTableMobile'
function UserManagement() {
  const { } = useAccountSetting();
  const wd = useWindowSize();

  return (
    <div className="body-section body-section-user">
      <div className="body-section-item step-show-label step-user">
        <LegendBox className="w-100">
          <LegendTitle>User details</LegendTitle>
          <div className="user-title first">
            In this section, you can create new user (employee) for your agency and assign roles.
          </div>
          <div className="user-title second">
            Existing Users
          </div>
          <div className="table-desktop">
            <UserManagementTable />
          </div>
          <div className="table-mobile">
            <UserManagementTableMobile />
          </div>
          <div className="user-title">
            To add a new user, enter required details and click Add.
          </div>
          <RequireDetailContainer>
            <div className="require-detail__left-container">
              <LegendComboBox
                hasFormInput
                legendBoxTitle={'Username'}
                formInputLabel={'Username'}
              />
              <LegendComboBox
                hasFormInput
                legendBoxTitle={'Full Name'}
                formInputLabel={'Full Name'}
              />

              <LegendComboBox
                hasFormInput
                legendBoxTitle={'Email'}
                formInputLabel={'Email'}
              />
              <LegendComboBox
                hasFormInput
                legendBoxTitle={'User role'}
                formInputLabel={'User role'}
              />
            </div>
            <div className="require-detail__right-container">
              <LegendComboBox
                legendBoxTitle={'Sub User Markup'}
                hasSelectDropDown
                hasFormInput
                formInputWidth="115px"
                formInputLabel="0%"
                isError={true}
              />
              <TextErrorInput className="err">From 0.01 up to 99.99</TextErrorInput>
              <LegendComboBox
                legendBoxTitle={'Hide Sub User Markup'}
                isCheckboxMobile={wd <= 430}
                hasCheckBox
              />
              <LegendComboBox
                legendBoxTitle={'Hide Invoice'}
                isCheckboxMobile={wd <= 430}
                hasCheckBox
              />
              <LegendComboBox
                legendBoxTitle={'Allow User to view bookings made by other user as well'}
                isCheckboxMobile={wd <= 430}
                hasCheckBox
              />
            </div>
          </RequireDetailContainer>
        </LegendBox >
      </div>
    </div>
  );
}

const RequireDetailContainer = styled.div` 
  display: flex;
  flex-direction: row;
  gap: 148px;
  .err {
    display: none;
  }
  @media ${BREAKPOINTS.laptop} {
    gap: 10px;
    .err {
      display: block;
      text-align: right;
    }
  }

  .require-detail__left-container,
  .require-detail__right-container {
    width: 100%;
    max-width: 580px;
    .legend-items {
      margin-bottom: 44px;
      &:last-child {
        margin-bottom: 12px;
      }
    }
    @media ${BREAKPOINTS.laptop} {
      max-width: unset;
      .legend-item {
        margin-bottom: 0;
      }
    }
  }

  .require-detail__right-container  {
    gap: 100px;
    .input-container,.select-container {
      height: 68px;
    }
  }

  @media ${BREAKPOINTS.laptop} {
    flex-direction: column;
    .input-container {
      height: 40px !important;
    }
  }
`

export default UserManagement;
