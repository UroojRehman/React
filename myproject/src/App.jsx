import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { HomeComponent } from "./HomeComponent/HomeComponent";
import { Layout } from "./Layout";
import { AboutComponent } from "./AboutComponent";
import { UseStateHook } from "./Hooks/useStateHook";
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   Component: HomeComponent
  // },
  // {
  //   path:"/about",
  //   element:<h1>About Us</h1>
  // }
  {
    path:"/",
    Component: Layout,
    children:[
      {
        path: "/",
        Component: HomeComponent
      },
      {
        path:"/about",
        Component: AboutComponent
      },
      {
        path:"/usestate",
        Component: UseStateHook
      }

    ]
  }
]);

const App = () => {

  return  <RouterProvider router={router} />;
}
export default App;

