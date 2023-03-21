import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import styled from "styled-components";

const Breadcrumb = styled.div`
  display: flex;
  max-width: 1400px;
  padding: 34px 0px 20px 0px;
  margin: 0 0;
  @media ${BREAKPOINTS.laptop} {
    margin: 0 0;
    padding: 15px 10px 10px 10px;
    display: block;
    float: left;
  }
`;

const BreadcrumbItem = styled.div`
  margin-right: 20px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  color: ${COLORS.blueFrench};
  display: inline-block;
  &:last-child {
    white-space: pre-wrap;
    display: inline;
  }
  .icon {
    display: inline-block;
    margin-right: 12px;
  }
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
    margin-right: 2px;
    &::after {
      content: ">";
      margin-left: 2px;
    }
    .icon {
      display: none;
    }
  }
`;

interface IContainer {
  display?: string;
  width?: string;
  maxWidth?: string;
  gridTemplateColumns?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  flexDirection?: string;
}

const Container = styled.div<IContainer>`
  box-sizing: border-box;
  width: ${(props) => props.width || "1400px"};
  height: fit-content;
  max-width: ${(props) => props.maxWidth || "1400px"};
  margin: ${(props) => props.margin || "auto"};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display || "grid"};
  grid-template-columns: ${(props) => props.gridTemplateColumns || "40% 60%"};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
  @media ${BREAKPOINTS.tablet} {
    max-width: 100%;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }
`;

export { Breadcrumb, BreadcrumbItem, Container };
