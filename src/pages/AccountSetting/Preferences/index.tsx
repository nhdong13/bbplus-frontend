import useWindowSize from "@/utils/windowResize";
import {
  LegendBox,
  LabelText,
  LegendTitle,
  LegendItem,
  LegendField,
  TextErrorInput,
  NextStepBoxPre,
  ButtonNextStep

} from "../styles";
import { FormInput } from "@/components/FormInput";
import Select from "@/components/Select";
interface IPros {
  onClickNextStep: (id: number) => void,
}

function PreferenceSetting({ onClickNextStep }: IPros) {
  const wd = useWindowSize();

  return (
    <div className="body-section">
      <div className="body-section-item step-show-label">
        <LegendBox>
          <LegendTitle>Markup</LegendTitle>
          <LegendItem >
            <LabelText>For Hotels</LabelText>
            <LegendField isError={true} step={1}>
              <Select
                label="Percentage"
                width="147px"
                maxHeight="68px"
                marginTop="0px"
                padding="16px"
                isIconBlue={wd <= 430 ? false : true}
              />
              <FormInput
                width="147px"
                maxHeight="68px"
                label="0%"
                marginTop="0px"
              />
            </LegendField>
          </LegendItem>
          <TextErrorInput>From 0.01 up to 99.99</TextErrorInput>
          <LegendItem>
            <LabelText>For Tranfers</LabelText>
            <LegendField isError={true} step={1}>
              <Select
                label="Percentage"
                width="147px"
                maxHeight="68px"
                marginTop="0px"
                padding="16px"
                isIconBlue={wd <= 430 ? false : true}
              />
              <FormInput
                width="147px"
                maxHeight="68px"
                label="0%"
                marginTop="0px"
              />
            </LegendField>
          </LegendItem>
          <TextErrorInput>From 0.01 up to 99.99</TextErrorInput>
          <LegendItem>
            <LabelText>For Meal Plans</LabelText>
            <LegendField isError={true} step={1}>
              <Select
                label="Percentage"
                width="147px"
                maxHeight="68px"
                marginTop="0px"
                padding="16px"
                isIconBlue={wd <= 430 ? false : true}
              />
              <FormInput
                width="147px"
                maxHeight="68px"
                label="0%"
                marginTop="0px"
              />
            </LegendField>
          </LegendItem>
          <TextErrorInput>From 0.01 up to 99.99</TextErrorInput>
          <LegendItem>
            <LabelText>For Packages</LabelText>
            <LegendField isError={true} step={1}>
              <Select
                label="Percentage"
                width="147px"
                maxHeight="68px"
                marginTop="0px"
                padding="16px"
                isIconBlue={wd <= 430 ? false : true}
              />
              <FormInput
                width="147px"
                maxHeight="68px"
                label="0%"
                marginTop="0px"
              />
            </LegendField>
          </LegendItem>
          <TextErrorInput>From 0.01 up to 99.99</TextErrorInput>
          <LegendItem>
            <LabelText>For Excursions</LabelText>
            <LegendField isError={true} step={1}>
              <Select
                label="Percentage"
                width="147px"
                maxHeight="68px"
                marginTop="0px"
                padding="16px"
                isIconBlue={wd <= 430 ? false : true}
              />
              <FormInput
                width="147px"
                maxHeight="68px"
                label="0%"
                marginTop="0px"
              />
            </LegendField>
          </LegendItem>
          <TextErrorInput>From 0.01 up to 99.99</TextErrorInput>
        </LegendBox>
        <LegendBox className="legenbox-right item-finance">
          <LegendTitle>Other settings</LegendTitle>
          <LegendItem>
            <LabelText>Choose currency</LabelText>
            <LegendField className="currency">
              <Select
                label="Percentage"
                width="147px"
                maxHeight="68px"
                marginTop="0px"
                padding="16px"
                isIconBlue={wd <= 430 ? false : true}
              />
            </LegendField>
          </LegendItem>
          <LegendItem>
            <LabelText>Email address for notification</LabelText>
            <FormInput
              width="286px"
              maxHeight="68px"
              label="Email Address"
              marginTop="0px"
            />
          </LegendItem>
        </LegendBox>
      </div>
      <NextStepBoxPre>
        <ButtonNextStep onClick={() => onClickNextStep(2)}>Next Step</ButtonNextStep>
      </NextStepBoxPre>
    </div>
  );
}

export default PreferenceSetting;
