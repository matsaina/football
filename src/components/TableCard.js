import React from "react";
import { NavLink } from "react-router-dom";

function TableCard({ team }) {
    const date = new Date(team.fixture.timestamp * 1000);
    const kenyaTime = date.toLocaleTimeString([], { timeZone: 'Africa/Nairobi' });
    
  let homegoals = team.goals.home;

  if (homegoals == null) {
    homegoals = 0;
  }

  let awaygoals = team.goals.away;

  if (awaygoals == null) {
    awaygoals = 0;
  }
  return (
    <>
      <tr key={team.fixture.id}>
        <td>{team.fixture.id}</td>
        <td style={{ textAlign: "center" }}>
          <img style={{ width: "50px" }} src={team.teams.home.logo} alt="H" />{" "}
          {team.teams.home.name}
        </td>
        <td>
          {homegoals}-{awaygoals}
        </td>
        <td style={{ textAlign: "center" }}>
          <img style={{ width: "50px" }} src={team.teams.away.logo} alt="A" />{" "}
          {team.teams.away.name}
        </td>
        <td>{kenyaTime}</td>
        <td>{team.fixture.status.long}</td>
        <td>
          <NavLink className="btn btn-sm btn-info" to={`/game/${team.fixture.id}` }>View</NavLink>{" "}
        </td>
      </tr>
    </>
  );
}

export default TableCard;
