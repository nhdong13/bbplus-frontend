import { StyledInputContainer } from "./formInputStyles";
import { FormInput } from "@/utils/types/FormInput";

const FormInput = ({
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
      <StyledInputContainer
        textColor={textColor}
        fontSize={fontSize}
        iconUrl={iconUrl}
        marginTop={marginTop}
        maxHeight={maxHeight}
        valid={valid}
        width={width}
      >
        <div className="icon"></div>
        <input
          placeholder={label.concat(isImportant ? " *" : " ")}
          onChange={handleChange}
        />
      </StyledInputContainer>
    </>
  );
};

export { FormInput };
