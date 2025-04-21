import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../../config/axiosConfig";

interface BlogPost {
  id: number;
  img: string;
  title: string;
  content: string;
  date: string;
  author?: string;
}

const Blogpage = () => {
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

  if (loading) return <div className="text-center py-10">Loading...</div>;
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

export default Blogpage;
