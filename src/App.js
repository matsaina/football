import "bootstrap/dist/css/bootstrap.css";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import LiveTable from "./components/LiveTable";
import AllTable from "./components/AllTable";
import { Route, Routes } from "react-router-dom";
import footballdata from "./data";
import NotStarted from "./components/NotStarted";
import FinishedMatches from "./components/FinishedMatches";
import Profile from "./components/Profile";
import MatchDetails from "./components/MatchDetails";

function App() {
  return (
    <div>
      <NavBar />

      <div className="container-fluid">
        <div className="row">
          <SideBar />

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Football App - {formattedDate} </h1>
            </div>

            <Routes>
              <Route path="/" element={<AllTable allData={allData} />} />
              <Route path="/live" element={<LiveTable allData={allData} />} />
              <Route
                path="/tostart"
                element={<NotStarted allData={allData} />}
              />
              <Route
                path="/finished"
                element={<FinishedMatches allData={allData} />}
              />
              <Route path="/profile" element={<Profile />} />

              <Route path="/game/:id" element={<MatchDetails allData={allData} />} />

            </Routes>
          </main>
        </div>
              
      </div>
    </div>
  );
}

export default App;
