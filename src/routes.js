import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.js";
import Watch from "./pages/Watch/index.js"
import PageNotFound from './pages/PageNotFound/index';
import Entrada from "./pages/Entrada/index.js";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Entrada /> }></Route>
                <Route path="/Home" element={ <Home /> }></Route>
                <Route path="/watch/:id" element={ <Watch /> }></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
