import { useEffect, useState } from "react";
import "./App.css";
import Header from './components/Header'
import MyBudget from "./components/MyBudget";
import ExpanseIncome from "./components/ExpanseIncome";

function App() {
  const [myHeadline, setMyHeadline] = useState("");

  useEffect(() => {
    const fetchMyHeadline = async () => {
      const res = await fetch("http://localhost:7000/api");
      const data = await res.json();
      setMyHeadline(data.message);
    };

    fetchMyHeadline();
  }, []);

  

  return (
    <div className='App'>
      <div>{myHeadline}</div>

      <Header />

      <div>
        <MyBudget/> 
        <ExpanseIncome />
      </div>

      <main>

      </main>

      <footer>
        <nav>
          
        </nav>
      </footer>

    </div>
  );
}

export default App;