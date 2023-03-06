import LegendComboBox from "@/components/AccountSettings/LegendComboBox";
import FileInput from "../FileInput";
import {
  LegendBox,
  LegendTitle,
  LegendItem,
  NextStepBox,
  ButtonNextStep,
  StyledPlatformSetting,
} from "../styles";
import useWindowSize from "@/utils/windowResize";

interface IPros {
  onClickNextStep: (id: number) => void,
}

export default function PlatformSetting({ onClickNextStep }: IPros) {
  const wd = useWindowSize();
  return (
    <>
      <StyledPlatformSetting>
        <div className="body-section">
          <div className="body-section-item">
            <LegendBox>
              <LegendTitle>Agency details</LegendTitle>
              <div className="contact-title">
                Primary contact method <span className="red-start">*</span>
              </div>
              <div>
                <LegendItem>
                  <LegendComboBox
                    hasFormInput
                    legendBoxTitle={'Agency Name'}
                    formInputLabel={'Agency Name'}
                  />
                </LegendItem>
                <LegendItem>
                  <LegendComboBox
                    hasFormInput
                    legendBoxTitle={'Email Address'}
                    formInputLabel={'Email Address'}
                  />
                </LegendItem>
                <LegendItem>
                  <LegendComboBox
                    hasFormInput
                    legendBoxTitle={'Phone number'}
                    formInputLabel={'Phone number'}
                  />
                </LegendItem>
                <LegendItem>
                  <LegendComboBox
                    hasFormInput
                    legendBoxTitle={'Country'}
                    formInputLabel={'Country'}
                  />
                </LegendItem>
                <LegendItem>
                  <LegendComboBox
                    hasFormInput
                    legendBoxTitle={'Physical Address'}
                    formInputLabel={'Physical Address'}
                  />
                </LegendItem>
              </div>
            </LegendBox>
            <LegendBox className="legenbox-right step-1">
              <LegendTitle>Agency Logo</LegendTitle>
              <FileInput />
            </LegendBox>
          </div>

          <div className="body-section-item">
            <LegendBox>
              <LegendTitle>Finance details</LegendTitle>
              <div className="contact-title">
                Contact for handling accounting and finance{" "}
                <span className="red-start">*</span>
              </div>
              <LegendComboBox
                hasFormInput
                legendBoxTitle={'Email Address'}
                formInputLabel={'Email Address'}
              />
              <LegendItem>
                <LegendComboBox
                  hasFormInput
                  legendBoxTitle={'Phone number'}
                  formInputLabel={'Phone number'}
                />
              </LegendItem>
            </LegendBox>
            {wd <= 430 ? <FileInput isMobile={true} /> : null}
            <NextStepBox>
              <ButtonNextStep onClick={() => onClickNextStep(1)}>Next Step</ButtonNextStep>
            </NextStepBox>
          </div>
        </div>
      </StyledPlatformSetting>
    </>
  )
}
