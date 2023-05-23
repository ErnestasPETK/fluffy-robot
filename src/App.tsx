import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import FallbackError from "./pages/FallbackError.tsx";
import Home from "./pages/Home.tsx";
import Signup from "./pages/Signup.tsx";
import { useContext, useState } from 'react';
import { GlobalContext } from "./context/GlobalContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: (
      <FallbackError
        error={{
          message: "Page not found",
        }}
      />
    ),
  },
]);

function App() {
  const context = useContext(GlobalContext);
  const { theme: defaultTheme } = context;
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <GlobalContext.Provider value={{ ...context, theme: theme, setTheme: setTheme }} >

        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </ErrorBoundary >
  );
}

export default App;
