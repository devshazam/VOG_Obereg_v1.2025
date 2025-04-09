"use client";

import Image from 'next/image';
import { Col, Row, Typography } from 'antd';

// import bannerImage from '../../public/banner.webp';
import bannerImage from '../../public/b3.webp';
import TransitionTextComp from '@/components/ui/TransitionTextComp';

const { Text } = Typography;

export default function MainBackground() {

  return (
    <section className="banner">
        <div className="template__wrapper">
          <Row className="" gutter={16}>
            <Col xs={24} md={12} className='!hidden md:!block'>
              <div className="flex justify-start items-center h-70 md:h-full py-6">
                <div className="">
               	<TransitionTextComp />
                  	<Text>Пансионат для малоподвижных пациентов, пациентов с деменцией, реабилитация после инсульта и перелома шейки бедра!</Text>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} className='!hidden md:!block'>
		  	<div className="p-8">
              <Image alt="КопиПринт34" src={bannerImage}  style={{ width: '100%', height: 'auto'}} className="banner__img" />
		    </div>
            </Col>
          </Row>
        </div>
    </section>

  );
}
