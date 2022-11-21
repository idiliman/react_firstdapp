import React, { Component } from "react";
import { ethers } from "ethers";
import ABI from "./mood_abi"

export default function App() {
  const MoodContractAddress = "0x494EFcAA2ec2D37659e6694E8dEbbd60ae9a631E";
  const MoodContractABI = ABI;
  const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli")
  let MoodContract;
  let signer;

  provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {

      signer = provider.getSigner(accounts[0]);

      MoodContract = new ethers.Contract(
      MoodContractAddress,
      MoodContractABI,
      signer
      );
    });
  });

  async function setMood() {
    const mood = document.getElementById("mood").value;
    const setMoodPromise = MoodContract.setMood(mood);
    await setMoodPromise;
  }

  async function getMood() {
    const getMoodPromise = MoodContract.getMood();
    const Mood = await getMoodPromise;
    console.log(Mood);
  }

  return (
    <container>
    <body>
      <div>
        <h1>This is my dApp!</h1>
        <p className="">Here we can set or get the mood:</p>
        <label for="mood">Input Mood:</label> <br />
        <input className="border-solid border-2 border-slate-600" type="text" id="mood" />
      </div>
    </body>
  </container>
  )
}
