import { StyledInputContainer } from "./formInputStyles";
import { FormInput } from "@/utils/types/FormInput";

const FormInput = ({
  type,
  label,
  fontSize,
  textColor,
  iconUrl,
  isImportant,
  marginTop,
  valid,
  width,
  maxHeight,
  cssOptions,
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
        cssOptions={cssOptions}
        className="input-container"
      >
        <div className="icon"></div>
        {type === 'area' ? (
          <textarea
            placeholder={label?.concat(isImportant ? " *" : " ")}
            onChange={handleChange}
          />
        ) : (
          <input
            placeholder={label?.concat(isImportant ? " *" : " ")}
            onChange={handleChange}
          />
        )}

      </StyledInputContainer>
    </>
  );
};

export { FormInput };
