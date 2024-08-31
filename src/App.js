
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import OneboxContent from './components/Oneboxcontent/OneboxContent';
import Main from './components/Main/Main';
import { useThemeContext } from './components/Theme/Theme';
import AddEmail from './components/AddEmail/AddEmail';
import Campaign from './components/Campaign/Campaign';
import Charts from './components/Charts/Charts';

function App() {
  const { darktheme } = useThemeContext();
  return (
    <div className={`App ${darktheme}`}>
     <BrowserRouter
     >
      <Routes>
        <Route path='/' element={<Login/>}></Route>
       
        <Route path='/' element={<Layout />}>
         <Route path='google-login' element={<OneboxContent/>}/>
         <Route path='main' element={<Main/>}/>
         <Route path='addmail' element={<AddEmail/>}/>
         <Route path='campaign' element={<Campaign/>}/>
         <Route path='charts' element={<Charts/>}/>

          </Route>

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
