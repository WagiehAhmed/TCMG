import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "./useStore";
import { serverUrl } from "../util/serverURL";

export const useBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [blog, setBlog] = useState();
  const [foundedBlogs, setFoundedBlogs] = useState();

  //navigation
  const navigate = useNavigate();

  const { storeDispatch } = useStore();
  //get all blogs
  const getBlogs = async () => {
    try {
      // set loading with true
      setLoading(true);
      //fetch request to server with the user data
      const response = await fetch(`${serverUrl}/api/blogs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      if (!response.ok) {
        setLoading(false);
        throw Error(json.message);
      }

      if (response.ok) {
        storeDispatch({ type: "SET_BLOGS", payload: json.blogs });
      }

      // reset loading with false
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };
  //get blog
  const getBlog = async (id) => {
    try {
      // set loading with true
      setLoading(true);
      //fetch request to server with the user data
      const response = await fetch(`${serverUrl}/api/blogs/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      if (!response.ok) {
        setLoading(false);
        throw Error(json.message);
      }

      if (response.ok) {
        setBlog(json.blog);
      }

      // reset loading with false
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };
  //get blog
  const search = async (keyword) => {
    try {
      // set loading with true
      setLoading(true);
      //fetch request to server with the user data
      const response = await fetch(`${serverUrl}/api/blogs/search/${keyword}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      if (!response.ok) {
        setLoading(false);
        throw Error(json.message);
      }

      if (response.ok) {
        setFoundedBlogs(json.blogs);
      }

      // reset loading with false
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  //add blog
  const addBlog = async (blogData) => {
    try {
      // set loading with true
      setLoading(true);
      blogData = JSON.stringify(blogData);
      const response = await fetch(`${serverUrl}/api/blogs`, {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },

        body: blogData,
      });
      const json = await response.json();
      if (!response.ok) {
        setLoading(false);
        throw Error(json.message);
      }
      if (response.ok) {
        storeDispatch({ type: "ADD_BLOG", payload: json.blog });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  //delete blog
  const deleteBlog = async (id) => {
    try {
      // set loading with true
      setLoading(true);

      const response = await fetch(`${serverUrl}/api/blogs/${id}`, {
        method: "DELETE",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });
      const json = await response.json();
      if (!response.ok) {
        setLoading(false);
        throw Error(json.message);
      }
      if (response.ok) {
        storeDispatch({ type: "DELETE_BLOG", payload: json.blogId });
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  //update blog
  const updateBlog = async (id, blogData) => {
    try {
      // set loading with true
      setLoading(true);
      const response = await fetch(`${serverUrl}/api/blogs/${id}`, {
        method: "PUT",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: blogData,
      });

      const json = await response.json();
      if (!response.ok) {
        setLoading(false);
        throw Error(json.message);
      }
      if (response.ok) {
        storeDispatch({ type: "DELETE_BLOG", payload: id });
        storeDispatch({ type: "ADD_BLOG", payload: json.updatedBlog });
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    getBlogs,
    addBlog,
    deleteBlog,
    updateBlog,
    getBlog,
    search,
    foundedBlogs,
    blog,
    loading,
    error,
  };
};
