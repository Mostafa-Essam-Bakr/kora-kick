import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"; // تأكد من استيراد Home بشكل صحيح
import "./App.css";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
