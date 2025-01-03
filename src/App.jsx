import react from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home"
import Question from "./components/Question"
import Answers from "./components/Answers";

function App() {
  return (
    <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/question" element={<Question />} />
                <Route path="/answers" element={<Answers />} />
            </Routes>
    </>
  );
}
export default App;
