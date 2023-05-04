import React, { useEffect, useState } from "react";
import TableCard from "./TableCard";

function FinishedMatches({ allData }) {
  const [FinishedData, SetFinishedData] = useState([]);

  useEffect(() => {
    SetFinishedData(
      allData.filter((live) => {
        return live.fixture.status.short == "FT";
      })
    );
  }, [allData]);

  return (
    <>
      <h2>Finished Games</h2>
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
            {FinishedData.map((team) => {
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

export default FinishedMatches;
