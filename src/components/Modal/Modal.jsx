import { useEffect} from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalBox, CloseBtn } from "./Modal.styled"
import { createPortal } from 'react-dom';
import { Forma } from 'components/Form/Form';
import { useModalForm } from 'hooks/UseModalForm';
import CloseIcon from '@mui/icons-material/Close';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, id}) => {
 const {register, handleSubmit, errors, onSubmit, contact, isLoading}= useModalForm( onClose, id)
  useEffect(() => {
   const handleKeyDown = e => {
     if (e.code === 'Escape') {
    onClose();
    }};
    window.addEventListener('keydown', handleKeyDown);
    return () => {window.removeEventListener('keydown', handleKeyDown)} ;
  },[onClose])

 const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
 };
  return createPortal(      
      (<Overlay  onClick={handleBackdropClick}>
          <ModalBox >         
            <Forma btnText='Save chahges' register={register} handleSubmit={handleSubmit} errors={errors} contact={contact} isLoading={isLoading} onSubmit={onSubmit} />
            <CloseBtn type='button' onClick={()=>onClose()}><CloseIcon/></CloseBtn>
          </ModalBox>
        </Overlay>), modalRoot )
}

Modal.propTypes = {
  onClose: PropTypes.func,
  id: PropTypes.string,
  isModalOpen: PropTypes.bool,
}