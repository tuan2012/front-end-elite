import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';


function App() {
  return (

    <div>
      <Routes>
     
        <Route path='/login' element={<Login />} />
      </Routes>
   
    </div>
  );
}

export default App;
