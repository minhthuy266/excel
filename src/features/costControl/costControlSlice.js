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
      query: (initialPoData) => ({
        url: "/cost/update",
        method: "POST",
        body: {
          ...initialPoData,
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
  useUpdateCostControlMutation
} = costControlSlice;
