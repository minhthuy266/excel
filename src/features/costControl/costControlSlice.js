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
  }),
});

export const {
  useGetCostControlsQuery,
  useAddNewCostControlMutation
} = costControlSlice;
