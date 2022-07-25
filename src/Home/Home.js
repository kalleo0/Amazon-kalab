import React from 'react'
import "./Home.css"
import Product from './Product'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
function Home() {
  return (
    <div className='home'>
       <div className="home__container">
          <Carousel
        className="banner__image"
        showIndicators={false}
        showThumbs={false}
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows = {false}>
          <div>
        <img
          className="banner__image"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt=""
        /></div>
        <div>
         <img
          className="banner__image"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          alt=""
        /></div>
        <div>
         <img
          className="banner__image"
          src="https://m.media-amazon.com/images/I/71Z0Z8dGwWL._SX3000_.jpg"
          alt=""
        /></div>
        </Carousel>
       <div className="home__row">
              <Product
             id="12321341"
             title="Samsung Galaxy Tab A8 Android Tablet, 10.5” LCD Screen, 64GB Storage, Long-Lasting Battery, Kids Content, Smart Switch, Expandable Memory, Dark Gray"
             price={321.69}
             rating={5}
             image="https://m.media-amazon.com/images/I/61krikJxTmL._AC_UL320_.jpg"
               />
            <Product
               id="3254354345"
               title="Apple iPad 9.7inch with WiFi 32GB- Space Gray (2017 Model) (Renewed)"
               price={151.05}
               rating={4}
               image="https://m.media-amazon.com/images/I/61eT9rYxfSL._AC_UL320_.jpg"
              /> 
        </div>
        <div className="home__row">
            <Product
               id="4903850"
               title="Lepro LED Strip Light White, 16.4ft Dimmable Vanity Lights, 6000K Super Bright LED Tape Lights, 300 LEDs 2835, Strong 3M Adhesive, Suitable for Home, Kitchen, Under Cabinet, Bedroom, Daylight White"
               price={18.99}
               rating={3}
               image="	https://m.media-amazon.com/images/I/71+7Hp5hu-L._AC_UL320_.jpg"
            /> 
            <Product
               id="23445930"
               title="Amazfit Band 5 Activity Fitness Tracker with Alexa Built-in, 15-Day Battery Life, Blood Oxygen, Heart Rate, Sleep & Stress Monitoring, 5 ATM Water Resistant, Fitness Watch for Men Women Kids, Black"
               price={599.99}
               rating={5}
               image="https://m.media-amazon.com/images/I/51ja6ds+pML._AC_UY218_.jpg"
            /> 
            <Product
               id="90829332"
               title="Beito Pet Dog Clothing Winter Warm Knit Sweater Pet Dog Coat Warm Fleece Pet Clothes Pet Supplies M - Red."
               price={22.98}
               rating={4}
               image="https://m.media-amazon.com/images/I/51PrcR8qsxL._AC_UL320_.jpg"
            />
        </div>
        <div className='home__row'>
        <Product
        id="49538094"
        title=" Full HD Display, 11th Gen Intel Core i3-1115G4 Processor, 4GB DDR4, 128GB NVMe SSD, WiFi 6, Windows 11 Home (S Mode)"
        price={298.88}
        rating={4}
        image="https://m.media-amazon.com/images/I/71233PTgAjL._AC_UL320_.jpg"
         />
              <Product
           id="49538094"
           title="UNA GUÍA PRÁCTICA PARA EL EVANGELISMO... GUÍA PRÁCTICA PARA LA EVANGELIZACIÓN (Spanish Edition)"
           price={17.5}
           rating={4}
           image="	https://images-na.ssl-images-amazon.com/images/I/51e58fRJqZL._SX331_BO1,204,203,200_.jpg"
         />
            
        </div>
     </div>
    </div>
   
  )
}

export default Home