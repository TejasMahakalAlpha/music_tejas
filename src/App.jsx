import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css'; 

import DashboardLayout from "../src/components/DashboardLayout"; 

import Home from './pages/Home';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
// signup, login , reset password and forgot password change from signup and login page
import Signup_Login from './components/Signup_Login';
import UserProfile from './components/UserProfile';
import Logout from './components/Logout';
// Sidebar Create New Release 
import CreateNewPage from "./CreateNewPage/CreateNewPage"
import ReleasesPanel from './screen/ReleasesPanel';
import PramotionsPanel from './screen/PramotionsPanel';
import AnalyticsPanel from './screen/AnalyticsPanel';
import Guidlines from './CreateNewPage/Guidlines';
import AddArtistDetails from './CreateNewPage/AddArtistDetails';
import ReleaseDateDetails from './CreateNewPage/ReleaseDateDetails';
import SongDetails from './CreateNewPage/SongDetails';
import SelectPlatform from './CreateNewPage/SelectPlatform';
import ReleaseFlow from './CreateNewPage/ReleaseFlow';
import CreateTicket from './CreateTicket/CreateTicket'

// Sidebar My Music Business
// import MyMusicBusiness from './MyMusicBusiness/MyMusicBusiness';
import AllReleases from "../src/MyMusicBusiness/AllReleases";
import Labels from "../src/MyMusicBusiness/Labels";
import MyArtists from "../src/MyMusicBusiness/MyArtists";
// Analytics
import Analytics from "./Analytics/Analytics";
import TotalRevenue from './Analytics/TotalRevenue';
import ProductPerformanceBreakdown from './Analytics/ProductPerformanceBreakdown';
import MonthlyRevenueTrend from './Analytics/MonthlyRevenueTrend';
import FacebookAnalytics from './Analytics/FacebookAnalytics';
import SpotifyAnalytics from './Analytics/SpotifyAnalytics';
// Earnings
import MonthWiseEarnings from './Earnings/MonthWiseEarnings';
// AccountingAndFinance
import AccountingAndFinance from './AccountingAndFinance/EarningsPage';
import EarningsPage from './AccountingAndFinance/EarningsPage';
import EarningPaidToYou from './AccountingAndFinance/EarningPaidToYou';
import MyBanks from './AccountingAndFinance/MyBanks';
import PurchaseHistory from './AccountingAndFinance/PurchaseHistory';
// Promotions
import Promotions from "./Promotions/Promotions";
// YoutubeService
import YoutubeService from './YoutubeService/YoutubeService';
import ClaimHistroy from './YoutubeService/ClaimHistroy';
import RemoveYoutubeClaim from './YoutubeService/RemoveYoutubeClaim';


// HelpAndSupport
import HelpAndSupport from './HelpAndSupport/HelpAndSupport';
import HSCreateTicket from './HelpAndSupport/HSCreateTicket';
import FAQ from './HelpAndSupport/FAQ';

// CustomPurchase
import CustomPurchase from './CustomPurchase/CustomPurchase'
// CustomPayment
import CustomPayment from "./CustomPayment/CustomPayment";


// *************************************************************************************************
//they are checking user is login or not is user not log in then they redirect to login page
const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.user); 
  if (!token) {
    return <Navigate to="/Signup_Login" replace />;
  }
  return children;
};


//if uset log in then directly goes on dashboard homepage
const PublicRoute = ({ children }) => {
  const { token } = useSelector((state) => state.user);
  if (token) {
    return <Navigate to="/" replace />;
  }
  return children;
};
// *********************************


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path='/Signup_Login' element={<Signup_Login/>} /> */}

        {/*  this route only see ,when userr not login  */}
        <Route 
          path='/Signup_Login' 
          element={
            <PublicRoute>
              <Signup_Login />
            </PublicRoute>
          } 
        />
        
        {/* this route see only when your are login */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} /> 
          <Route path="userprofile" element={<UserProfile />} />
          <Route path='Logout' element={<Logout/>} />
          <Route path="CreateNewPage" element={<CreateNewPage />} />

          <Route path="Guidlines" element={<Guidlines/>} />
          <Route path="AddArtistDetails" element={<AddArtistDetails/>} />
          <Route path="ReleaseDateDetails" element={<ReleaseDateDetails/>} />
          <Route path="SongDetails" element={<SongDetails/>} />
          <Route path="SelectPlatform" element={<SelectPlatform/>} />
          <Route path="ReleaseFlow" element={<ReleaseFlow/>} />  

          <Route path="ReleasesPanel" element={<ReleasesPanel />} />
          <Route path="PramotionsPanel" element={<PramotionsPanel />} />
          <Route path="AnalyticsPanel" element={<AnalyticsPanel />} />

          {/* MyMusicBusiness */}
          {/* <Route path="MyMusicBusiness" element={<MyMusicBusiness/>} /> */}
          <Route path='AllReleases' element={<AllReleases/>}/>
          <Route path='Labels' element={< Labels/>}/>
          <Route path='MyArtists' element={<MyArtists/>}/>
 
          {/* Analytics */}
          <Route path='Analytics' element={<Analytics/>} />
          <Route path='TotalRevenue' element={<TotalRevenue/>} />
          <Route path='ProductPerformanceBreakdown' element={<ProductPerformanceBreakdown/>} />
          <Route path='MonthlyRevenueTrend' element={<MonthlyRevenueTrend/>} />
          <Route path= 'FacebookAnalytics' element={<FacebookAnalytics/>} />
          <Route path= 'SpotifyAnalytics' element={<SpotifyAnalytics/>} />

          {/* Earning */}
          <Route path="MonthWiseEarnings" element={<MonthWiseEarnings/>} />
          {/* CreateTicket */}
          <Route path="CreateTicket" element={<CreateTicket/>} />
          
          {/* AccountingAndFinance */}
          <Route path='AccountingAndFinance' element={<AccountingAndFinance/>}/> 
          <Route path='EarningsPage' element={<EarningsPage/>} />
          <Route path='EarningPaidToYou'  element={<EarningPaidToYou/>} />
          <Route path='MyBanks'  element={<MyBanks/>} />
          <Route path='PurchaseHistory'  element={<PurchaseHistory/>} />

          
          {/* Promotions */}
          <Route path='Promotions' element={<Promotions/>} />

          {/* YoutubeService */}
          <Route path="YoutubeService" element={<YoutubeService/>} />
          <Route path='ClaimHistroy' element={<ClaimHistroy/>}/>
          <Route path='RemoveYoutubeClaim' element={<RemoveYoutubeClaim/>} />


          {/* HelpAndSupport */} 
          <Route path="HelpAndSupport" element={<HelpAndSupport/>} />
          <Route path='HSCreateTicket' element={<HSCreateTicket/>} />
           <Route path='FAQ' element={<FAQ/>} />


          {/* CustomPurchase */}
          <Route path="CustomPurchase" element={<CustomPurchase/>} />
          {/* CustomPayment */}
          <Route path='CustomPayment' element={<CustomPayment/>}/>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;