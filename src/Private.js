// import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header, Jadid, Must, Soved, Temur } from "./components";
import { JadidBook, MustBook, SovedBook, TemurBook } from "./components/navBooks";
import { Profile, ProfilePage } from "./pages/settingsPages/Profile";
import { SingleAuthor } from "./pages/singleAuthor/SingleAuthor";
import { SecurityPage } from "./pages/settingsPages/Security/SecurityPage";
import { SettingsPage } from "./pages/settingsPages/Settings/SettingsPage";
import {Books} from './pages/Books'
import { SingleBookPage } from "./pages/singleBook";



export const Private = () =>{


    return(
        <>


<Routes>
        <Route path="/single-auth" element={<SingleAuthor />} />
        <Route path="/single-book/*" element={<SingleBookPage/>}/>
        <Route path="/profile/" element={<Profile/>} >
          <Route path="/profile/" element={<ProfilePage/>}/>
          <Route path="/profile/security" element={<SecurityPage/>}/>
          <Route path="/profile/settings" element={<SettingsPage/>}/>
        </Route>
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

        </>
    )
}