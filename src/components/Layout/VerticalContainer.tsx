import styled from "styled-components";

interface VerticalContainerInterface {
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
}

export const VerticalContainer = styled.div<VerticalContainerInterface>`
  align-items: ${props => props.alignItems};
  display: flex;
  flex-direction: column;
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
