import "./App.css";
import { WelcomePage, MonCompte, AreYouALawyer, Error } from "./pages";
import Messenger from "./pages/messenger/Messenger.jsx";
import { Navigate, BrowserRouter, Routes, Route, Link } from "react-router-dom";

//This need a refactor later
import Register from "./pages/UserRegister";
import UserRegister from "./pages/UserRegister";
import Chat from "./pages/Chat";

import SearchResult from "./pages/SearchResult";

import UserHome from "./pages/UserHome";

import FormRdv from "./pages/FormRdv";
import ConfirmerRdv from "./pages/ConfirmerRdv";
import MesRdv from "./pages/MesRdv";
import MesRdvPass from "./pages/MesRdvPass";
import Profil from "./pages/Profil";
import MyProfile from "./pages/MyProfile";

import LawyerRegister from "./pages/LawyerRegister";
import AvocatHome from "./pages/AvocatHome";
import UserProfile from "./pages/UserProfile";
import UpdateAvocat from "./pages/UpdateAvocat";
import FetchTime from "./pages/FetchTime";
import Calendar from "./pages/Calendar.js";
import AvailabilitySlots from "./pages/AvailabilitySlots";
import Requests from "./pages/AdminPanel/Requests";
import RequestDetails from "./pages/AdminPanel/RequestDetails";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/profile/:visitedUser" element={user?<Profil/>:<Navigate replace to ="/moncompte"/>} />
        <Route path="/profile" element={user?<MyProfile/>:<Navigate replace to ="/moncompte"/>} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/requestDetails/:requestId" element={<RequestDetails />} />
        <Route path="/appointements" element={user?<MesRdv/>:<Navigate replace to ="/moncompte"/>} />
        <Route
          path="/book-appointment/:selectedAvocat/:appointmentId/:date/:startTime/:endTime"
          element={<FormRdv />}
        />
        <Route path="/passed-appointements" element={user?<MesRdvPass/>:<Navigate replace to ="/moncompte"/>} />
        <Route path="/appointment-confirmation" element={user?<ConfirmerRdv/>:<Navigate replace to ="/moncompte"/>} />
        <Route path="/moncompte" element={!user?<MonCompte/>:<Navigate replace to ="/"/>} />
        <Route path="/registeruser" element={!user?<UserRegister/>:<Navigate replace to ="/moncompte"/>} />
        <Route path="/registeravocat" element={!user?<LawyerRegister/>:<Navigate replace to ="/moncompte"/>} />
        <Route path="/searchresult" element={<SearchResult />} />
        <Route
          path="/messenger/:currentUser/:currentFriend"
          element={user?<Messenger/>:<Navigate replace to ="/moncompte"/>}
        />
        <Route path="/messenger" element={user?<Messenger/>:<Navigate replace to ="/moncompte"/>} />
        <Route path="/year/:year/month/:month" element={<Calendar />} />
        <Route path="/calender" element={(user && user?.role=="avocat") ?<Calendar/>:<Navigate replace to ="/"/>} />
        <Route path="*" element={<Error />} />
      </Routes>{" "}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
