import { useState } from "react";

const useSignUp = () => {
  const [bussinessName, setBussinessName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [registration, setRegistration] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [adminPhoneNumber, setAdminPhoneNumber] = useState<string>("");
  const [adminEmail, setAdminEmail] = useState<string>("");
  const [hearBy, setHearBy] = useState<string>("");
  const [requestSent, setRequestSent] = useState<boolean>(false);

  const handleFormSubmit = () => {
    setRequestSent(true);
  };

  return {
    bussinessName,
    setBussinessName,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    registration,
    setRegistration,
    location,
    setLocation,
    country,
    setCountry,
    website,
    setWebsite,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    adminPhoneNumber,
    setAdminPhoneNumber,
    adminEmail,
    setAdminEmail,
    hearBy,
    setHearBy,
    requestSent,
    setRequestSent,
    handleFormSubmit
  };
};

export default useSignUp;
