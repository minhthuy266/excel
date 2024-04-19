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
            { type: "Contract", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Contract", id })),
          ];
        } else return [{ type: "Contract", id: "LIST" }];
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

    deleteContract: builder.query({
      query: ( id ) => ({
        url: "project/delete",
        method: "GET",
        params: {
          id,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        {
          type: "Contract",
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
useDeleteContractQuery,
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