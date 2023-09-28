import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Layout>{useRoutes(routes)}</Layout>
    </>
  );
}

export default App;
