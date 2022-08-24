// import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header, Jadid, Must,  ProfileSecurity,  ProfileSettings,  SecuritySecurity,  SecuritySettings,  SettingsSecurity,  SettingsSettings,  Soved, Temur } from "./components";
import { Books } from "./pages/Books";
// import { Login } from "./pages/Login";
// import { Register } from "./pages/Register";
import { JadidBook, MustBook, SovedBook, TemurBook } from "./components/navBooks";
import { Profile, ProfilePage } from "./pages/settingsPages/Profile";
import { Security } from "./pages/settingsPages/Security/Security";
import { Settings } from "./pages/settingsPages/Settings/Settings";
import { SingleBookPage } from "./pages/singleBook";
import { SingleAuthor } from "./pages/singleAuthor/SingleAuthor";
import { SecurityPage } from "./pages/settingsPages/Security/SecurityPage";
import { SettingsPage } from "./pages/settingsPages/Settings/SettingsPage";




function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/single-auth" element={<SingleAuthor />} />
        <Route path="/single-book/*" element={<SingleBookPage/>}/>
        <Route path="/profile/" element={<Profile/>} >
          <Route path="/profile/" element={<ProfilePage/>}/>
          <Route path="/profile/security" element={<ProfileSecurity/>}/>
          <Route path="/profile/settings" element={<ProfileSettings/>}/>
        </Route>
        <Route path="/security/" element={<Security/>} >
          <Route path="/security/" element={<SecurityPage/>}/>
          <Route path="/security/security" element={<SecuritySecurity/>}/>
          <Route path="/security/settings" element={<SecuritySettings/>}/>
        </Route>
        <Route path="/settings" element={<Settings/>} >
          <Route path="/settings/" element={<SettingsPage/>}/>
          <Route path="/settings/security" element={<SettingsSecurity/>}/>
          <Route path="/settings/settings" element={<SettingsSettings/>}/>
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
    </div>
  );
}

export default App;
