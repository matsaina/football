import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MatchDetails({ allData }) {
  const { id } = useParams();

  const match = allData.filter((item) => item.fixture.id == id);

  const { fixture, league, teams, goals, score } = match[0];

  const date = new Date(fixture.timestamp * 1000); // Note: JavaScript uses milliseconds, so multiply by 1000
  const kenyaDateTime = date.toLocaleString(); // Returns a string in the default format for the user's locale

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


//comments rest apis starts here code 
const gameid = id;
const [data, setData] = useState([]);
const [comments, setComments] = useState([]);
const [newComment, setNewComment] = useState("");


// Fetch comments for the game with the given `gameid`

useEffect(() => {
  fetch(`http://localhost:4000/games?gameid=${gameid}`)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      const game = data.find((game) => game.gameid === gameid);
      setComments(game.comments);
    })
    .catch((error) => console.error(error));
}, [gameid]);

// Add a new comment
const addComment = () => {
  if (data.length === 0) {
//post new here
const timestamp = new Date().toISOString();
const comment = {
  id: 1,
  user: "Anonymous",
  comment: newComment,
  timestamp,
};

const newData = {
  gameid: gameid,
  comments: [comment],
}

fetch(`http://localhost:4000/games`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newData),
})
  .then((response) => response.json())
  .then((data) => {
    setData([data]);
    setComments(data.comments);
  })
  .catch((error) => console.error(error));

    console.log("NoComments", data);



  } else {
    const game = data.find((game) => game.gameid == gameid);

    const mainid = game.id;
    let maxCommentId = 0;
    game.comments.forEach((comment) => {
      if (comment.id > maxCommentId) {
        maxCommentId = comment.id;
      }
    });

    const timestamp = new Date().toISOString();
    const comment = {
      id: maxCommentId + 1,
      user: "Anonymous",
      comment: newComment,
      timestamp,
    };

    fetch(`http://localhost:4000/games/${mainid}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comments: [...comments, comment],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setData([data]);
        setComments(data.comments);
      })
      .catch((error) => console.error(error));
  }
};

// Delete a comment
const deleteComment = (commentId) => {
  const game = data.find((game) => game.gameid == gameid);
  const mainid = game.id;
  const remdata = comments.filter((comment) => comment.id !== commentId);

  fetch(`http://localhost:4000/games/${mainid}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comments: remdata,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      setComments(data.comments);
    })
    .catch((error) => console.error(error));
};

//Delete all comments
const deleteAll = () => {
  const game = data.find((game) => game.gameid == gameid);
  const mainid = game.id;

  fetch(`http://localhost:4000/games/${mainid}`, {
      method: "DELETE",
  }).then(() => {
   setData([])
   setComments([])
  });

};

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

{/* comments starts here*/}
<div className="container my-4">
  <h2 className="text-center mb-4">Comments</h2>
  <div className="row">
    <div className="col-md-8 offset-md-2">
      <div className="list-group bg-info">
      
      {/* list items */}
       
      {comments.map((comment) => (
        <div key={comment.id} className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{comment.user}</h5>
            <button type="button" className="btn btn-sm btn-danger" onClick={() => deleteComment(comment.id)}>Delete</button>
          </div>
          <p className="mb-1">{comment.comment}</p>
        </div>
 ))}
      </div>
      <div className="mt-4">
        <button type="button" className="btn btn-sm btn-danger mb-2" id="delete-all" onClick={() => deleteAll()}>Delete All Comments</button>
      </div>
        <div className="form-group bg-info">
          <label for="comment">Your Comment</label>
          <textarea className="form-control" id="comment" rows="3" value={newComment}
          onChange={            
            (event) => setNewComment(event.target.value)}></textarea>
        </div>
        <button typeof="button" className="btn btn-primary" onClick={addComment}>Add Comment</button>
    </div>
  </div>
</div>



    </div>
  );
}

export default MatchDetails;
