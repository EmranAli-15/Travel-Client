import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        uploadBlog: builder.mutation({
            query: (data) => (
                {
                    url: '/uploadBlog',
                    method: 'POST',
                    body: data,
                })
        }),

        getBlogs: builder.query({
            query: () => '/getBlogs'
        }),

        getSingleBlog: builder.query({
            query: (id) => `/getSingleBlog/${id}`
        }),

        popularBlogLink: builder.query({
            query: () => '/popularBlogLink'
        })
    })
})

export const { useUploadBlogMutation, useGetBlogsQuery, useGetSingleBlogQuery, usePopularBlogLinkQuery } = blogApi;