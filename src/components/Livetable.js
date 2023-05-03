import React, { useEffect, useState } from "react";
import TableCard from "./TableCard";

function LiveTable({ allData }) {
  const [liveData, SetLiveData] = useState([]);

  useEffect(() => {
    SetLiveData(
      allData.filter((live) => {
        return (
          live.fixture.status.short == "2H" ||
          live.fixture.status.short == "1H" ||
          live.fixture.status.short == "HF"
        );
      })
    );
  }, [allData]);
  

  return (
    <>
      <h2>Live Games</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th style={{ textAlign: "center" }}>Home</th>
              <th>Scores</th>
              <th style={{ textAlign: "center" }}>Away</th>
              <th>Time</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {liveData.map((team) => {
              return (
                <>
                  <TableCard team={team} />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default LiveTable;
