import useAccountSetting from "../hooks";
import {
  LegendBox,
  LegendTitle,
  LegendItem,
} from "../styles";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { COLORS } from "@/utils/colors";
import { Button } from "@mui/material";
import { FONTS } from "@/utils/fonts";
import IMAGES from "@/assets/images";
import LegendComboBox from "@/components/AccountSettings/LegendComboBox";
import { BREAKPOINTS } from "@/utils/breakpoints";

function UserManagement() {
  const { } = useAccountSetting();
  return (
    <div className="body-section">
      <div className="body-section-item">
        <LegendBox className="w-100">
          <LegendTitle>User Detail</LegendTitle>
          <div className="user-title">
            In this section, you can create new user (employee) for your agency and assign roles.
          </div>
          <div className="user-title">
            Existing Users
          </div>
          <UserManagementTable />
          <div className="user-title">
            To add a new user, enter required details and click Add.
          </div>
          <RequireDetailContainer>
            <div className="require-detail__left-container">
              <LegendItem>
                <LegendComboBox
                  hasFormInput
                  legendBoxTitle={'Agency Name'}
                  formInputLabel={'Agency Name'}
                />
              </LegendItem>
              <LegendItem>
                <LegendComboBox
                  hasFormInput
                  legendBoxTitle={'Full Name'}
                  formInputLabel={'Full Name'}
                />
              </LegendItem>

              <LegendItem>
                <LegendComboBox
                  hasFormInput
                  legendBoxTitle={'Email'}
                  formInputLabel={'Email'}
                />
              </LegendItem>
              <LegendItem>
                <LegendComboBox
                  hasFormInput
                  legendBoxTitle={'User Role'}
                  formInputLabel={'User Role'}
                />
              </LegendItem>
            </div>
            <div className="require-detail__right-container">
              <LegendComboBox
                legendBoxTitle={'Sub User Markup'}
                hasSelectDropDown
                hasFormInput
                formInputWidth="115px"
              />

              <LegendComboBox
                legendBoxTitle={'Hide Sub User Markup'}
                hasCheckBox
              />
              <LegendComboBox
                legendBoxTitle={'Hide Invoice'}
                hasCheckBox
              />
              <LegendComboBox
                legendBoxTitle={'Allow User to view bookings'}
                hasCheckBox
              />
              <LegendComboBox
                legendBoxTitle={'made by other user as well'}
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

  .require-detail__left-container,
  .require-detail__right-container {
    width: 100%;
    max-width: 580px;

    @media ${BREAKPOINTS.laptop} {
      max-width: unset;
    }
  }

  .require-detail__right-container  {
    gap: 100px;
  }

  @media ${BREAKPOINTS.laptop} {
    flex-direction: column;
  }
`

const StyledUserManagementTable = styled.div`
  @media ${BREAKPOINTS.laptop} {
    width: 90%;
  }
  table {
    min-width: 768px;
    overflow: scroll;
    
    @media ${BREAKPOINTS.desktopLg} {
      width: 768px;
    }

    @media ${BREAKPOINTS.tablet} {
      width: 375px;
    }
  }
  .MuiTableContainer-root {
    box-shadow: none!important;

    .MuiTable-root {
      border-collapse: separate;
      border-spacing: 0 15px;
    }

    .MuiTableHead-root {
      background-color: ${COLORS.purple};
    }

    .MuiTableBody-root {
      background-color: ${COLORS.mercury};
    }

    #password-field {
      border: none;
      background: transparent;
    }

    .button-group {
      align-items: center;
      display: flex;
      gap: 9px;
    }

    .button-edit, .button-delete {
      box-shadow: none;
      font-family: ${FONTS.manropeBold};
      font-size: 14px;
    }

    .button-edit {
      background-color: ${COLORS.curiousBlue};
    }

    .button-delete {
      background-color: ${COLORS.red};
    }

    .divider {
      background-color: ${COLORS.black};
      height: 25px;
      width: 2px;
    }
  }

`

const StyledUserRoleDropDown = styled.div.attrs((props: {
  isDropDown?: boolean
}) => props)`
  button {
    align-items: center;
    border: 1px solid ${COLORS.black};
    background-color: ${COLORS.white};
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    max-width: 146px;
    padding: 13px 18px 8px 14px;
    width: 100%;
  }

  img {
    transform: ${({ isDropDown }) => isDropDown ? "rotate(180deg)" : "rotate(0)"};
    transition: all 0.5s ease-in-out;
  }
`

const UserManagementTable = () => {
  return (
    <StyledUserManagementTable>
      <TableContainer component={Paper}>
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
              borderCollapse: "separate",
              borderSpacing: "0 14px",
            }
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Password</TableCell>
              <TableCell align="left">User Role</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">James</TableCell>
              <TableCell align="left">James Dean</TableCell>
              <TableCell align="left">james@travel.com</TableCell>
              <TableCell align="left"><input type="password" id="password-field" value="p@ssw0rd" /></TableCell>
              <TableCell align="left">
                <UserRoleDropDown />
              </TableCell>
              <TableCell align="left">
                <div className="button-group">
                  <Button variant="contained" className="button-edit">Edit</Button>
                  <div className="divider" />
                  <Button variant="contained" className="button-delete">Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </StyledUserManagementTable>
  )
}

const UserRoleDropDown = () => {
  const [dropDown, setDropDown] = React.useState<boolean>(false);
  return (
    <>
      <StyledUserRoleDropDown isDropDown={dropDown}>
        <button onClick={() => setDropDown(!dropDown)}>
          <p>Master</p>
          <img className="dropdown-icon" src={IMAGES.iconDropDownBlue} width="13px" height="9px" />
        </button>
      </StyledUserRoleDropDown>
    </>
  )
}
export default UserManagement;
