import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axiosConfig";
// import toast from "react-hot-toast";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  img: string;
  author: string;
  date: string;
  category: string;
  readTime?: string;
}

const AllBlog = () => {
  const [allBlog, setAllBlog] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getAllBlog = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/getBlogs");
      setAllBlog(response.data);
    } catch (error) {
      // toast.error("Failed to fetch blogs. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlog();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#060220]"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen text-gray-50 p-6 overflow-y-auto">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[#060220]">
          Latest Insights
        </h1>
        <p className="text-gray-400 text-lg">
          Stay updated with the latest trends, analysis, and insights in the
          industry
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBlog.length > 0 ? (
          allBlog.map((blog) => (
            <article
              key={blog.id}
              className="bg-[#060220] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.img || "/api/placeholder/400/300"}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-[#fd7904] text-gray-50 px-3 py-1 rounded-full text-sm font-medium">
                  {blog.category}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 hover:text-[#fd7904] transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {blog.content}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      {blog.author?.charAt(0)}
                    </div>
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>{blog.date}</span>
                    {blog.readTime && (
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {blog.readTime}
                      </span>
                    )}
                  </div>
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  className="mt-4 inline-block bg-[#fd7904] text-white py-2 px-4 rounded-lg font-semibold transition-transform transform hover:scale-105"
                >
                  Read More
                </button>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <svg
              className="w-16 h-16 mx-auto text-gray-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <p className="text-gray-400 text-lg">
              No blog posts found. Check back later for updates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlog;
