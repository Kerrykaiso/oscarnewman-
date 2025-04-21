import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../config/axiosConfig";
import toast from "react-hot-toast";

type BlogPost = {
  img: string;
  title: string;
  date: string;
  content: string;
};

const Post = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogById = async () => {
      try {
        const response = await axios.get(`/getBlog/${id}`);

        setBlog(response.data);
      } catch (error) {
        toast.error("Failed to load blog post.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) getBlogById();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }
  if (!blog) return <div className="text-center py-10">Blog not found.</div>;
  return (
    <section className="max-w-4xl mx-auto mt-6 bg-white  rounded-lg h-screen">
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
      <p className="text-gray-600 text-sm mt-2">Published on {blog.date}</p>
      <p className="text-lg text-gray-800 mt-4">{blog.content}</p>
    </section>
  );
};

export default Post;
