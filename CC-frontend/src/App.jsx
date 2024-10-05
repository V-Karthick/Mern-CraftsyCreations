import {BrowserRouter, Route, Routes} from "react-router-dom"

import Login from "./pages/Login"
import Signin from "./pages/Signin"
import Home from "./pages/Home"
import {Provider} from "react-redux"
import { store } from "./state/store"
function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
