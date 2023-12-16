import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/login",
          method: "post",
          body,
        };
      },
    }),
    registerUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/register",
          method: "post",
          body,
        };
      },
    }),
    getUser: builder.query({
      query: () => {
        return {
          url: "/users",
          method: "get",
        };
      },
    }),
  }),
});
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetUserQuery,
} = authApi;

export default authApi;
