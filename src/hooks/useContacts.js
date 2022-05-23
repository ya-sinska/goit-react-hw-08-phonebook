import { useGetContactsQuery } from 'redux/contactsItemSlice';
import {  contactsFilterSlice } from '../redux'
import { useSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit';
import * as React from 'react';

export const useContacts = () => {
    const filter = useSelector(contactsFilterSlice.getFilterValue);
    const selectFilteredContacts = React.useMemo(() => {
        return createSelector([responce => responce.data, (_, filter) => filter],
            (contacts, filter) => {
                return (contacts?.filter(
                    item => item.name
                        .toLowerCase()
                        .includes(filter.toLowerCase())) ?? []);
            })
    }, []);
    return useGetContactsQuery(undefined, {
        selectFromResult(result) {
            return {
                ...result,
                filteredContacts: selectFilteredContacts(result, filter)
            }
        }
    });    
}