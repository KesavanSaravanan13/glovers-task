import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dev-api.gloversscorebooks.com/v1/user/admin',
        prepareHeaders: (headers) => {
            const token = sessionStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => '/coach-list?search=',
        }),
    }),
});

export const {
    useGetDataQuery,
} = apiSlice;

export default apiSlice;
