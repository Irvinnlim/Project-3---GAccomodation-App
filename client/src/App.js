import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage.js";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import Layout from "./Layout.js";
import AccountPage from "./pages/AccountPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
<<<<<<< Updated upstream
        <Route path="/account/:subpage?" element={<AccountPage />} />
      </Route>
=======
        <Route path="/account/:subpage/:action" element={<AccountPage />} />
      </Route> 
>>>>>>> Stashed changes
    </Routes>
  );
}

export default App;
