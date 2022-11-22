import { useEffect, useState } from "react";
import useProvider from "../function/Provider";

export default function Dashboard() {
  const [mood, updateMood] = useState("");

    // const {providerInit} = useProvider();

    //   useEffect(() => {
    //   providerInit();
    // }, [])

  //   const setMood = async () => {
  //     // if (mood == "") {
  //     //   alert("Cannot set");
  //     // } else if (mood !== "") {
  //     //   alert("done!");
  //     //   console.log(mood);
  //     // }

  //     const setMoodPromise = MoodContract.setMood(mood);
  //     await setMoodPromise;
  //   };

  //   async function getMood() {
  //     const getMoodPromise = MoodContract.getMood();
  //     const Mood = await getMoodPromise;
  //     console.log(Mood);
  //   };

  return (
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
      {/* <button onClick={setMood}>Set Mood</button>
          <button onClick={getMood}>Get Mood</button> */}
    </div>
  );
}
