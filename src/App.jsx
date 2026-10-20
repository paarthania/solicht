import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { routes } from "./routes";

const Page = ({ title, Component }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <Component />;
};

const App = () => (
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
);

export default App;
