import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import EditorPage from "../Pages/EditorPage";
import ComunidadePage from "../Pages/ComunidadePage";
import NotFoundPage from "../Pages/NotFoundPage";

export const URLS = {
  EDITOR: "/editor",
  COMUNIDADE: "/comunidade",
};

function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={URLS.EDITOR} replace />} />
        <Route path={URLS.EDITOR} element={<EditorPage />} />
        <Route path={URLS.COMUNIDADE} element={<ComunidadePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRoutes;
