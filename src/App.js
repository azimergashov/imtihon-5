// import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header, Jadid, Must, Soved, Temur } from "./components";
import { Books } from "./pages/Books";
// import { Login } from "./pages/Login";
// import { Register } from "./pages/Register";
import { SingleAuthor } from "./pages/singleAuthor/SingleAuthor";
import { JadidBook, MustBook, SovedBook, TemurBook } from "./components/navBooks";
import { SingleBook } from "./pages/singleBook/SingleBook";

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/single-auth" element={<SingleAuthor />} />
        <Route path="/single-book" element={<SingleBook/>}/>
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
