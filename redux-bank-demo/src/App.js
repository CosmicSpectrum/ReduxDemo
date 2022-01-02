import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import {Routes,Route, useNavigate } from "react-router-dom";
import Login from './components/Login/Login';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  const navigate = useNavigate()
  const users = useSelector((state) => state.users);

  useEffect(()=>{
    if(users){
      navigate('/accountPage');
    }else{
      navigate('/')
    }
  }, [users])

  return (
    <>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/accountPage" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
