import React, { useState, createContext, useContext } from "react";
import RoomExtras from "./RoomExtras";
import RoomModal from "./RoomModal";
import RoomTransfer from "./RoomTransfer";

export const MODAL_TYPES = {
  ROOM_MODAL: "room_details",
  ROOM_EXTRAS: "room_extras",
  ROOM_TRANSFER: "room_transfer",
};

const MODAL_COMPONENTS: { [T: string]: any } = {
  [MODAL_TYPES.ROOM_MODAL]: RoomModal,
  [MODAL_TYPES.ROOM_EXTRAS]: RoomExtras,
  [MODAL_TYPES.ROOM_TRANSFER]: RoomTransfer,
};

type GlobalModalContext = {
  showModal: (modalType: string, modalProps?: any) => void;
  hideModal: () => void;
  store:
    | {
        modalName: string;
      }
    | undefined;
};

const initalState: GlobalModalContext = {
  showModal: () => {},
  hideModal: () => {},
  store: {
    modalName: "",
  },
};

const GlobalModalContext = createContext(initalState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

interface GlobalModal {
  children: React.ReactNode;
}

interface StoreModal {
  modalName: string;
  modalProps: any;
}

export const GlobalModal = ({ children }: GlobalModal) => {
  const [store, setStore] = useState<StoreModal>();
  const { modalName, modalProps } = store || {};

  const showModal = (modalName: string, modalProps: any = {}) => {
    setStore({
      ...store,
      modalName,
      modalProps,
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      modalName: "",
      modalProps: {},
    });
  };

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalName || ""];
    if (!modalName || !ModalComponent) {
      return null;
    }
    return (
      <ModalComponent
        isOpen={!!modalName}
        id="global-modal"
        {...modalProps}
        onCloseModal={hideModal}
      />
    );
  };

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
};
