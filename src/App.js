import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import NicForm from "./Pages/NicForm";
import Summary from "./Pages/Summary";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";

 

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/nicform" element={<NicForm />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
