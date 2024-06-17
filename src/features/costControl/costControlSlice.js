import { apiSlice } from "../../app/api/apiSlice";

export const costControlSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCostControls: builder.query({
      query: () => "cost/index",
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: (result, error, arg) => {
        return [{ type: "Cost", id: "LIST" }];
      },
    }),
    getCostControlById: builder.query({
      query: (id) => ({
        url: `/cost/edit`,
        method: "GET",
        params: {
          id,
        },
      }),
      transformResponse: (responseData) => {
        return responseData.data;
      },
      providesTags: (result, error, arg) => [{ type: "Po", id: arg }],
    }),
    addNewCostControl: builder.mutation({
      query: (credential) => ({
        url: "/cost/create",
        method: "POST",
        body: {...credential},
      }),
      invalidatesTags: [
        {
          type: "Cost",
          id: "LIST",
        },
      ],
      providesTags: (result, error, arg) => [{ type: "Cost", id: arg }],
    }),
    updateCostControl: builder.mutation({
      query: (initialCostData) => ({
        url: "/cost/update",
        method: "POST",
        body: {
          ...initialCostData,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        {
          type: "costControl",
          id: arg.id,
        },
        {
          type: "costControl",
          id: "LIST",
        },
      ],
    }),
  }),
});

export const {
  useGetCostControlsQuery,
  useAddNewCostControlMutation,
  useGetCostControlByIdQuery,
  useUpdateCostControlMutation
} = costControlSlice;
