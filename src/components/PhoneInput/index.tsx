import { StyledPhoneInputContainer, PhoneSelect } from "./style";
import { FormInput } from "@/utils/types/FormInput";
import IMAGES from "@/assets/images";

const Select = ({
  label,
  fontSize,
  textColor,
  iconUrl,
  isImportant,
  marginTop,
  valid,
  width,
  maxHeight,
  handleChange,
}: FormInput) => {
  return (
    <>
      <StyledPhoneInputContainer
        textColor={textColor}
        fontSize={fontSize}
        iconUrl={iconUrl}
        marginTop={marginTop}
        maxHeight={maxHeight}
        valid={valid}
        width={width}
      >
        <PhoneSelect>
          <img src={IMAGES.iconUS} width="36px" height="30px" />
          <img src={IMAGES.iconSelectDown} width="10px" height="5px" />
        </PhoneSelect>
        <input
          placeholder={label.concat(isImportant ? " *" : " ")}
          onChange={handleChange}
          type="number"
        />
      </StyledPhoneInputContainer>
    </>
  );
};

export default Select;
