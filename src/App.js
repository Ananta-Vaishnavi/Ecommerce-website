import './App.css';
import Homepage from './customer/Pages/Homepage';
import Product from './customer/components/Product/Product';
import Navigation from './customer/components/Navigation';
import Footer from './customer/components/Footer/Footer';

function App() {
  return (
    <>
      <Navigation />
      {/* <Homepage /> */}
      <Product />
      <Footer />
    </>

  );
}

export default App;
