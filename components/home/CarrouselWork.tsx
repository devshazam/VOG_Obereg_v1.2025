'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import  review1 from '../../public/voices/1.jpg';
import  review2 from '../../public/voices/review2.webp';
import  review3 from '../../public/voices/review3.webp';
import  review4 from '../../public/voices/review4.webp';
import  review5 from '../../public/voices/review5.webp';
import  review6 from '../../public/voices/review6.webp';

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
            slidesPerView={2}
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
              <Card src={review1} alt='отзыв о такси #1' title='Измайлов Р.Л.' text='yandex.com'/>
            </SwiperSlide>

            <SwiperSlide>
              <Card src={review1} alt='отзыв о такси #2' title='Торопов Х.В.' text='google.com'/>
            </SwiperSlide>
            <SwiperSlide>
              <Card src={review1} alt='отзыв о такси #3' title='Фарудинов М.К.' text='2gis.ru'/>
            </SwiperSlide>
            <SwiperSlide>
              <Card src={review1} alt='отзыв о такси #4' title='Карпов К.К.' text='yandex.com'/>
            </SwiperSlide>
            <SwiperSlide>
              <Card src={review1} alt='отзыв о такси #5' title='Бельский Ю.Д.' text='taxi.yandex.com'/>
            </SwiperSlide>
            <SwiperSlide>
              <Card src={review1} alt='отзыв о такси #6' title='Петров Л.Н.' text='yandex.com'/>
            </SwiperSlide>
          </Swiper>
          </div>
      </div>
    </section>
    </>
  );
}
