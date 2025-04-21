import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";

import Layout from "../layout/Homelayout";
import ContactUs from "../components/home/contactus";
import Login from "../admin/auth/login";
import Register from "../admin/auth/register";
import DashboardLayout from "../layout/dashboardlay";
import Postblog from "../admin/dashboard/PostBlog";
import PostList from "../admin/dashboard/Postlist";

import Blogpage from "../components/home/Blogpage";
import AllBlog from "../components/home/AllBlog";
import CreateAdmin from "../admin/dashboard/createAdmin";
import Post from "../admin/dashboard/post";
import AboutUs from "../components/home/AboutUs";

import WhyUs from "../page/About/whyus";
import JoinTeam from "../page/About/jointeam";

import BookConsultation from "../components/home/book";
import PhysicalSecurity from "../page/services/physical";
import DigitalSecurity from "../page/services/digital";
import Identity from "../page/services/identity";
import SecurityEd from "../page/services/securityed";
import Cybersecurity from "../page/services/cybersecurity";
import SecureRisk from "../page/services/securerisk";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },

      {
        path: "blog/:id",
        element: <Blogpage />,
      },
      {
        path: "allblog",
        element: <AllBlog />,
      },
      {
        path: "our-story",
        element: <AboutUs />,
      },
      {
        path: "why-us",
        element: <WhyUs />,
      },
      {
        path: "join",
        element: <JoinTeam />,
      },
      {
        path: "book",
        element: <BookConsultation />,
      },
      {
        path: "physical-security",
        element: <PhysicalSecurity />,
      },
      {
        path: "digital-security",
        element: <DigitalSecurity />,
      },
      {
        path: "identity",
        element: <Identity />,
      },
      {
        path: "security-education",
        element: <SecurityEd />,
      },
      {
        path: "cybersecurity",
        element: <Cybersecurity />,
      },
      {
        path: "security-risk",
        element: <SecureRisk />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "reg",
    element: <Register />,
  },
  {
    path: "dash",
    element: <DashboardLayout />,
    children: [
      {
        path: "postblog",
        element: <Postblog />,
      },
      {
        path: "allpost",
        element: <PostList />,
      },
      {
        path: "createadmin",
        element: <CreateAdmin />,
      },
      {
        path: "post/:id",
        element: <Post />,
      },
    ],
  },
]);
