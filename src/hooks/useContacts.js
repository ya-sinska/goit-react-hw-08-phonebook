import { useGetContactsQuery } from 'redux/contactsItemSlice';
import {  contactsFilterSlice } from '../redux'
import { useSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit';
import {useMemo} from 'react';

export const useContacts =  () => {
    const filter = useSelector(contactsFilterSlice.getFilterValue);
    const selectFilteredContacts = useMemo(() => {
        return createSelector([responce => responce.data, (_, filter) => filter],
            (contacts, filter) => {
                return (contacts?.filter(
                    item => item.name
                        .toLowerCase()
                        .includes(filter.toLowerCase())) ?? []);
            })
    }, []);
    const { filteredContacts, isLoading, isSuccess, refetch } =  useGetContactsQuery(undefined, {
        selectFromResult(result) {
            return {
                ...result,
                filteredContacts: selectFilteredContacts(result, filter)
            }
        },
        refetchOnMountOrArgChange:true
    }); 
    return { filteredContacts, isLoading, isSuccess, refetch };
}