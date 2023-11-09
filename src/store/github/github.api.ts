import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ServerResponce, IUser } from "../../models";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: "search/users",
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (responce: ServerResponce<IUser>) => responce.items,
    }),
  }),
});

export const { useSearchUsersQuery } = githubApi;
