import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import NotFoundPage from "../Pages/NotFoundPage";
import Registration from "../Pages/Registration";
import DetailsTask from "../Pages/DetailsTask";
import CreateTask from "../Pages/CreateTask";


const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <Registration />, id: 1 },
    { link: "/home/:name", element: <HomePage />, id: 2 },
    { link: "/home/:name/details/:id", element: <DetailsTask/>, id: 3 },
    { link: "/home/:name/create", element: <CreateTask />, id: 4 },
    { link: "/", element: <NotFoundPage />, id: 5 },
  ];

  return <>
    <Routes>
        {PUBLIC_ROUTES.map(item => (
            <Route path={item.link} element={item.element} key={item.id} />   
        ))}
    </Routes>
  </>;
};

export default MainRoutes;
