import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter className='Type'
      options={{
        strings: [
          "Software Developer",
          "Full Stack Developer",
          "App Developer",
          "Web Developer",
          
          ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;