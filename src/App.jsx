import { useEffect, useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./styles/App.css";
import { routes } from "./routes";

const Page = ({ title, Component }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <Component />;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      window.scrollTo({ top: 0, behavior: "instant" });
      previousPathname.current = pathname;
    }
  }, [pathname]);

  return null;
};

const App = () => (
  <>
    <ScrollToTop />
    <Routes>
      {routes.map(({ path, title, Component }) => (
        <Route
          key={path}
          path={path}
          element={<Page title={title} Component={Component} />}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);

export default App;
