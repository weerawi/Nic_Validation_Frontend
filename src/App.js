import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import NicForm from "./Pages/NicForm";
import Summary from "./Pages/Summary";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import { useContext, useEffect } from "react";
import { NicContext } from "./Context/NicContext";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import AOS from "aos";
import "aos/dist/aos.css";
 

function App() {

  //AOS initializing
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });


  const { isSignedIn } = useContext(NicContext);


  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/home" element={isSignedIn ?<Home /> : <LoginPage/>} />
          <Route path="/nicform" element={isSignedIn ?<NicForm /> : <LoginPage/>}  />
          <Route path="/summary" element={isSignedIn ?<Summary /> : <LoginPage/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
