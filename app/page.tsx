"use client";

import MainBackground from '../components/home/MainBackground';
import Portfolio from '../components/home/Portfolio';
import Loyalty from '../components/home/Loyalty';
import OurGoods from '../components/home/OurGoods';


export default function Home() {

  return (
	<main>
		
      <MainBackground/>
    
      <section id='goods' className='bg-gray-100 goods'>
        <div className="template__wrapper">
	   	<div className="template__indent">
            <OurGoods /> 
          </div>
        </div>
      </section> 

      <section id='loyalty' className='loyalty'>
        <div className="template__wrapper">
          <div className="template__indent">
            <Loyalty/>
          </div>
        </div>
      </section>

      <section id='portfolio' className='tarifs bg-gray-100'>
        <div className="template__wrapper">
          <div className="template__indent">
            <Portfolio /> 
          </div>
        </div>
      </section> 

    </main>
  );
}
