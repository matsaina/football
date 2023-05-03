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
  const [allData, SetAllData] = useState(footballdata);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  // Public API Allows on 100 requests per day uncomment only when you want to request data

  // useEffect(() => {
  //     fetch(`https://v3.football.api-sports.io/fixtures?date=${formattedDate}`, {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-host": "v3.football.api-sports.io",
  //         "x-rapidapi-key": "644f87f436e0173c10c96fb8fdc49308",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((objects) => {
  //         SetAllData(objects.response);
  //       });
  // }, [formattedDate]);

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
