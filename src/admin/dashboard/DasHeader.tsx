import { useNavigate } from "react-router-dom";

const DasHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from storage
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="bg-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-lg font-semibold">Blog Platform</h1>
      <button
        onClick={handleLogout}
        className="text-white font-medium py-2 px-12 bg-red-400 rounded-lg hover:bg-red-500 transition"
      >
        Logout
      </button>
    </header>
  );
};

export default DasHeader;
