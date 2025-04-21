import { useState } from "react";
import { ImagePlus, Send, User, BookOpen, Tag } from "lucide-react";
import toast from "react-hot-toast";
import axios from "../../config/axiosConfig";

const Postblog = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    category: "",
    image: null as File | null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  console.log(isUploading);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const token = localStorage.getItem("adminToken");

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const categories = [
    "Technology",
    "Security",
    "Innovation",
    "Training",
    "Industry News",
    "Best Practices",
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadImage = async () => {
    if (!formData.image) {
      toast.error("Please select an image.");
      return null;
    }

    setIsUploading(true);
    const formDataImg = new FormData();
    formDataImg.append("image", formData.image);

    try {
      const response = await axios.post("/image-upload", formDataImg, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("🖼️ Image Upload Response:", response.data); // Debugging

      const uploadedUrl = response.data.mediaUrl; // ✅ Use mediaUrl instead of imageUrl
      if (!uploadedUrl) {
        toast.error("Image upload failed (invalid response).");
        return null;
      }

      toast.success("Image uploaded successfully!");
      return uploadedUrl;
    } catch (error) {
      toast.error("Failed to upload image.");
      console.error("🚨 Image Upload Error:", error);
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastloadingId = toast.loading("Publishing blog post...");

    try {
      // ✅ First, ensure image is uploaded
      const uploadedImageUrl = await handleUploadImage();

      if (!uploadedImageUrl) {
        toast.error("Image upload failed. Blog not posted.");
        return; // Stop execution if image upload fails
      }

      // ✅ Debugging
      console.log("✅ Final Image URL:", uploadedImageUrl);

      const blogData = {
        title: formData.title,
        author: formData.author,
        content: formData.content,
        category: formData.category,
        img: uploadedImageUrl, // Corrected reference
      };

      console.log("📤 Sending blog data:", blogData);

      // ✅ Send blog post request
      const response = await axios.post("/postBlogs", blogData, { headers });

      console.log("✅ Blog post response:", response.data);
      toast.success("Blog post published successfully!");

      // ✅ Reset form after submission
      setFormData({
        title: "",
        author: "",
        content: "",
        category: "",
        image: null,
      });
      setImagePreview(null);
    } catch (error) {
      toast.error("Failed to publish blog post.");
      console.error("🚨 Blog Post Error:", error);
    } finally {
      toast.dismiss(toastloadingId);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen w-full overflow-y-scroll p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <BookOpen className="mr-2" />
          Create a New Blog Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Post Title
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter post title..."
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          {/* Author Input */}
          <div>
            <label className="text-gray-700 font-semibold mb-2 flex items-center">
              <User className="mr-2" size={20} />
              Author
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter author name..."
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              required
            />
          </div>

          {/* Category Select */}
          <div>
            <label className="text-gray-700 font-semibold mb-2 flex items-center">
              <Tag className="mr-2" size={20} />
              Category
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              <ImagePlus className="mr-2" size={20} />
              Featured Image
            </label>
            <div className="mt-2">
              <div className="flex items-center justify-center w-full">
                <label className="relative flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="h-52 object-cover rounded-lg"
                      />
                    ) : (
                      <>
                        <ImagePlus className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Content Textarea */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Post Content
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg h-64 focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Write your post content here..."
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
            disabled={isSubmitting}
          >
            <Send className="w-5 h-5" />
            <span>{isSubmitting ? "Publishing..." : "Publish Post"}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Postblog;
