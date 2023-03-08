import styled from "styled-components";
import { COLORS } from "@/utils/colors";
import { Button } from "@mui/material";
import { FONTS } from "@/utils/fonts";
import IMAGES from "@/assets/images";
import LegendComboBox from "@/components/AccountSettings/LegendComboBox";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { FormInput } from "@/components/FormInput";

import {
  LegendBox,
  LabelText,
  LegendTitle,
  LegendItem,
  LegendField

} from "../styles";
import React from "react";

const UserManagementTable = () => {
  return (
    <React.Fragment>
      <LegendItem>
        <LabelText>Username</LabelText>
        <LegendField>
          <FormInput
            maxHeight="68px"
            label="mohaledx2"
            marginTop="0px"
          />
        </LegendField>
      </LegendItem>
      <LegendItem>
        <LabelText>Name</LabelText>
        <LegendField>
          <FormInput
            maxHeight="68px"
            label="Mohamed Sala"
            marginTop="0px"
          />
        </LegendField>
      </LegendItem>
      <LegendItem>
        <LabelText>Email</LabelText>
        <LegendField>
          <FormInput
            maxHeight="68px"
            label="123@gmail.com"
            marginTop="0px"
          />
        </LegendField>
      </LegendItem>
      <LegendItem>
        <LabelText>Passworld</LabelText>
        <LegendField>
          <FormInput
            maxHeight="68px"
            label="******"
            marginTop="0px"
          />
        </LegendField>
      </LegendItem>
      <LegendItem>
        <LabelText>User Role</LabelText>
        <LegendField>
          <FormInput
            maxHeight="68px"
            label="Admin"
            marginTop="0px"
          />
        </LegendField>
      </LegendItem>
      <GroupButton>
        <div className="g-button next">Next</div>
        <div className="">1/7 Users</div>
        <div className="g-button edit">Edit</div>
        <div className="g-button delete">Delete</div>
      </GroupButton>
    </React.Fragment>
  )
}

const GroupButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  margin-bottom: 40px;
  .g-button {
    width: 83.33px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    border-radius: 5px;
    cursor: pointer;
    color: ${COLORS.white};
    font-weight: 700;
  }
  .next {
    background: ${COLORS.gradient1};
  }
  .edit {
    background: ${COLORS.blueRibbon};
  }
  .delete {
    background: ${COLORS.red};
  }
`


export default UserManagementTable;
