/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../../config/axiosConfig";

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  author?: string;
  createdAt: string;
  readTime?: string;
  img?: string;
}

const PostList = () => {
  const [Bloglist, setBloglist] = useState<BlogPost[]>([]);

  const token = localStorage.getItem("adminToken");
  console.log(token);

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const getAllBlog = async () => {
    const toastloadingId = toast.loading("Please wait....");
    try {
      const response = await axios.get("/getBlogs");
      setBloglist(response.data);
    } catch (error: any) {
      console.log(error);
      toast.error("Failed to fetch blog posts");
    } finally {
      toast.dismiss(toastloadingId);
    }
  };

  const deleteBlog = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this blog post?"))
      return;
    const toastloadingId = toast.loading("Deleting blog post...");
    try {
      await axios.delete(`/deleteBlog/${id}`, { headers });
      setBloglist(Bloglist.filter((post) => post.id !== id));
      toast.success("Blog post deleted successfully");
    } catch (error: any) {
      console.log(error);
      toast.error("Failed to delete blog post");
    } finally {
      toast.dismiss(toastloadingId);
    }
  };

  useEffect(() => {
    getAllBlog();
  }, []);

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateString));
  };

  return (
    <div className="h-screen overflow-y-scroll w-full p-6 ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Latest Blog Posts</h2>
        <Link
          to="/dash/postblog"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
        >
          Create Post
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Bloglist.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden group"
          >
            <div className="relative">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.summary}</p>
              <div className="flex items-center text-sm text-gray-500 gap-4">
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{formatDate(post.createdAt)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <Link
                  to={`/dash/post/${post.id}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read More
                </Link>
                <button
                  className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
                  onClick={() => deleteBlog(post.id)}
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
