import { useState } from "react";

export const useModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(prevState => !prevState);
    }
  
    return { modalOpen, openModal}
};