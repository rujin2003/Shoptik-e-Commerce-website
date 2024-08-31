import { Navbar, Footer } from "./components";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  Cart,
  Products,
  SingleProduct,
  Error,
  Checkout,
  ProtectedRoute,
  Completion,
  AboutUs,
  ContactUs,
  News,
} from "./pages";
import ReactGA from "react-ga4";
import Gallery from "./pages/Gallery";
import Signin from "./pages/SigninPage";
import JoinNow from "./pages/Joinnow";
import JoinWholesale from "./pages/JoinWholesale";

const measurementID = "G-Y1EV1Q38PH";
ReactGA.initialize(measurementID);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/signin" && location.pathname !== "/joinnow";


  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        <Route path= "/joinwholesale" element={<JoinWholesale/>}/>
        <Route path= "/joinnow" element={<JoinNow/>}/>
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/completion"
          element={
            <ProtectedRoute>
              <Completion />
            </ProtectedRoute>
          }
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/joinwholesale" element={<JoinWholesale />} />  
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;