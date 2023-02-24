import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
// import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            {/* <Header /> */}
            <Route path="product" element={<ProductListing />} />
            <Route>404 NOT FOUND!</Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
