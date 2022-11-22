import { ethers } from "ethers";
import ABI from "../mood_abi";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useProvider = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Parent must be wrapped inside PostsProvider");
  }
  return context;
};

const MoodContractAddress = "0x9e399e6AA98b1a2E03d7e0759C123FdbEda13449";
const MoodContractABI = ABI;
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
let MoodContract;
let signer;

export default function Provider({children}) {
  
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

  return (
    <AppContext.Provider value={{MoodContractAddress}}>
      {children}
    </AppContext.Provider>
  );
}
