import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";
import styled from "styled-components";
import { useState } from "react";
import useComponentVisible from "@/utils/clickOutSide";
import { FONTS } from "@/utils/fonts";
import { FormInput } from "../FormInput";
import { Typography as Span } from "../Typography";

const StyledSelectContainer = styled.div.attrs(
  (props: { showOption: boolean }) => props
)`
  margin-top: 13.4px;
  position: relative;
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
    img {
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

const CountryCodeSelect = ({ label, options }: IProps) => {
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
          <img src={IMAGES.iconBlueArrowDown} width="9px" height="5.5px" />
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

const PhoneContactInputContainer = styled.div`
  display: flex;
  margin-top: 33px;

  .country-code {
    width: 87px;
    white-space: nowrap;
  }

  .phonenumber {
    margin-left: 20.5px;
    width: 309px;
  }
  .email-address {
    margin-left: 46px;
    width: 309px;
  }
`;

interface PhoneContactInput {
  options: any;
}

const PhoneContactInput = ({ options }: PhoneContactInput) => {
  return (
    <PhoneContactInputContainer>
      <div className="country-code">
        <Span fontWeight="bold">Phone Contact</Span>
        <CountryCodeSelect label="Code" options={options} />
      </div>
      <div className="phonenumber">
        <p>&nbsp;</p>
        <FormInput
          label="Enter a valid phone number"
          marginTop="0"
          maxHeight="43px"
          cssOptions="border-width: 1px;input{padding:24px;}; margin-top: 13.4px;"
        />
      </div>
      <div className="email-address">
      <Span fontWeight="bold">Email address</Span>
        <FormInput
          label="Watch out for typos in the email"
          marginTop="0"
          maxHeight="43px"
          cssOptions="border-width: 1px;input{padding:24px;}; margin-top: 13.4px;"
        />
      </div>
    </PhoneContactInputContainer>
  );
};

export default PhoneContactInput;
