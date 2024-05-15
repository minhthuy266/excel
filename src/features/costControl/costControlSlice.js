// write budget slice here

import { apiSlice } from "../../app/api/apiSlice";

const { createEntityAdapter, createSelector } = require("@reduxjs/toolkit");

const costControlAdapter = createEntityAdapter({});

const initialState = costControlAdapter.getInitialState();

export const costControlSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCostControls: builder.query({
      query: () => "cost/index",
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

    addNewProject: builder.mutation({
      query: (initialProjectData) => ({
        url: "/project/create",
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
  useGetCostControlsQuery,
  useGetProjectByIdQuery,
  useLazyGetProjectByIdQuery,
  useAddNewProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectQuery,
  useDeleteContractQuery,
  useGetContractListQuery,
} = costControlSlice;

// Returns the query result object
export const selectProjectsResult =
  costControlSlice.endpoints.getProjects.select();

// Creates memozied selector
const selectProjectsData = createSelector(
  selectProjectsResult,
  (ProjectsResult) => ProjectsResult.data // normalized state object with ids and entities
);

export default costControlSlice.reducer;

// getSelectors creates these selector and we rename them with aliases using destructuring
export const {
  selectAll: selectAllcostControl,
  selectById: selectUserById,
  selectIds: selectUserIds,

  //   Pass in a selector that returns the costControl slice of state
} = costControlAdapter.getSelectors(
  (state) => selectProjectsData(state) ?? initialState
);
