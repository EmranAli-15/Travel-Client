import Swal from "sweetalert2";
import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
    tagType: ["Blogs", "PopularBlogs"],

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
                if (result.data.acknowledged === true) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'A blog uploaded',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            },
            invalidatesTags: ["Blogs", "PopularBlogs"]
        }),

        getBlogs: builder.query({
            query: () => '/getBlogs',
            providesTags: ["Blogs"]
        }),

        getSingleBlog: builder.query({
            query: (id) => `/getSingleBlog/${id}`,
            providesTags: ["Blogs"]
        }),

        popularBlogLink: builder.query({
            query: () => '/popularBlogLink',
            providesTags: ["PopularBlogs"]
        }),

        updateBlog: builder.mutation({
            query: (data) => ({
                url: "/updateBlog",
                method: "PATCH",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                if (result.data.acknowledged === true) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            },
            invalidatesTags: ["Blogs", "PopularBlogs"]
        }),

        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/deleteBlog/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                if (result.data.acknowledged === true) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Deleted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            },
            invalidatesTags: ["Blogs", "PopularBlogs"]
        })
    })
})

export const {
    useUploadBlogMutation,
    useGetBlogsQuery,
    useGetSingleBlogQuery,
    usePopularBlogLinkQuery,
    useDeleteBlogMutation,
    useUpdateBlogMutation,
} = blogApi;