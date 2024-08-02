"use client";
import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Admins: React.FC = () => {
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [broadcastDate, setBroadcastDate] = useState<Date | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStartBroadcast = () => {
    setIsBroadcasting(true);
    console.log("Broadcast started");
  };

  const handleEndBroadcast = () => {
    setIsBroadcasting(false);
    console.log("Broadcast ended");
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    console.log("Recording started");
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    console.log("Recording stopped");
  };

  const handleDateChange = (date: Date) => {
    setBroadcastDate(date);
    console.log("Broadcast scheduled for:", date);
  };

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlayingAudio(true);
      console.log("Background audio playing");
    }
  };

  const handleStopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlayingAudio(false);
      console.log("Background audio stopped");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen my-10 ">
      <h1 className="text-2xl font-bold mb-4 flex justify-center md:justify-start">Admin Dashboard</h1>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col items-center justify-center ml-10">
          <div className="mb-4">
            <button
              onClick={handleStartBroadcast}
              className={`px-4 py-2 mr-2 ${
                isBroadcasting ? "bg-gray-400" : "bg-green-500"
              } text-white rounded`}
              disabled={isBroadcasting}
            >
              Start Broadcast
            </button>
            <button
              onClick={handleEndBroadcast}
              className={`px-4 py-2 ${
                !isBroadcasting ? "bg-gray-400" : "bg-red-500"
              } text-white rounded`}
              disabled={!isBroadcasting}
            >
              End Broadcast
            </button>
          </div>

          <div className="mb-4">
            <button
              onClick={handleStartRecording}
              className={`px-4 py-2 mr-2 ${
                isRecording ? "bg-gray-400" : "bg-blue-500"
              } text-white rounded`}
              disabled={isRecording}
            >
              Start Recording
            </button>
            <button
              onClick={handleStopRecording}
              className={`px-4 py-2 ${
                !isRecording ? "bg-gray-400" : "bg-red-500"
              } text-white rounded`}
              disabled={!isRecording}
            >
              Stop Recording
            </button>
          </div>

          <div className="mb-4">
            <button
              onClick={handlePlayAudio}
              className={`px-4 py-2 mr-2 ${
                isPlayingAudio ? "bg-gray-400" : "bg-purple-500"
              } text-white rounded`}
              disabled={isPlayingAudio}
            >
              Play Audio
            </button>
            <button
              onClick={handleStopAudio}
              className={`px-4 py-2 ${
                !isPlayingAudio ? "bg-gray-400" : "bg-red-500"
              } text-white rounded`}
              disabled={!isPlayingAudio}
            >
              Stop Audio
            </button>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow h-[350px] w-[350px] md:h-[400px] md:w-[400px] mr-20">
          <h2 className="text-xl font-semibold mb-2">Schedule Broadcast</h2>
          <Calendar onChange={handleDateChange} value={broadcastDate} className="" />
        </div>
      </div>

      <audio ref={audioRef} src="/background-audio.mp3" />
    </div>
  );
};

export default Admins;
