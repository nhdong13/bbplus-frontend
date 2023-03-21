import { WrapperSelect, StyledSelectContainer } from "./style";
import IMAGES from "@/assets/images";
import { useState } from "react";
import useComponentVisible from "@/utils/clickOutSide";

interface IOption {
  _id: number | string,
  label: string
}
interface IProps {
  label?: string,
  customLabel?: JSX.Element[] | JSX.Element,
  fontSize?: string,
  textColor?: string,
  iconUrl?: string,
  isImportant?: boolean,
  marginTop?: string,
  valid?: boolean,
  maxHeight?: string,
  width?: string,
  padding?: string,
  handleChange?: (c: IOption) => void,
  isIconBlue?: boolean,
  options?: Array<IOption>
}

const Select = ({
  label,
  customLabel,
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
  isIconBlue,
  options
}: IProps) => {

  const [showOption, setShowOption] = useState<boolean>(false)
  const [selected, setSelected] = useState<IOption>()

  const {
    ref: ref,
    isComponentVisible: visible,
    setIsComponentVisible: setVisible,
  } = useComponentVisible(false);

  const onClickOption = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!showOption) setShowOption(showOption);
    setVisible(!showOption)
  }

  const onClickItem = (item: IOption) => {
    setSelected(item)
    setVisible(false)
    handleChange(item)
  }

  return (
    <WrapperSelect className="wrapper-select">
      <StyledSelectContainer
        textColor={textColor}
        fontSize={fontSize}
        iconUrl={iconUrl}
        marginTop={marginTop}
        maxHeight={maxHeight}
        valid={valid}
        width={width}
        padding={padding}
        showOption={visible}
        className="select-container"
      >
        <div className="label" onClick={(e) => onClickOption(e)}>
          {
            customLabel
              ?
              <div>{customLabel}</div>
              :
              <div>{label?.concat(isImportant ? " *" : " ")}</div>
          }
          <img src={isIconBlue ? IMAGES.iconDropDownBlue : IMAGES.iconArrowDown} width="10px" height="5px" />
        </div>
      </StyledSelectContainer>
      {
        options && visible
          ?
          <ul className="options" ref={ref} >
            {
              options.map((op: IOption) => {
                return <li key={op._id} className={op._id === selected?._id ? 'selected' : ''} onClick={() => onClickItem(op)}>{op.label}</li>
              })
            }
          </ul>
          :
          null
      }

    </WrapperSelect>
  );
};

export default Select;
