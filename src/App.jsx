import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import AddProduct from "./pages/addProduct/AddProduct";
import UpdateProduct from "./pages/updateProduct/UpdateProduct";
import MyState from "./context/data/myState";

function App() {
  return (
    <MyState>
      <Router>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/addproduct" element={ <AddProduct/> } />
        <Route path="/updateproduct" element={ <UpdateProduct/> } />
       </Routes>
      </Router>
    </MyState>
  )
}

export default App