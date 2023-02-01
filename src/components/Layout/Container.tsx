import styled from "styled-components";

interface ContainerStyle {
  backgroundColor?: string
  backgroundImage?: string
  flexDirection?: string
  justifyContent?: string
  height?: string
  margin?: string
  maxHeight?: string
  maxWidth?: string
  textAlign?: string
  width?: string
  alignItems?: string
  gap?: string
}

export const Container = styled.div<ContainerStyle>`
  alignItems: ${props => props.alignItems};
  display: flex;
  flex-direction: ${props => props.flexDirection};
  background-color: ${props => props.backgroundColor};
  justify-content: ${props => props.justifyContent};
  gap: ${props => props.gap};
  height: ${props => props.height};
  margin: ${props => props.margin};
  max-height: ${props => props.maxHeight}
  max-width: ${props => props.maxWidth};
  text-align: ${props => props.textAlign};
`
