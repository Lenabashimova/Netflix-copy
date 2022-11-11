import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import {Home} from './pages/Home';
import {LogIn} from './pages/LogIn';
import {SignUp} from './pages/SignUp';
import {Account} from './pages/Account';
import {AuthContextProvider} from './context/Auth'
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/logIn' element={<LogIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/account' element={<PrivateRoute><Account/></PrivateRoute>}/>
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
