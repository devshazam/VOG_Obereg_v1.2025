"use client";

import MainBackground from '../components/home/MainBackground';
import Portfolio from '../components/home/Portfolio';
import Loyalty from '../components/home/Loyalty';
import OurGoods from '../components/home/OurGoods';

import ServiceGaranty from '@/components/home/ServiceGaranty';
import FormComponent from '@/components/home/FormComponent';
import CarrouselWork from '@/components/home/CarrouselWork';
import MainTarifs from '@/components/home/MainTarifs';

export default function Home() {

  return (
	<main>
		
      <MainBackground/>
    
      <section id='goods' className='bg-gray-100'>
    		<ServiceGaranty />
      </section> 

      <section id='goods' className=' goods'>
        <div className="template__wrapper">
	   	<div className="template__indent">
            <OurGoods /> 
          </div>
        </div>
      </section> 

	 <CarrouselWork />
	 <MainTarifs />

      <section id='loyalty' className='loyalty'>
        <FormComponent />
      </section>

      <section id='portfolio' className='tarifs'>
        <div className="template__wrapper">
          <div className="template__indent">
            <Portfolio /> 
          </div>
        </div>
      </section> 

    </main>
  );
}
