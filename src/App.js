import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product.jsx';
import ProductDetail from './customer/components/ProductDetail/ProductDetail.jsx';
import Navigation from './customer/components/navigation/Navigation.jsx';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">

      <div>
        <Navigation />
      </div>
      <div className='space-y-1 pb-20 flex flex-col justify-center px-5 lg:px-10'>
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetail />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
