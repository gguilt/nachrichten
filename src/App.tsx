import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([""]);

  setItems(["Merhaba Dünya", "Test"]);

  return (
    <>
      {items.map((e) => {
        return <>{items[0]}</>
      })}
    </>
  );
}

export default App;