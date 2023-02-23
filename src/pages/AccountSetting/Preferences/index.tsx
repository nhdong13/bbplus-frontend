import useAccountSetting from "../hooks";
import {
  LegendBox,
  LabelText,
  LegendTitle,
  LegendItem,
  LegendField,
  TextErrorInput,
} from "../styles";
import { FormInput } from "@/components/FormInput";
import Select from "@/components/Select";

function PreferenceSetting() {
  const {} = useAccountSetting();
  return (
    <div className="body-section">
      <div className="body-section-item">
        <LegendBox>
          <LegendTitle>Markup</LegendTitle>
          <LegendItem isError={true}>
            <LabelText>For Hotels</LabelText>
            <LegendField>
              <Select
                label="Percentage"
                width="147px"
                maxHeight="68px"
                marginTop="0px"
                padding="16px"
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
          <LegendItem isError={true}>
            <LabelText>For Tranfers</LabelText>
            <LegendField>
              <Select
                label="Percentage"
                width="147px"
                maxHeight="68px"
                marginTop="0px"
                padding="16px"
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
          <LegendItem isError={true}>
            <LabelText>For Meal Plans</LabelText>
            <LegendField>
              <Select
                label="Percentage"
                width="147px"
                maxHeight="68px"
                marginTop="0px"
                padding="16px"
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
          <LegendItem isError={true}>
            <LabelText>For Packages</LabelText>
            <LegendField>
              <Select
                label="Percentage"
                width="147px"
                maxHeight="68px"
                marginTop="0px"
                padding="16px"
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
          <LegendItem isError={true}>
            <LabelText>For Excursions</LabelText>
            <LegendField>
              <Select
                label="Percentage"
                width="147px"
                maxHeight="68px"
                marginTop="0px"
                padding="16px"
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
        <LegendBox className="legenbox-right">
          <LegendTitle>Other settings</LegendTitle>
          <LegendItem>
            <LabelText>Email Address</LabelText>
            <LegendField>
              <Select
                label="Percentage"
                width="147px"
                maxHeight="68px"
                marginTop="0px"
                padding="16px"
              />
            </LegendField>
          </LegendItem>
          <LegendItem>
            <LabelText>Email Address</LabelText>
            <FormInput
              width="339px"
              maxHeight="68px"
              label="Email Address"
              marginTop="0px"
            />
          </LegendItem>
        </LegendBox>
      </div>
    </div>
  );
}

export default PreferenceSetting;
