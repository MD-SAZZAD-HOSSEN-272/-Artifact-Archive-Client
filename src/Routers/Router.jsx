import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AllArtifacts from "../Pages/AllArtifacts";
import ArtifactDetails from "../Pages/ArtifactDetails";
import AddArtifact from "../Pages/AddArtifact";
import MyAddedArtifact from "../Pages/MyAddedArtifact";
import MyLikePage from "../Pages/MyLikePage";
import ErrorLayout from "../Layouts/ErrorLayout";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'all-artifacts',
                Component: AllArtifacts
            },
            {
                path: 'artifact-details/:id',
                element: <PrivetRoute><ArtifactDetails></ArtifactDetails></PrivetRoute>
            },
            {
                path: '/add-artifact',
                element: <PrivetRoute><AddArtifact></AddArtifact></PrivetRoute>
            },
            {
                path: '/artifact-by-email',
                element: <PrivetRoute><MyAddedArtifact></MyAddedArtifact></PrivetRoute>
            },
            {
                path: '/likes',
                element: <PrivetRoute><MyLikePage></MyLikePage></PrivetRoute>
            }
        ]
    },
    {
        path: '*',
        Component: ErrorLayout
    }
])