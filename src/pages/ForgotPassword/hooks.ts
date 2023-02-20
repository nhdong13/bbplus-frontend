import { useState } from "react";

const useForgotPassword = () => {
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [emailAddressValid, setEmailAddressValid] = useState<boolean>(true);
  const [requestSent, setRequestSent] = useState<boolean>(false);

  const handleResetPassword = () => {
    setEmailAddress(emailAddress.toLowerCase());
    if (validateEmail(emailAddress)) {
      setEmailAddressValid(true);
      setRequestSent(true);
    } else {
      setEmailAddressValid(false);
    }
  };

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  return {
    emailAddress,
    setEmailAddress,
    emailAddressValid,
    setEmailAddressValid,
    requestSent,
    setRequestSent,
    handleResetPassword,
  };
};

export default useForgotPassword;
