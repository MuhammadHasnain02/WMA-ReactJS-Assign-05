import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {

  return (

    <div className="flex flex-col h-screen justify-between">
      
      <Routes>

        <Route index element={<Home />} />

      </Routes>

    </div>

  );
  
}

export default App