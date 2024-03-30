import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">

      <div>
        <Navigation />
      </div>
      <div className='space-y-1 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
