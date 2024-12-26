import react from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home"
import Question from "./components/Question"

function App() {
  return (
    <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/question" element={<Question />} />
            </Routes>
    </>
  );
}
export default App;
