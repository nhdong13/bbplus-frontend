import { StyledSelectContainer } from "./style"
import { FormInput } from "@/utils/types/FormInput"
import IMAGES from "@/assets/images";

const Select = ({ label, fontSize, textColor, iconUrl, isImportant, marginTop, valid, maxHeight, handleChange }: FormInput) => {
  return (
    <>
      <StyledSelectContainer textColor={textColor} fontSize={fontSize} iconUrl={iconUrl} marginTop={marginTop} maxHeight={maxHeight} valid={valid}>
        <div className="label">{label.concat(isImportant ? " *" : " ")} <img src={IMAGES.iconSelectDown} width="10px" height="5px"/></div>
      </StyledSelectContainer>
    </>
  )
}

export default Select;
