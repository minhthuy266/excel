import { apiSlice } from "../../app/api/apiSlice";

const { createEntityAdapter, createSelector } = require("@reduxjs/toolkit");

const contractsAdapter = createEntityAdapter({});

const initialState = contractsAdapter.getInitialState();

export const contractsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getContracts: builder.query({
      query: () => "/project/index",
      transformResponse: (response) => {
        console.log("response", response.data)
        return response.data;
      },


    //   validateStatus: (response, result) => {
    //     return response.status === 200 && !result.isError;
    //   },

    //   transformResponse: (responseData) => {
    //     const loadedContracts = responseData?.data;
    //     console.log("object", responseData)

    //     return contractsAdapter.setAll(initialState, loadedContracts);
    //   },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "User", id: "LIST" },
            ...result.ids.map((id) => ({ type: "User", id })),
          ];
        } else return [{ type: "User", id: "LIST" }];
      },
    }),

    getContractById: builder.query({
      query: (id) => (
        {
          url: `/project/edit`,
          method: "GET",
          params: {
            id,
          },
        }
      ),
      transformResponse: (responseData) => {
        return responseData.data;
      },
      providesTags: (result, error, arg) => [{ type: "User", id: arg }],
    }),

    addNewUser: builder.mutation({
      query: (initialUserData) => ({
        url: "/contracts",
        method: "POST",
        body: {
          ...initialUserData,
        },
      }),
      invalidatesTags: [
        {
          type: "User",
          id: "LIST",
        },
      ],
    }),

    updateUser: builder.mutation({
      query: (initialUserData) => ({
        url: "/contracts",
        method: "PATCH",
        body: {
          ...initialUserData,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        {
          type: "User",
          id: arg.id,
        },
      ],
    }),

    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: "/contracts",
        method: "DELETE",
        body: {
          id,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        {
          type: "User",
          id: arg.id,
        },
      ],
    }),
  }),
});

export const {
  useGetContractsQuery,
  useGetContractByIdQuery,
  useAddNewUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = contractsSlice;

// Returns the query result object
export const selectContractsResult = contractsSlice.endpoints.getContracts.select();

// Creates memozied selector
const selectContractsData = createSelector(
  selectContractsResult,
  (ContractsResult) => ContractsResult.data // normalized state object with ids and entities
);

export default contractsSlice.reducer;


// getSelectors creates these selector and we rename them with aliases using destructuring
export const {
  selectAll: selectAllContracts,
  selectById: selectUserById,
  selectIds: selectUserIds,

  //   Pass in a selector that returns the Contracts slice of state
} = contractsAdapter.getSelectors(
  (state) => selectContractsData(state) ?? initialState
);