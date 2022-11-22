import { useEffect, useState } from "react";
import useProvider from "../function/Provider";
import Button from "../components/Button";

export default function Dashboard() {
  const [mood, updateMood] = useState("");

//   const {initUser} = useProvider();

  //   useEffect(() => {
  //   providerInit();
  // }, [])

  

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
    <Button mood={mood}/>
    </div>
  );
}
