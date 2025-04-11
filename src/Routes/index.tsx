import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import EditorPage from '../Pages/EditorPage';
import ComunidadePage from '../Pages/ComunidadePage';
import NotFoundPage from "../Pages/NotFoundPage";

function CustomRoutes() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/editor" replace />} />
                <Route path="/editor" element={<EditorPage />} /> 
                <Route path="/comunidade" element={<ComunidadePage />} /> 
                <Route path="*" element={<NotFoundPage />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default CustomRoutes;