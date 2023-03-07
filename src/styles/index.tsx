import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import styled from "styled-components";

const Breadcrumb = styled.div`
  display: flex;
  max-width: 1400px;
  padding: 34px 35px 20px 35px;
  margin: 0 auto;
  @media ${BREAKPOINTS.laptop} {
    padding-top: 15px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
  }
`;

const BreadcrumbItem = styled.div`
  margin-right: 20px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  color: ${COLORS.blueRYB};
  &::after {
    content: ">";
    margin-left: 15px;
  }
  &:last-child {
    &::after {
      content: "";
    }
  }
  @media ${BREAKPOINTS.laptop} {
    font-size: 14px;
    font-weight: normal;
    margin-right: 5px;
    &::after {
      content: ">";
      margin-left: 5px;
    }
  }
`;

interface IContainer {
  display?: string;
  width?: string;
  maxWidth?: string;
  gridTemplateColumns?: string;
  margin?: string;
  justifyContent?: string;
  flexDirection?: string;
}

const Container = styled.div<IContainer>`
  width: ${(props) => props.width || "1400px"};
  max-width: ${(props) => props.maxWidth || "1400px"};
  margin: ${(props) => props.margin || "auto"};
  display: ${(props) => props.display || "grid"};
  grid-template-columns: ${(props) => props.gridTemplateColumns || "40% 60%"};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
`;

export { Breadcrumb, BreadcrumbItem, Container };
