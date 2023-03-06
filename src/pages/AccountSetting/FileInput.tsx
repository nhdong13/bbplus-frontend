import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import { BREAKPOINTS } from "@/utils/breakpoints";

interface IProps {
  isMobile?: boolean
}

const FileInput = ({ isMobile }: IProps) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      // setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <React.Fragment>
      {
        isMobile
          ?
          <MobileView>
            <div>Upload Agency logo</div>
            <div className="btn">Browse</div>
          </MobileView>
          :
          <React.Fragment>
            <Content>
              <Preview >
                <BackgroundImage>
                  <img
                    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                    alt="new"
                    width="120px"
                    height="80px"
                  />
                </BackgroundImage>
              </Preview>
              <File>
                <Button>Choose File</Button>
                <FileName>filename.xxx</FileName>
              </File>
              <RemoveFile>
                <img src={IMAGES.iconRemove} />
              </RemoveFile>
            </Content>
            <TextPreview>Preview</TextPreview>
          </React.Fragment>
      }
      <TextError>
        <p>Logo Extension: JPG, JPEG, PNG, SVG - up to 500kb</p>
        <p>No less than 300×100 px, no larger than 2000×2000 px.</p>
        <p>The horizontal logo is preferable.</p>
      </TextError>
    </React.Fragment>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 39px;
`;
const Preview = styled.div`
  margin-right: 15px;
`;

const BackgroundImage = styled.div`
  width: 210px;
  height: 110px;
  background-image: url(${IMAGES.bgEmptyImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${BREAKPOINTS.laptop} {
    display: none;
  }
`;
const TextPreview = styled.div`
  font-family: ${FONTS.manropeRegular};
  font-weight: normal;
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 20px;
`;
const File = styled.div`
  display: flex;
  align-items: center;
  width: 305px;
  height: 68px;
  padding: 0px 16px;
  border: 2px solid ${COLORS.black};
  border-radius: 8px;
  font-weight: normal;
  font-size: 18px;
  text-align: left;
  margin-right: 9px;
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid;
  border-radius: 3px;
  margin-right: 10px;
  width: 126px;
  height: 44px;
  font-size: 16px;
`;
const FileName = styled.span``;
const TextError = styled.div`
  font-family: ${FONTS.manropeRegular};
  font-weight: normal;
  color: ${COLORS.red};
  font-size: 14px;
  @media ${BREAKPOINTS.laptop} {
    font-size: 12px;
  }
`;
const RemoveFile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 46px;
  height: 46px;
  background: ${COLORS.purple};
  border-radius: 2px;
`;

const MobileView = styled.div`
  border: 1px solid ${COLORS.silver};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 31px;
  padding-right: 51px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  .btn {
    width: 99px;
    height: 30px;
    border: 1px solid ${COLORS.black};
    text-align: center;
    line-height: 30px;
    border-radius: 3px;
  }
`

export default FileInput;
