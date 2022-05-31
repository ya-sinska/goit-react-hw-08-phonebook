import { createApi} from '@reduxjs/toolkit/query/react'
import axios from 'axios';
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }
export const contactsItemApi = createApi({
  reducerPath: 'items',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com'
    }),
  tagTypes:['Items'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        url: '/contacts',
        method: 'get'
      }),
        keepUnusedDataFor: 3,
        providesTags:['Items'],
    }),
    addContacts: builder.mutation({
        query: (values) => ({
        url: '/contacts',
        method: 'POST',
        data: values,
      }),
        invalidatesTags:['Items'],
    }),
    deleteContacts: builder.mutation({
        query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',  
      }),
        invalidatesTags:['Items'],
    }),
    getContactsById: builder.query({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'get'
      }),
      providesTags: ['Items'],
    }),
    updateContact: builder.mutation({
      query: (obj) => ({
        url: `/contacts/${obj.id}`,
        method: 'PATCH',
        data: {
          name:obj.name,
          number:obj.number
        },
      }),
      invalidatesTags: ['Items'],
    }),
  }),
})

export const {useUpdateContactMutation, useGetContactsByIdQuery, useGetContactsQuery, useAddContactsMutation, useDeleteContactsMutation} = contactsItemApi;
