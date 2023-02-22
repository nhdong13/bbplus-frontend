import { useState } from "react";

const useResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");
  const [requestSent, setRequestSent] = useState<boolean>(false);

  const handleSubmitPassword = () => {
    if (true) {
      setRequestSent(true);
    } else {
    }
  };

  return {
    newPassword,
    setNewPassword,
    confirmationPassword,
    setConfirmationPassword,
    requestSent,
    setRequestSent,
    handleSubmitPassword,
  };
};

export default useResetPassword;
