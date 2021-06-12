
// import React from 'react'
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

// const Dictaphone = () => {
//   const { transcript, resetTranscript } = useSpeechRecognition();


//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return null
//   }
//   console.log(SpeechRecognition)

//   return (
//     <div>
//       <button onClick={SpeechRecognition.startListening}>Start</button>
//       <button onClick={SpeechRecognition.stopListening}>Stop</button>
//       <button onClick={resetTranscript}>Reset</button>
//       <p>{transcript}</p>
//     </div>
//   )
// }
// export default Dictaphone



import { useRef, useState ,useEffect} from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./Dictaphone.css";
function Dictaphone(props) {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  useEffect(() => {
    props.setShortDesc(transcript);
  }, [transcript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
    props.setShortDesc('');
  };
 
  
  return (
    <div className="microphone-wrapper">
      <div className="mircophone-container">
        <div
          className="microphone-icon-container"
          ref={microphoneRef}
          onClick={handleListing}
        >
          <img src={"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22%2F%3E%3Cpath%20d%3D%22M12%2015c1.66%200%202.99-1.34%202.99-3L15%206c0-1.66-1.34-3-3-3S9%204.34%209%206v6c0%201.66%201.34%203%203%203zm-1.2-9.1c0-.66.54-1.2%201.2-1.2s1.2.54%201.2%201.2l-.01%206.2c0%20.66-.53%201.2-1.19%201.2s-1.2-.54-1.2-1.2V5.9zm6.5%206.1c0%203-2.54%205.1-5.3%205.1S6.7%2015%206.7%2012H5c0%203.41%202.72%206.23%206%206.72V22h2v-3.28c3.28-.48%206-3.3%206-6.72h-1.7z%22%2F%3E%3C%2Fsvg%3E" } className="microphone-icon" />
        </div>
        <div className="microphone-status">
          {isListening ? "....." : "Click to start Listening"}
        </div>
        {isListening && (
          <button className="microphone-stop btn" onClick={stopHandle}>
            Stop
          </button>
        )}
        {transcript && (
          <button className="microphone-reset btn" onClick={handleReset}>
            Reset
          </button> 
      )}
      </div>
      {/* {transcript && (
        <div className="microphone-result-container">
          <div className="microphone-result-text">{transcript}</div>
        </div>
      )} */}
    </div>
  );
}
export default Dictaphone;