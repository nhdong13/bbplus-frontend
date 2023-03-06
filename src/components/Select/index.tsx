import { StyledSelectContainer } from "./style";
import IMAGES from "@/assets/images";

const Select = ({
  label,
  fontSize,
  textColor,
  iconUrl,
  isImportant,
  marginTop,
  valid,
  maxHeight,
  width,
  padding,
  handleChange,
  typeIconDown
}: any) => {
  return (
    <>
      <StyledSelectContainer
        textColor={textColor}
        fontSize={fontSize}
        iconUrl={iconUrl}
        marginTop={marginTop}
        maxHeight={maxHeight}
        valid={valid}
        width={width}
        padding={padding}
        className="select-container"
      >
        <div className="label">
          <div>{label?.concat(isImportant ? " *" : " ")}</div>
          <img alt='' src={typeIconDown ? IMAGES.iconArrowDown : IMAGES.iconSelectDown} width="10px" height="5px" />
        </div>
      </StyledSelectContainer>
    </>
  );
};

export default Select;
