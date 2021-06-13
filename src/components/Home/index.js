import React from 'react';
import {Product} from "../../components";
import "./Home.css";

function Home() {
  return (
    <div className="home">
        <div className="home__container">
          <img 
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenFree_DMUX-4110/Gateway/DV3A/US-EN_030121_FreeTierQ1Refresh_ACQ_GW_Hero_D_1500x600_CV3._CB655482702_.jpg"
               alt="amazon image" />
          <div className="home__row">
              <Product id="1" title="The lean startup"
                      price={23.3} 
                      image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDNhNDdkYjQt/ZDNhNDdkYjQt-NWRlNDBkNjYt-w379._SY304_CB667101704_.jpg"
                      rating={5}
              />
            <Product id="2" title="The lean startup"
                      price={23.3} 
                      image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDNhNDdkYjQt/ZDNhNDdkYjQt-NWRlNDBkNjYt-w379._SY304_CB667101704_.jpg"
                      rating={3}
              />
          </div>
          <div className="home__row">
            <Product id="3" title="The lean startup"
                      price={23.3} 
                      image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDNhNDdkYjQt/ZDNhNDdkYjQt-NWRlNDBkNjYt-w379._SY304_CB667101704_.jpg"
                      rating={2}
              />
              <Product id="4" title="The lean startup"
                      price={23.3} 
                      image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDNhNDdkYjQt/ZDNhNDdkYjQt-NWRlNDBkNjYt-w379._SY304_CB667101704_.jpg"
                      rating={1}
              />
              <Product id="5" title="The lean startup"
                      price={23.3} 
                      image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDNhNDdkYjQt/ZDNhNDdkYjQt-NWRlNDBkNjYt-w379._SY304_CB667101704_.jpg"
                      rating={4}
              />
              <Product id="6" title="The lean startup"
                      price={23.3} 
                      image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDNhNDdkYjQt/ZDNhNDdkYjQt-NWRlNDBkNjYt-w379._SY304_CB667101704_.jpg"
                      rating={5}
              />
          </div>
          <div className="home__row">
            <Product  id="7" title="The lean startup"
                        price={23.3} 
                        image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDNhNDdkYjQt/ZDNhNDdkYjQt-NWRlNDBkNjYt-w379._SY304_CB667101704_.jpg"
                        rating={7}
                />
          </div>
        </div>
    </div>
  )
}

export default Home;
