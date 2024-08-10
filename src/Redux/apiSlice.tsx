import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dev-api.gloversscorebooks.com//v1/user/admin/coach-list' }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => '',
        }),
        getDataById: builder.query({
            query: (id) => `/${id}`,
        }),
        createData: builder.mutation({
            query: (data) => ({
                url: '',
                method: 'POST',
                body: data,
            })
        }),
        updateDatabyId: builder.mutation({
            query: ({id, ...data}) => ({
                url: `/${id}`,
                method: 'PUT',
                body: data,
            })
        }),
        deleteDatabyId: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            })
        })
    })
});

export const { useCreateDataMutation, useDeleteDatabyIdMutation, useGetDataQuery, useGetDataByIdQuery, useUpdateDatabyIdMutation } = apiSlice;
export default apiSlice;