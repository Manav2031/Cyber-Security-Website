import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/Centredtext.css';

const Centredtext = () => {
  const typewriterRefs = useRef([]);

  const startTypewriters = () => {
    typewriterRefs.current.forEach((typewriter) => {
      typewriter && typewriter.start();
    });
  };
  useEffect(() => {
    startTypewriters();
  }, []);

  return (
    <div className="centered-text">
      <Typewriter
        onInit={(typewriter) => {
          typewriterRefs.current[0] = typewriter;
        }}
        options={{
          strings: [
            "<h1> \"Hacking just means building something quickly or testing the boundaries <br /> of what can be done.” — Mark Zuckerberg. </h1>",
          ],
          autoStart: true,
          loop: true,
        }}
      />
      <br /> <br />
      <Typewriter
        onInit={(typewriter) => {
          typewriterRefs.current[1] = typewriter;
        }}
        options={{
          strings: [
            "<h1> \"Security used to be an inconvenience sometimes, but now it's <br /> a necessity all the time.” — Martina Navratilova. </h1>",
          ],
          autoStart: true,
          loop: true,
        }}
      />
      <br /> <br />
      <Typewriter
        onInit={(typewriter) => {
          typewriterRefs.current[2] = typewriter;
        }}
        options={{
          strings: [
            "<h1> \"There's no silver bullet with cybersecurity; a layered defense is <br /> the only viable option.” — James Scott. </h1>",
          ],
          autoStart: true,
          loop: true,
        }}
      />
      <br /> <br />
      <Typewriter
        onInit={(typewriter) => {
          typewriterRefs.current[3] = typewriter;
        }}
        options={{
          strings: [
            "<h1> \"It takes 20 years to build a reputation and a <br /> few minutes of cyber-incident to ruin it.” ― Stephane Nappo. </h1>",
          ],
          autoStart: true,
          loop: true,
        }}
      />
      <br /> <br />
    </div>
  );
};

export default Centredtext;
