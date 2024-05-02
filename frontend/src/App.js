import { Container } from 'react-bootstrap';
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreens from './screens/HomeScreens';
import ProductSreens from './screens/ProductSreens';
import CartScreens from './screens/CartScreens';
import LoginScreens from './screens/LoginScreens';
import ProfileScreens from './screens/ProfileScreens';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterScreens from './screens/RegisterScreens';
import ShippingScreens from './screens/ShippingScreens';
import PaymentScreens from './screens/PaymentScreens';
import PlaceOrderScreens from './screens/PlaceOrderScreens';
import OrderDetailsScreens from './screens/OrderDetailsScreens';
import UserListScreens from './screens/UserListScreens';
import UserEditScreens from './screens/UserEditScreens';
import ProductListScreens from './screens/ProductListScreens';
// import ProductEditScreens from './screens/ProductEditScreens';
import ProductEditScreens from './screens/ProductEditScreens';
import OrderListScreens from './screens/OrderListScreens';

function App() {
  return (  
    <BrowserRouter>
      
          <Header />
          <main className="py-3">
            <Container>
              <Routes>
                <Route path="/" element={<HomeScreens />} exact/>
                <Route path="/login" element={<LoginScreens />} />
                <Route path="/register" element={<RegisterScreens />} />
                <Route path="/profile" element={<ProfileScreens />} />
                <Route path="/product/:id" element={<ProductSreens />} />
                <Route path="/cart/:id?" element={<CartScreens />} />
                <Route path="/shipping" element={<ShippingScreens />} />
                <Route path="/payment" element={<PaymentScreens />} />
                <Route path="/placeorder" element={<PlaceOrderScreens />} />
                <Route path="/order/:id" element={<OrderDetailsScreens />} />

                <Route path="/admin/userlist" element={<UserListScreens />} />
                <Route path="/admin/user/:id/edit" element={<UserEditScreens />} />

                <Route path="/admin/productlist" element={<ProductListScreens />} />
                <Route path="/admin/product/:id/edit" element={<ProductEditScreens />} />

                <Route path="/admin/orderslist" element={<OrderListScreens />} />
              </Routes>
              {/* <Route path="/" Component={<HomeScreens/>} exact /> */}
             
            </Container>
          </main>
          <Footer/>
       
    </BrowserRouter >
  );
}

export default App;
