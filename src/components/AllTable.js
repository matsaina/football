import React from 'react'
import TableCard from "./TableCard";

function AllTable({allData}) {

console.log('reaches');


  return (
    <>
    <h2>All Games</h2>
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
          {allData.map((team) => {
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
  )
}

export default AllTable