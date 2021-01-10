import "./App.css";
import Header from "./components/landing/Header";
import Body from "./components/landing/Body";
import Footer from "./components/landing/Footer";
import Login from "./components/authentication/login/Login";
import ForgotPassword from "./components/authentication/forgotPassword/ForgotPassword";
import RegisterMain from "./components/authentication/register/RegisterMain";
import Success from "./components/authentication/success/Success";
import Confirmation from "./components/authentication/success/Confirmation";
import NewPassword from "./components/authentication/newPassword/NewPassword";
import Error404 from "./components/authentication/error404/Error404";
import YourProfileMain from "./components/landlord/profile/YourProfileMain";
import WhatDoYouWant from "./components/landlord/whatDoYouwant/WhatDoYouWant";
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        {" "}
        <WhatDoYouWant />
        {/* <YourProfileMain /> */}
        {/* <Login /> */}
        {/* <ForgotPassword /> */}
        {/* <Error404 /> */}
        {/* <NewPassword /> */}
        {/* <Confirmation /> */}
        {/* <Success /> */}
        {/* <RegisterMain /> */}
        {/* <Header />
        <Body />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
