import { apiSlice } from "../../app/api/apiSlice";

export const poSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPOs: builder.query({
      query: () => "purchase-order/index",
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: (result, error, arg) => {
        return [{ type: "PO", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetPOsQuery } = poSlice;
