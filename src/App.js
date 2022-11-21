import React, { Component, useState } from "react";
import { ethers } from "ethers";
import ABI from "./mood_abi";

export default function App() {
  const [mood, updateMood] = useState("");

  const setMood = async () => {
    if (mood == "") {
      alert("Cannot set");
    } else if (mood !== "") {
      alert("done!");
      console.log(mood);
    }

    // const setMoodPromise = MoodContract.setMood(mood);
    // await setMoodPromise;
  };

  async function getMood() {
    // const getMoodPromise = MoodContract.getMood();
    // const Mood = await getMoodPromise;
    console.log("getMood");
  }

  return (
    <container>
      <body>
        <div>
          <h1>This is my dApp!</h1>
          <p className="">Here we can set or get the mood:</p>
          <label for="mood">Input Mood:</label> <br />
          <input
            className="border-solid border-2 border-slate-600"
            onChange={(event) => updateMood(event.target.value)}
            type="text"
            id="mood"
          />
          <button onClick={setMood}>Set Mood</button>
          <button onClick={getMood}>Get Mood</button>
        </div>
      </body>
    </container>
  );
}
