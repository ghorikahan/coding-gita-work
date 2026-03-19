import LandingPage from "./components/LandingPage.jsx";
import AllServices from './components/AllServices.jsx';
import UserForm from './components/UserForm.jsx';
import Tools_and_Technologies from "./components/Tools_and_Technologies.jsx";

function App() {
  return (
    <>
      {/* <div> */}
        <LandingPage />
        {/* <Test/> */}
        <AllServices />
        <Tools_and_Technologies/>
        <UserForm/>

      {/* </div> */}
    </>
  );
}

export default App;
