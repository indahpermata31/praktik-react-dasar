import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import Errorpage from './Pages/404.jsx';
import ProductsPage from './Pages/products.jsx';
import ProfilePage from './Pages/profile.jsx';
import DetailProductPage from './Pages/detailProduct.jsx';

const router = createBrowserRouter([  // create browser sebagai pembungkus dari routes dan route, tanpa BrowserRouter(pembungkus), react router tidak bisa menjalankan sistem routing dengan benar. Karena Routes(sebagai wadah) dan Route membutuhkan konteks routing yang disediakan oleh BrowserRouter.
  {
    path: '/', 
    element: <div>Hello World</div>,
    errorElement: <Errorpage />
  },
  {
    path: '/login', //menetukan URL
    element: <LoginPage />, // menentukan komponen yang ditampilkan
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/product/:id', //route dinamis
    element: <DetailProductPage />,
  },
]);

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)

// RouterProvider digunakan untuk menghubungkan sistem routing (pengaturan URL dan halaman) ke dalam aplikasi react kita.
// import { StrictMode } fitur react untuk membantu menemukan masalah dalam  proses pengembangan aplikasi, dan ini digunakan agar kita lebih mudah mengetahi kemungkinan kesalahan dalam penggunaan fitur react. Seperti memperingatkan jika ada pengguanaan fitur lama atau Lifecycle yang tidak aman.
// import "./index.css";, kenapa harus dipanggil karena jika tidak di import, styling tailwind dari file tersebut tidak akan di terapkan
// createRoot() = membuat root react.
// document.getElementById("root") = mencari element html yang memiliki id root, yang akam menjadi wadah utama untuk seluruh tampilan aplikasi.
// .render() = menampilkan komponen ke browser.
// <App /> = menjalankan komponen utama.
