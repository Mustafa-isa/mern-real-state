import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import Home from "./pages/Home" 
import About from  './pages/About' 
import Profile from './pages/Profile' 
import SingIn from './pages/SignIn'
import Signup from './pages/Signup'
import Header from './components//Header'
function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About/>} />
    <Route path="/profile" element={<Profile />} />
    <Route path="sign-in" element={<SingIn />} />
    <Route path="sign-up" element={<Signup/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App