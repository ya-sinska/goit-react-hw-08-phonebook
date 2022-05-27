import { useState } from "react";

export const useModalState = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(prevState => !prevState);
    }
  
    return { modalOpen, openModal}
};