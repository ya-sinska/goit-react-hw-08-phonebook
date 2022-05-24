import { useGetContactsQuery, useUpdateContactMutation} from "redux/contactsItemSlice";
import { sucsessEdit, errorEdit } from "utils/notification";
import { useForm } from "react-hook-form";
import { useEffect } from 'react';


export const useModalForm = (onClose, id) => {
  const { data: contacts } = useGetContactsQuery();
  const contact = contacts.find(cont => cont.id === id);
  // console.log(contact)
  const [updateContact, { isLoading, isSuccess, isError }] = useUpdateContactMutation();
  useEffect(() => {
        isSuccess && sucsessEdit();
        isError && errorEdit();
    }, [isError, isSuccess]);
    const onSubmit = async fields => {
    try {
      await updateContact({id:contact.id, ...fields});
      console.log({id:contact.id, ...fields})
      // console.log(fields)
      onClose();
    } catch (error) {
      console.log(error);
    }
    };
  const { register, handleSubmit, formState: { errors } } = useForm({});
  return {register, handleSubmit, errors, onSubmit, contact, isLoading}
}