import styled from "styled-components";

interface HorizontalInterface {
  backgroundColor?: string
  backgroundImage?: string
  justifyContent?: string
  height?: string
  margin?: string
  maxHeight?: string
  maxWidth?: string
  textAlign?: string
  width?: string
  alignItems?: string
  gap?: string
  padding?: string
  className?: string
  children: JSX.Element | JSX.Element[]
}

const StyledHorizontalContainer = styled.div<HorizontalInterface>`
  align-items: ${props => props.alignItems};
  display: flex;
  flex-direction: row;
  background-color: ${props => props.backgroundColor};
  justify-content: ${props => props.justifyContent};
  gap: ${props => props.gap};
  height: ${props => props.height};
  margin: ${props => props.margin};
  max-height: ${props => props.maxHeight};
  max-width: ${props => props.maxWidth};
  text-align: ${props => props.textAlign};
  padding: ${props => props.padding};
  width: ${props => props.width};
`
const HorizontalContainer = ({
  backgroundColor,
  backgroundImage,
  justifyContent,
  height,
  margin,
  maxHeight,
  maxWidth,
  textAlign,
  width,
  alignItems,
  gap,
  padding,
  className,
  children,
}: HorizontalInterface
) => {
  return (
    <StyledHorizontalContainer
      className={className}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      justifyContent={justifyContent}
      height={height}
      margin={margin}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      textAlign={textAlign}
      width={width}
      alignItems={alignItems}
      gap={gap}
      padding={padding}
    >
      {children}
    </StyledHorizontalContainer>
  )
}

export default HorizontalContainer;
