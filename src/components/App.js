import React, { useState } from "react";
import video from "../data/video.js";
import VideoPlayer from "./VideoPlayer.js";
import Details from "./Details.js";
import Comments from "./Comments.js";

function App() {
  const [showComments, setShowComments] = useState(true);

  return (
    <div className="App">
      <VideoPlayer embedUrl={video.embedUrl} title={video.title} />
      <Details title={video.title} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes} />
      <button onClick={() => setShowComments(!showComments)}>{showComments ? "Hide Comments" : "Show Comments"}</button>
      <hr></hr>
         <Comments comments={video.comments} showComments={showComments} />
    </div>
  );
}

export default App;


