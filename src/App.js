import React, { useState, useEffect } from "react";
import AppProvider from "./function/Provider"; 
import MoodContract from "./function/Provider";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <AppProvider>
    <Dashboard/>
    </AppProvider>
  );
}
