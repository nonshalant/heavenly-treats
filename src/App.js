import { Route, Routes } from 'react-router-dom';
import AgeVerification from './components/ageVerification/AgeVerification';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import { useEffect, useState } from 'react';
import setAgeVerificationToken from './components/ageVerification/setVerificationToken';
import Footer from './components/footer/Footer';
import Shop from './components/shop/Shop';
import Modal from './components/modal/Modal';
import './App.css';
import axios from 'axios';
import WhoWeAre from './components/whoWeAre/WhoWeAre';
import Feedback from './components/feedback/Feedback';
import EachFeedback from './components/feedback/partials/EachFeedback';
import { useMediaQuery } from 'react-responsive';
import MobileNavigation from './components/navigation/MobileNavigation';

function App() {
  const [verified, setVerified] = useState();
  const [cart, setCart] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);
  const [renderMobile, setRenderMobile] = useState()

  const isMobile = useMediaQuery({ query: `(max-width: 767px)` })

  const addToCart = async({name, price, id, quantity, image, cloudName}) => {
    const body = JSON.stringify({
      name,
      price,
      id,
      quantity,
      image, 
      cloudName
    })

    await axios({
      method: 'post',
      url: "http://localhost:4000/cart",
      data: body,
      headers: {
        "Content-Type": "application/json"
    }})
    .then(resp=>{
      console.log(resp)
      const cart = resp.data.cart
      setCart(cart);
      setDisplayCart(true);
      
    })
    .catch(error=>{
      console.error(error)
    })
  };

  useEffect(()=>{
    if(isMobile){
      setRenderMobile(true)
    };
  })

  const removeFromCart = async(item, option) => {
    const body = JSON.stringify({
      item,
      option
    });

    console.log(item)

    await axios({
      method: 'put',
      url: 'http://localhost:4000/cart',
      data: body,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp=>{
      console.log(resp)
      const updatedQuantity = resp.data.quantity
      setCart(
        cart.map(x => x.id === item.id ? {...item, quantity: updatedQuantity} : x)
      )
      if(item.quantity <= 1) {
        setCart(cart.splice(item, 0))
      }
    })  
  }

  useEffect(()=>{
    setAgeVerificationToken()
  },[])

  return (
    <div className="App">
      {
        verified ?
          <>
            {
              renderMobile ? <MobileNavigation /> : <Navigation setDisplayCart={setDisplayCart} cart={cart}/>
            }
            <Routes>
              <Route 
                path='/' 
                element={<Home />}>
              </Route>
              <Route 
                path='/shop' 
                element={<Shop renderMobile={renderMobile}/>}>  
              </Route>
              <Route 
                path='/shop/:productName' 
                element={<Modal cart={cart} setDisplayCart={setDisplayCart} displayCart={displayCart} addToCart={addToCart} removeFromCart={removeFromCart} />}>
              </Route>
              <Route 
                path='/who-are-we' 
                element={<WhoWeAre />}>  
              </Route>
              <Route 
                path='/feedback' 
                element={<Feedback />}>  
              </Route>
              <Route 
                path='/feedback/:feedback' 
                element={<EachFeedback />}>  
              </Route>
            </Routes>
            <Footer />
          </> : <AgeVerification setVerified={setVerified}/>
      }
    </div>
  );
}

export default App;