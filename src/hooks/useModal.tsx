import { useState } from "react";

export default function useModal() {
  const [modal, setModal] = useState<string>();
  const [data, setData] = useState();
  const openModal = (modal: string) => {
    setModal(modal);
  };
  const onCloseModal = () => {
    setModal("");
  };
  return { modal, openModal, onCloseModal };
}
