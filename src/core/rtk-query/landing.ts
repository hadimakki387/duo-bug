import { mainApi } from ".";

const extendApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any,{email:string,password:string}>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = extendApi;
