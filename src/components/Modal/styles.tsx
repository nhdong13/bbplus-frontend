import styled from "styled-components";

interface IModal {
  width?: string;
}

export const StyledModal = styled.div<IModal>`
  box-sizing: border-box;
  width: ${(props) => props.width || "820px"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 100vh;
  overflow: auto;
  border: none;
  outline: none;
`

export const StyledModalContent = styled.div<IModal>`
  display: flex;
  flex-direction: column;
  outline: none;
  background-color: white;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: auto;
  overflow: auto;
  .close-btn {
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 10px 20px;
  }
`;
