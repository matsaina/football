import React from "react";
import { useParams } from "react-router-dom";

function MatchDetails({ allData }) {
  const { id } = useParams();

  const match = allData.filter((item) => item.fixture.id == id);

  const { fixture, league, teams, goals, score } = match[0];

  const date = new Date(fixture.timestamp * 1000); 
  const kenyaDateTime = date.toLocaleString(); 

  let homegoals = goals.home;

  if (homegoals == null) {
    homegoals = 0;
  }

  let awaygoals = goals.away;

  if (awaygoals == null) {
    awaygoals = 0;
  }

  let code;
  if (code == null) {
    code = fixture.status.short;
  } else {
    code = `${fixture.status.elapsed} Mins`;
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <h2>{league.name}</h2>
          <p>{kenyaDateTime}</p>
          <h2 className="text-center">{fixture.status.long}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <img src={teams.home.logo} alt={teams.home.name} />
          <h4>{teams.home.name}</h4>
        </div>
        <div className="col-2 text-center">
          <h4>
            {homegoals} - {homegoals}
            <p>{code}</p>
          </h4>
          <p>
            {score.fulltime.home} - {score.fulltime.away}
          </p>
        </div>
        <div className="col-5 text-right">
          <img src={teams.away.logo} alt={teams.away.name} />
          <h4>{teams.away.name}</h4>
        </div>
      </div>
    </div>
  );
}

export default MatchDetails;
