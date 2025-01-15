import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import UserFrontPage from './components/homepage/UserFrontPage';
import AdminFrontPage from './components/homepage/AdminFrontPage';
import Login from './components/login/login';
import Register from './components/register/register';
import './App.css';
import AdminAccount from './components/register/AdminAccount';
import UserHomePage from './components/login/userHomePage';
import AboutUs from './components/login/aboutUs';
import CrimeInfo from './components/login/CrimeInfo';
import ContactUs from './components/login/ContactUs';
import AdminHomePage from './components/register/adminHomePage';
import AdminAboutUs from './components/register/AdminAboutUs';
import AdminCrimeInfo from './components/register/AdminCrimeInfo';
import AdminContact from './components/register/AdminContact';
import AdminUpdateRecords from './components/register/AdminUpdateRecords';
import CityDetail from './components/login/CityDetail';
import CitySafe from './components/login/CitySafe';
import AdminCityDetail from './components/register/AdminCityDetail';
import AdminCitySafe from './components/register/AdminCitySafe';
import CrimeDistribution from './components/login/CrimeDistribution';
import HelplineFIR from './components/login/HelplineFIR';
import AdminCrimeDistribution from './components/register/AdminCrimeDistribution';
import AdminHelplineFIR from './components/register/AdminHelplineFIR';


function App() {
  return (
    <Router>
    <div className='App' >
      
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/adminAccount' element={<AdminAccount/>}></Route>
        <Route path='/UserFrontPage' element={<UserFrontPage/>}></Route>
        <Route path='/AdminFrontPage' element={<AdminFrontPage/>}></Route>
        <Route path='/userHomePage' element={<UserHomePage/>}></Route>
        <Route path='/aboutUs' element={<AboutUs/>}></Route> 
        <Route path='/CrimeInfo' element={<CrimeInfo/>}></Route> 
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
        <Route path='/adminHomePage' element={<AdminHomePage/>}></Route>
        <Route path='/AdminAboutUs' element={<AdminAboutUs/>}></Route> 
        <Route path='/AdminCrimeInfo' element={<AdminCrimeInfo/>}></Route> 
        <Route path='/AdminContact' element={<AdminContact/>}></Route> 
        <Route path='/AdminUpdateRecords' element={<AdminUpdateRecords/>}></Route> 
        <Route path='/CitySafe' element={<CitySafe/>}></Route> 
        <Route path='/CityDetail' element={<CityDetail/>}></Route> 
        <Route path='/AdminCitySafe' element={<AdminCitySafe/>}></Route> 
        <Route path='/AdminCityDetail' element={<AdminCityDetail/>}></Route> 
        <Route path='/CrimeDistribution' element={<CrimeDistribution/>}></Route> 
        <Route path='/HelplineFIR' element={<HelplineFIR/>}></Route>
        <Route path='/AdminCrimeDistribution' element={<AdminCrimeDistribution/>}></Route> 
        <Route path='/AdminHelplineFIR' element={<AdminHelplineFIR/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;