import { Item, BtnDelete,BtnEdit, Delete, Edit, AvatarIcon, Name } from './ContactItem.styled'
import PropTypes from 'prop-types';
import { contactsItemSlice } from '../../redux';
import { useEffect} from "react";
import { sucsessDelete, errorDelete } from "utils/notification";
import { Modal } from 'components/Modal/Modal';
import { UseModal } from 'hooks/UseModal';

export const ContactItem = ({ name, number, id}) => { 
    const [deleteContact, { isLoading, isSuccess, isError }] = contactsItemSlice.useDeleteContactsMutation();
    useEffect(() => {
        isSuccess && sucsessDelete();
        isError && errorDelete();
    }, [isError, isSuccess]);
    const { modalOpen, openModal } = UseModal();
    
    return (
        <>
        <Item >
            <AvatarIcon>{name.charAt(0).toUpperCase()}</AvatarIcon>
            <Name primary={`${name}: ${number}`} />
            <BtnDelete
                disabled={isLoading}
                onClick={() => { deleteContact(id) }}
                variant="outlined"
                startIcon={<Delete />} />
            <BtnEdit
                onClick={openModal}
                variant="outlined"
                startIcon={<Edit />} />
        </Item> 
            {modalOpen&&<Modal onClose={openModal} isModalOpen={modalOpen} id={id}/>}
        </>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}