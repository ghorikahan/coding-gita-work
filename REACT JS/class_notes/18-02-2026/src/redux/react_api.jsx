import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',  // Unique key for store
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users'
        }),
        getTodos: builder.query({
            query: () => '/todos'
        }),
        getComments: builder.query({
            query: () => '/comments'
        })

    })
});

export const { useGetUsersQuery, useGetTodosQuery, useGetCommentsQuery } = usersApi;