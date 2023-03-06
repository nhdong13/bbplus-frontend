import { GradientButton } from "@/components/Button";
import { FormInput } from "@/components/FormInput";
import { H2 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";
import styled from "styled-components";
import React from "react";
import IMAGES from "@/assets/images";
import { useNavigate } from "react-router-dom";
import useWindowSize from "@/utils/windowResize";


const ShowMapButton = styled.button`
  border: 2px solid #00B492;
  border-radius: 6px;
  padding: 20px 35px 13px 20px;
  width: 45%;

  h5 {
    color: ${COLORS.toryBlue};
  }
`
function getDaysInMonth(month : number, year: number) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
}

export default function DateView() {
 

  const navigate = useNavigate();
  const wd = useWindowSize();

  return (
    <h1>123</h1>
  );
}
