import React, { useState, useEffect } from "react";
import AppProvider from "./function/Provider"; // context aku sini
import MoodContract from "./function/Provider";
import Dashboard from "./pages/Dashboard";

export default function App() {
  

  // const {providerInit} = AppProvider();



 
  return (
    <AppProvider>
    <Dashboard/>
    </AppProvider>
  );
}
