
// react router
import { createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";

// layout
import RootLayout from "./layout/RootLayout";

// pages
import Home from "../pages/Home";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} ></Route>
    </Route>
))