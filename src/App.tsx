import "./App.css";
// import { router } from "@lib/routes/routes";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { router } from "./lib/routes/route";
import { Post } from "./lib/types/post-type";
import { addPost } from "./lib/services/post-service";

function App() {
  return (
    <BrowserRouter>
      <div className="font-restart">
        {/* <AuthContextProvider> */}
        <RouterComponent />
        {/* </AuthContextProvider> */}
      </div>
    </BrowserRouter>
  );
}

async function RouterComponent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      {router.map((route: any, index: number) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
}

export default App;
