import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const dynamicBaseQuery = (baseUrl: string) => fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
        const token = sessionStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `${token}`);
        }
        headers.set('Content-Type', 'application/json');
        return headers;
    },
});

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: dynamicBaseQuery(''),
    endpoints: (builder) => ({
        getData: builder.query({
            query: (endpoint) => endpoint,
        }),
    }),
});

export const { useGetDataQuery } = apiSlice;

export default apiSlice;
