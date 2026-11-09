import { BrowserRouter, Route, Routes } from "react-router"
import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"
import Feed from "./Feed"
import Connections from "./Connections"


function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/feed" element={<Feed />}/>
            <Route path="/connections" element={<Connections />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
