import { BREAKPOINTS } from "@/utils/breakpoints";
import styled from "styled-components";
import { COLORS } from "@/utils/colors";

interface IModal {
  width?: string;
  height?: string;
}

export const StyledModal = styled.div<IModal>`
  box-sizing: border-box;
  width: ${(props) => props.width || "820px"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: ${(props) => props.height || "100vh"};
  overflow: auto;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
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
  .room-extras_close-button {
    @media ${BREAKPOINTS.mobileLg} {
      path {
        fill: ${COLORS.grayAf};
      }
    }
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 10px 20px;
  }
  @media ${BREAKPOINTS.mobileLg} {
    height: calc(100vh - 30px);;
    width: 100%;
    border: 1px solid #CECFD1;
    box-shadow: 0px 0.5px 5px rgba(0,0,0,.35);
    margin: 2px;
    overflow: hidden;
    .header {
      padding: 15px 15px 0;
      span {
        font-size: 16px;
      }
    }
  }
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${COLORS.grayAf};
  margin-top: 16px;
  margin-bottom: 10px;
  width: 380px;
  margin: 16px auto 0px;
`;
