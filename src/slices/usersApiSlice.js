import { apiSlice } from "./apiSlice";

const BASE_URL = "http://localhost:8000/api";
const USERS_URL = `${BASE_URL}/users`;
const AUTH_URL = `${BASE_URL}/auth`;

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/login`,
                method: "POST",
                body: data
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/register`,
                method: "POST",
                body: data
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${AUTH_URL}/logout`,
                method: "POST",
            }),
        }),
        update: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/${data._id}`,
                method: "PUT",
                body: data
            }),
        }),
        delete: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/${data._id}`,
                method: "DELETE",
                body: data
            }),
        }),
    }),
});

export const { 
    useLoginMutation, 
    useRegisterMutation, 
    useLogoutMutation, 
    useUpdateMutation,
    useDeleteMutation, 
} = usersApiSlice;