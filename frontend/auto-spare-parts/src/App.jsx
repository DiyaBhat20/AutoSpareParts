import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp"
import Login from "./pages/Login/Login"

const routes=(
  <Router>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
  </Routes>
  </Router>
)

const App = () => {
  return (
    <div>{routes}</div>
  );
};


export default App
