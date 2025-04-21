import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-60 h-screen bg-gray-900 text-gray-300 ">
      <div className="w-full h-[10%] flex justify-center items-center ">
        <h2 className="text-xl font-bold text-white">Blog Admin</h2>
      </div>

      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-200"
            >
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dash/allpost"
              className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-200"
            >
              <span>My Posts</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dash/postblog"
              className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-200"
            >
              <span>Create Post</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dash/createAdmin"
              className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-200"
            >
              <span>Create Admin</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
