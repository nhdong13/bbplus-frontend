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
import useWindowSize from "@/utils/windowResize";


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
              <TableCell align="left" >Username</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Password</TableCell>
              <TableCell align="left">User Role</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              [1, 2, 3].map(el => {
                return (
                  <TableRow
                    key={el}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left" style={{ fontSize: 16, fontFamily: FONTS.manropeRegular }}>James</TableCell>
                    <TableCell align="left" style={{ fontSize: 16, fontFamily: FONTS.manropeRegular }}>James Dean</TableCell>
                    <TableCell align="left" style={{ fontSize: 16, fontFamily: FONTS.manropeRegular }}>james@travel.com</TableCell>
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
                )
              })
            }
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
      text-transform: capitalize;
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
    .MuiTableCell-sizeMedium {
      font-size: 18px;
      font-family: ${FONTS.manropeBold};
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
      padding: 0 14px;
      height: 36px;
      width: 100%;
      font-family: ${FONTS.manropeRegular}
    }
  
    img {
      transform: ${({ isDropDown }) => isDropDown ? "rotate(180deg)" : "rotate(0)"};
      transition: all 0.5s ease-in-out;
    }
  `
export default UserManagementTable;
