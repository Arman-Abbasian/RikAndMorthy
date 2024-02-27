import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Characters from "./pages/Characters";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import CharacterDetail from "./pages/CharacterDetail";
import Episodes from "./pages/Episodes";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="episodes" element={<Episodes />} />
            <Route path="characters" element={<Characters />} />
            <Route path="characters/:id" element={<CharacterDetail />} />
            <Route path="about_me" element={<AboutMe />} />
          </Route>
        </Routes>
        <Toaster
          toastOptions={{
            style: {
              backgroundColor: "var(--color-dark-primary)",
              color: "var(--color-text)",
              fontSize: "14px",
            },
          }}
        />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
