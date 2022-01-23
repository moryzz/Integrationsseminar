import { useState } from "react";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import LinearWithValueLabel from "./components/Progressbar";
import QuestionButton from "./components/Button";
import Fragebogen from "./components/Fragebogen";


function App() {
  const [progress, setProgress] = useState(1);
  const [count, setCount] = useState(1);
  const [results, setResult] = useState("")

  console.log(results)

  return (
    <div className="App">
      <ResponsiveAppBar />
      <LinearWithValueLabel value={progress > 100 ? (100) : (progress)} />
      <Fragebogen count={count - 1} getResults={result => {setResult(result)}}/>
      <QuestionButton changeProgress={progress_button => {setProgress(progress_button)}} changeCount={fragen_counter => {setCount(fragen_counter)}} neuer_counter={count}/>
    </div>
  );
}

export default App;
