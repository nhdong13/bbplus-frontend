import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";
import styled from "styled-components";
import { Typography as Span } from "../Typography";
import { useState } from "react";
import useComponentVisible from "@/utils/clickOutSide";
import { FONTS } from "@/utils/fonts";
import { FormInput } from "../FormInput";
import { ReactSVG } from "react-svg";

const StyledSelectContainer = styled.div.attrs(
  (props: { showOption: boolean }) => props
)`
  position: relative;
  margin-top: 13.4px;
  border-radius: 4.5px;
  border: 1px solid ${COLORS.black};
  padding: 12.6px 10.5px 13.9px 9.4px;
  cursor: pointer;
  background: ${COLORS.white};

  .label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    font-family: ${FONTS.manrope};
    border: none;
    .dropdown {
      svg,
      path {
        width: 10px;
        display: block;
      }
      transform: ${({ showOption }) =>
        showOption ? "rotate(180deg)" : "rotate(0)"};
      transition: all 0.5s ease-in-out;
    }
  }

  .options {
    list-style: none;
    font-size: 16px;
    border: 1px solid ${COLORS.doveGray};
    margin-top: 15px;
    position: absolute;
    left: 0;
    z-index: 10;
    background: ${COLORS.white};
    min-width: 87px;
    li {
      cursor: pointer;
      padding: 10px 20px;
      color: ${COLORS.black};
      font-weight: normal;
      &:not(.selected):hover {
        background: ${COLORS.blueRibbon};
        opacity: 0.5;
        color: ${COLORS.white};
      }
    }
    .selected {
      background: ${COLORS.blueRibbon};
      color: ${COLORS.white};
    }
  }
`;

interface IProps {
  label: string;
  options: Array<any>;
}

const PrefixSelect = ({ label, options }: IProps) => {
  const [showOption, setShowOption] = useState<boolean>(false);

  const {
    ref: ref,
    isComponentVisible: visible,
    setIsComponentVisible: setVisible,
  } = useComponentVisible(false);

  const onClickOption = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowOption(!showOption);
    setVisible(!showOption);
  };

  return (
    <>
      <StyledSelectContainer
        showOption={visible}
        className="select-container"
        onClick={(e) => onClickOption(e)}
      >
        <div className="label">
          <div>{label}</div>
          <ReactSVG className="dropdown" src={IMAGES.iconDropDownBlue} />
        </div>
        {options && visible && (
          <ul className="options" ref={ref}>
            {options.map((op) => {
              return (
                <li key={op.id} className={op.id === 1 ? "selected" : ""}>
                  {op.label}
                </li>
              );
            })}
          </ul>
        )}
      </StyledSelectContainer>
    </>
  );
};

const PersonDetailInputContainer = styled.div`
  display: flex;
  margin-top: 33px;

  div p {
    margin-bottom: 13.4px;
  }

  .prefix {
    width: 87px;
  }

  .firstname {
    margin-left: 20.5px;
    width: 309px;
  }
  .lastname {
    margin-left: 46px;
    width: 309px;
  }
`;

interface PersonDetailInput {
  options: any;
  label: string;
  input1Label: string;
  input2Label: string;
}

const PersonDetailInput = ({
  options,
  label,
  input1Label,
  input2Label,
}: PersonDetailInput) => {
  return (
    <PersonDetailInputContainer>
      <div className="prefix">
        <Span fontWeight="bold">Prefix</Span>
        <PrefixSelect label={label} options={options} />
      </div>
      <div className="firstname">
        <Span fontWeight="bold">First Name</Span>
        <FormInput
          label={input1Label}
          marginTop="0"
          maxHeight="43px"
          cssOptions="border-width: 1px;input{padding:24px;}; margin-top: 13.4px;"
        />
      </div>
      <div className="lastname">
        <Span fontWeight="bold">Last Name</Span>
        <FormInput
          label={input2Label}
          marginTop="0"
          maxHeight="43px"
          cssOptions="border-width: 1px;input{padding:24px;}; margin-top: 13.4px;"
        />
      </div>
    </PersonDetailInputContainer>
  );
};

export default PersonDetailInput;
