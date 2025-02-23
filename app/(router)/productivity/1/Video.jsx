import React from "react";

function Video() {
  return (
    <div
      className="
    flex
    relative
    "
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fJY_FMwXKmE?si=sTaKSNxC1CKm-nXc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
