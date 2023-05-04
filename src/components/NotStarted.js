import React, { useEffect, useState } from "react";
import TableCard from "./TableCard";

function NotStarted({ allData }) {
  const [NotStartData, SetNotStartData] = useState([]);

  useEffect(() => {
    SetNotStartData(
      allData.filter((live) => {
        return live.fixture.status.short == "NS";
      })
    );
  }, [allData]);

  return (
    <>
      <h2>Upcoming Games</h2>
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
            {NotStartData.map((team) => {
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

export default NotStarted;
