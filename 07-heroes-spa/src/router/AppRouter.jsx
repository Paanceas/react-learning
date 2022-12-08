import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRouter } from "../heroes/routes/PrivateRouter";
import { PublicRoutes } from "../heroes/routes/PublicRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRoutes />
            </PrivateRouter>
          }
        ></Route>
      </Routes>
    </>
  );
};
