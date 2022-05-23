import { useAddContactsMutation } from "redux/contactsItemSlice";
import { useGetContactsQuery } from "redux/contactsItemSlice";
import { useEffect } from "react";
import { notify, sucsessAdd,errorAdd } from "utils/notification";
import { useForm } from "react-hook-form";
export const useMainForm = () => {
     const { register, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name:'',
            number:''
        }
    });
    const [addContact, {isLoading, isSuccess, isError}] = useAddContactsMutation();
    const { data: stateItems} = useGetContactsQuery();
    
    useEffect(() => {
        isSuccess && sucsessAdd();
        isError && errorAdd();
    }, [isError, isSuccess]);

  const onSubmit = async (values) => {
    try {
      const item = {
        name: values.name,
        number: values.number,
      }
      const dublicateName = stateItems.find(item => item.name.toLowerCase() === values.name.toLowerCase());
      if (dublicateName) {
        notify(item.name);
        reset();
        return
      }
      else {
        await addContact(item);
        reset();
      }
      
    }
    catch (error) {
      error();
    }
  }
  return {register, handleSubmit, errors, isLoading, onSubmit}
}