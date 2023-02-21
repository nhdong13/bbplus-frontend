import styled from "styled-components";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import IMAGES from "@/assets/images"
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";


const FileInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      // setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <Content>
        <Preview>
          <BackgroundImage>
            <img
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              alt="new"
              width="100%"
              height="100%"
            />
          </BackgroundImage>
          <TextPreview>Preview</TextPreview>
        </Preview>
        <File>
          <Button>Choose File</Button>
          <FileName>filename.xxx</FileName>
        </File>
        <RemoveFile>
          {/* <img src={IMAGES.iconRemove} /> */}
        </RemoveFile>

      </Content>
      <TextError>
        <p>Logo Extension: JPG, JPEG, PNG, SVG - up to 500kb</p>
        <p>No less than 300×100 px, no larger than 2000×2000 px.</p>
        <p>The horizontal logo is preferable.</p>
      </TextError>
      {/* <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      <label htmlFor="select-image">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
      <Box mt={2} textAlign="center">
        <div>Image Preview:</div>
        <img
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="new"
        />
      </Box> */}
    </>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 39px;
`
const Preview = styled.div`
  margin-right: 15px;
`

const BackgroundImage = styled.div`
  width:210px;
  height:110px;
  /* background-image: url(${IMAGES.noImage}); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TextPreview = styled.span`
  /* font-family: ${FONTS.manropeRegular}; */
  font-weight: normal;
  font-size: 14px;
`
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
  border: 1px solid ;
  border-radius: 3px;
  margin-right: 10px;
  width: 126px;
  height: 44px;
  font-size: 16px;
`
const FileName = styled.span`
`
const TextError = styled.div`
  /* font-family: ${FONTS.manropeRegular}; */
  font-weight: normal;
  color: ${COLORS.red};
  font-size: 14px;
  margin-top: 20px;
`
const RemoveFile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 46px;
  height: 46px;
  background: ${COLORS.periwinkleapprox};
  border-radius: 3px;
`

export default FileInput;
