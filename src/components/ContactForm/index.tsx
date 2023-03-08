import { ContactForm } from "@/utils/types/ContactForm";
import { H3 } from "../Typography";
import { ContactFormContainer } from "./contactFormStyles";
import PersonDetailInput from "./PersonDetailInput";
import PhoneContactInput from "./PhoneContactInput";

const ContactForm = ({
  numberAdult,
  numberChild,
  orderNumber,
  isPrimaryContact,
  handleSubmit,
}: ContactForm) => {
  return (
    <>
      <ContactFormContainer isPrimaryContact={isPrimaryContact}>
        <H3>Primary Contact</H3>
        <p className="sub-header">
          Room {orderNumber}: {numberAdult} Adults, {numberChild} Child, Room
          category name
        </p>
        <PersonDetailInput
          options={[
            { id: 1, label: "Mr" },
            { id: 2, label: "Mrs" },
          ]}
          label="Select"
          input1Label="(e.g. John)"
          input2Label="(e.g. Smith)"
        />
        {isPrimaryContact && <PhoneContactInput options={[{ id: 1, label: "+84" }]} />}
        <div className="divider"></div>
        <p className="sub-header">Child 1</p>
        <PersonDetailInput
          options={[
            { id: 1, label: "Mr" },
            { id: 2, label: "Mrs" },
          ]}
          label="Select"
          input1Label="(e.g. Jack)"
          input2Label="(e.g. Smith)"
        />
      </ContactFormContainer>
    </>
  );
};

export { ContactForm };
