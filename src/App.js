
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hook/useAuth";
import { Private } from "./Private";
import { Public } from "./Public";
import { languages } from "./languages";


function App() {

  const {token} = useAuth()


  return (
    <div className="App">

      <Routes>
        <Route path="/*" element={token? <Private/> : <Public/>}/>

      </Routes>




    </div>
  );
}

export default App;
