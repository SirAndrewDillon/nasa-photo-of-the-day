import React, { useState, useEffect } from "react";
import axios from "axios";

import MediaCard from "./MediaCard";

function Today() {
  const [media, updateMedia] = useState("");
  const apiKey = "1hliEghmtffq93NG8ff70Jb6ZBcjDOGNypk3tOU4";
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&hd=true`)
      .then(res => updateMedia(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="today-container">
      <h3>Today's Inspiration</h3>
      <MediaCard media={media} />
    </div>
  );
}

export default Today;