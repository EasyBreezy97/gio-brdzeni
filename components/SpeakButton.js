import React from "react";
import { AiFillSound } from "react-icons/ai";

const SpeakButton = ({ text, size = 15 }) => {
  const speakHandler = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.cancel();
    utterance.voice = synth.getVoices()[6];
    synth.speak(utterance);
  };

  return (
    <AiFillSound
      fontSize={size}
      onClick={speakHandler}
      style={{ cursor: "pointer" }}
    />
  );
};

export default SpeakButton;
