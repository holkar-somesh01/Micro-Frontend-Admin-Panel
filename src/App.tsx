import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './pages/ErrorBoundary';
import Home, { Sidebar } from './pages/Home';
import Orders from './pages/Orders';
import Users from './pages/Users';
import AddProduct from './components/AddProduct';
import ReturnRequested from './components/ReturnRequested';
import UserDetails from './components/UserDetails';
import reduxStore from './redux/store';
import Product from './pages/Products';

const App = () => (
  <>
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex h-screen">
          <div className="w-64 bg-gray-800 text-white fixed h-full">
            <Sidebar />
          </div>
          <div className="ml-64 flex-1 overflow-y-auto p-4 bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/order" element={<Orders />} />
              <Route path="/user" element={<Users />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/return-request" element={<ReturnRequested />} />
              <Route path="/userDetails/:id" element={<UserDetails />} />
              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  </>
);

export default App;

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
