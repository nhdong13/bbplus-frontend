import { useState } from "react";

const useLogin = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleRememberMeSwitcher = () => {
    setRememberMe(!rememberMe);
  };

  return {
    rememberMe,
    setRememberMe,
    handleRememberMeSwitcher
  }
}

export default useLogin;
