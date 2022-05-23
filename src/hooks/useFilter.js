import {  contactsFilterSlice } from '../redux'
import {  useSelector } from 'react-redux'

export const useFilter =  (data) => { 
    const filter = useSelector(contactsFilterSlice.getFilterValue);
    const filteredContacts = filter ? data.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())) : data; 
    
    return filteredContacts;   
}