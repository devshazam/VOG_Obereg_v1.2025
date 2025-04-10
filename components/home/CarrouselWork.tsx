'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import  review1 from '../../public/days/1.webp';
import  review2 from '../../public/days/2.webp';
import  review3 from '../../public/days/3.jpeg';
import  review4 from '../../public/days/4.jpeg';
import  review5 from '../../public/days/5.jpeg';
import  review6 from '../../public/days/6.jpeg';

import Card from '../ui/Card';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import { Col, Row , Typography, Image} from 'antd';

const { Title} = Typography;


export default function CarrouselWork() {


  return (
    <>
      <section id='reviews' className='bg-gray-100'>

		<div className="template__wrapper">
          <div className="template__indent">
          <Title level={2} className='sub-title'>Будни клиентов:</Title>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
            
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            breakpoints={{
              450: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },

              830: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1300: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >

            <SwiperSlide>
              <Card src={review1} alt='отзыв о такси #1' title='Ужин' />
            </SwiperSlide>

            <SwiperSlide>
              <Card src={review2} alt='отзыв о такси #2' title='Камин'/>
            </SwiperSlide>
            <SwiperSlide>
              <Card src={review3} alt='отзыв о такси #3' title='Зал'/>
            </SwiperSlide>
            <SwiperSlide>
              <Card src={review4} alt='отзыв о такси #4' title='Завтрак' />
            </SwiperSlide>
            <SwiperSlide>
              <Card src={review5} alt='отзыв о такси #5' title='Прогулка' />
            </SwiperSlide>
            <SwiperSlide>
              <Card src={review6} alt='отзыв о такси #6' title='Полдник' />
            </SwiperSlide>
          </Swiper>
          </div>
      </div>
    </section>
    </>
  );
}
