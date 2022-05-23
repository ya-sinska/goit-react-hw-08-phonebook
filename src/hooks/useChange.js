import { useDispatch } from 'react-redux';
import { contactsFilterSlice } from "../redux";

export const useChange = () => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const inputValue = e.currentTarget.value;
        dispatch(contactsFilterSlice.addFilter(inputValue))
    };
    return handleChange;
};