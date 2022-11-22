import React from "react";
import useProvider from "../function/Provider";

export default function Button(props) {
    
    const {MoodContract} = useProvider();

    const setMood = async () => {
        // if (mood == "") {
        //   alert("Cannot set");
        // } else if (mood !== "") {
        //   alert("done!");
        //   console.log(mood);
        // }
        const setMoodPromise = MoodContract.setMood(props.mood);
        await setMoodPromise;
      };
  
      async function getMood() {
        const getMoodPromise = MoodContract.getMood();
        const Mood = await getMoodPromise;
        console.log(Mood);
      };

  return (
    <div>
      <button onClick={setMood}>Set Mood</button>
      <button onClick={getMood}>Get Mood</button>
    </div>
  );
}
