import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.js";
import Watch from "./pages/Watch/index.js"
import PageNotFound from './pages/PageNotFound/index';


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/watch/:id" element={ <Watch /> }></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
