// import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header, Jadid, Must,  Soved, Temur } from "./components";
import { Books } from "./pages/Books";
// import { Login } from "./pages/Login";
// import { Register } from "./pages/Register";
import { JadidBook, MustBook, SovedBook, TemurBook } from "./components/navBooks";
import { SingleAuthor, SingleBookPage } from "./pages";
import { Profile, Security, Settings } from "./pages/settingsPages";

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/single-auth" element={<SingleAuthor />} />
        <Route path="/single-book/*" element={<SingleBookPage/>}/>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/security" element={<Security/>} />
        <Route path="/settings" element={<Settings/>} />


        <Route>
          <Route path="/books/" element={<Books />}>
            <Route path="/books/" element={<TemurBook/>}/>
            <Route path="/books/jadid-book" element={<JadidBook/>}/>
            <Route path="/books/soved-book" element={<SovedBook/>}/>
            <Route path="/books/must-book" element={<MustBook/>}/>

          </Route>
          <Route
            path="/article"
            element={
              <>
                <Header />
                <div className="container">
                  <h1>articlelar topilmadi</h1>
                </div>
              </>
            }
          />
        </Route>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<Temur />} />
          <Route path="/jadid" element={<Jadid />} />
          <Route path="/soved" element={<Soved />} />
          <Route path="/must" element={<Must />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
