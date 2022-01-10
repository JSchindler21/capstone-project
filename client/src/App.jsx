import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [myHeadline, setMyHeadline] = useState("");

  useEffect(() => {
    const fetchMyHeadline = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      setMyHeadline(data.message);
    };

    fetchMyHeadline();
  }, []);

  

  return (
    <div className='App'>
      <div>{myHeadline}</div>
      <h1>Welcome to my project</h1>
    </div>
  );
}

export default App;