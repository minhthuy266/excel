// write budget slice here

import { apiSlice } from "../../app/api/apiSlice";

const { createEntityAdapter, createSelector } = require("@reduxjs/toolkit");

const budgetsAdapter = createEntityAdapter({});

const initialState = budgetsAdapter.getInitialState();

export const budgetsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBudgets: builder.query({
      query: () => "budget/index",
      transformResponse: (response) => {
        console.log("response", response.data);
        return response.data;
      },
      providesTags: (result, error, arg) => {
        return [{ type: "Project", id: "LIST" }];
      },
    }),

    getProjectById: builder.query({
      query: (id) => ({
        url: `/project/edit`,
        method: "GET",
        params: {
          id,
        },
      }),
      transformResponse: (responseData) => {
        return responseData.data;
      },
      providesTags: (result, error, arg) => [{ type: "Project", id: arg }],
    }),

    addNewBudget: builder.mutation({
      query: (initialProjectData) => ({
        url: "/budget/create",
        method: "POST",
        body: {
          ...initialProjectData,
        },
      }),
      invalidatesTags: [
        {
          type: "Project",
          id: "LIST",
        },
      ],
    }),

    updateProject: builder.mutation({
      query: (initialProjectData) => ({
        url: "/project/update",
        method: "POST",
        body: {
          ...initialProjectData,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        {
          type: "Project",
          id: arg.id,
        },
        {
          type: "Project",
          id: "LIST",
        },
      ],
    }),

    deleteProject: builder.query({
      query: (id) => ({
        url: "project/delete",
        method: "GET",
        params: {
          id,
        },
      }),
      // invalidatesTags: (result, error, arg) => [
      //   {
      //     type: "Project",
      //     id: arg.id,
      //   },
      // ],
    }),

    getContractList: builder.query({
      query: (project_id) => ({
        url: "/contract/index",
        method: "GET",
        params: {
          project_id,
        },
      }),
      // providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.map(({ id }) => ({ type: "Contracts", id })),
      //         { type: "Contracts", id: "LIST" },
      //       ]
      //     : [{ type: "Contracts", id: "LIST" }],
    }),

    deleteContract: builder.query({
      query: (id) => ({
        url: "contract/delete",
        method: "GET",
        params: {
          id,
        },
      }),
      // invalidatesTags: (result, error, arg) => [
      //   {
      //     type: "Project",
      //     id: arg.id,
      //   },
      // ],
    }),
  }),
});

export const {
  useGetBudgetsQuery,
  useGetProjectByIdQuery,
  useLazyGetProjectByIdQuery,
  useAddNewBudgetMutation,
  useUpdateProjectMutation,
  useDeleteProjectQuery,
  useDeleteContractQuery,
  useGetContractListQuery,
} = budgetsSlice;

// Returns the query result object
export const selectProjectsResult =
  budgetsSlice.endpoints.getProjects.select();

// Creates memozied selector
const selectProjectsData = createSelector(
  selectProjectsResult,
  (ProjectsResult) => ProjectsResult.data // normalized state object with ids and entities
);

export default budgetsSlice.reducer;

// getSelectors creates these selector and we rename them with aliases using destructuring
export const {
  selectAll: selectAllbudgets,
  selectById: selectUserById,
  selectIds: selectUserIds,

  //   Pass in a selector that returns the budgets slice of state
} = budgetsAdapter.getSelectors(
  (state) => selectProjectsData(state) ?? initialState
);
