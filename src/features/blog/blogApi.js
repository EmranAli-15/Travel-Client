import Swal from "sweetalert2";
import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        uploadBlog: builder.mutation({
            query: (data) => (
                {
                    url: '/uploadBlog',
                    method: 'POST',
                    body: data,
                }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                console.log(result.data.acknowledged);
                if (result.data.acknowledged === true) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'A blog uploaded',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }
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