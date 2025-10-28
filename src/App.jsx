import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css'; 

// FIX 1: Path ko ../src/ se ./ kar diya aur .jsx add kiya
import DashboardLayout from "./components/DashboardLayout.jsx"; 

// FIX 2: Sabhi components mein .jsx extension add kiya
import Home from './pages/Home.jsx';
import Signup_Login from './components/Signup_Login.jsx';
import UserProfile from './components/UserProfile.jsx';
import Logout from './components/Logout.jsx';

// Sidebar Create New Release 
import CreateNewPage from "./CreateNewPage/CreateNewPage.jsx";
import ReleasesPanel from './screen/ReleasesPanel.jsx';
import PramotionsPanel from './screen/PramotionsPanel.jsx';
import AnalyticsPanel from './screen/AnalyticsPanel.jsx';
import Guidlines from './CreateNewPage/Guidlines.jsx';
import AddArtistDetails from './CreateNewPage/AddArtistDetails.jsx';
import ReleaseDateDetails from './CreateNewPage/ReleaseDateDetails.jsx';
import SongDetails from './CreateNewPage/SongDetails.jsx';
import SelectPlatform from './CreateNewPage/SelectPlatform.jsx';
import ReleaseFlow from './CreateNewPage/ReleaseFlow.jsx';
import CreateTicket from './CreateTicket/CreateTicket.jsx';


// Sidebar My Music Business
import AllReleases from "./MyMusicBusiness/AllReleases.jsx";
import Labels from "./MyMusicBusiness/Labels.jsx";
import MyArtists from "./MyMusicBusiness/myArtists.jsx";

// Analytics
import Analytics from "./Analytics/Analytics.jsx";
import TotalRevenue from './Analytics/TotalRevenue.jsx';
import ProductPerformanceBreakdown from './Analytics/ProductPerformanceBreakdown.jsx';
import MonthlyRevenueTrend from './Analytics/MonthlyRevenueTrend.jsx';
import FacebookAnalytics from './Analytics/FacebookAnalytics.jsx';
import SpotifyAnalytics from './Analytics/SpotifyAnalytics.jsx';

// Earnings
import MonthWiseEarnings from './Earnings/MonthWiseEarnings.jsx';

// AccountingAndFinance
import AccountingAndFinance from './AccountingAndFinance/EarningsPage.jsx';
import EarningsPage from './AccountingAndFinance/EarningsPage.jsx';
import EarningPaidToYou from './AccountingAndFinance/EarningPaidToYou.jsx';
import MyBanks from './AccountingAndFinance/MyBanks.jsx';
import PurchaseHistory from './AccountingAndFinance/PurchaseHistory.jsx';

// Promotions
import Promotions from "./Promotions/Promotions.jsx";

// YoutubeService
import YoutubeService from './YoutubeService/YoutubeService.jsx';
import ClaimHistroy from './YoutubeService/ClaimHistroy.jsx';
import RemoveYoutubeClaim from './YoutubeService/RemoveYoutubeClaim.jsx';

// HelpAndSupport
import HelpAndSupport from './HelpAndSupport/HelpAndSupport.jsx';
import HSCreateTicket from './HelpAndSupport/HSCreateTicket.jsx';
import FAQ from './HelpAndSupport/FAQ.jsx';

// CustomPurchase
import CustomPurchase from './CustomPurchase/CustomPurchase.jsx';

// CustomPayment
import CustomPayment from "./CustomPayment/CustomPayment.jsx";


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

        {/* this route only see ,when userr not login  */}
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