"use client";

import { Col, Row } from 'antd';
import { motion, Variants } from "framer-motion";
import Image from 'next/image';

export default function ServiceGaranty() {

  const cardVariants: Variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  return (
    <div className='service'>
        <div className="template__wrapper">
          <div className="wrap-top-content">
            <div className="top-contene">
              <h2 className='section-grey_h2'>Гарантии высокого сервиса</h2>
              <p className='section-grey_text'>Мы понимаем как важен каждый пациент для своей семьи и мы делаем все возможное, чтобы вы остались довольны!</p>
            </div>
          </div>
          <Row className='first-top-padding '>

            <Col xs={24} md={8}>
              <motion.div
              className="garanty-wrapper"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
                > 
                  <motion.div variants={cardVariants} >
                    <Image src='/service/icons8-ambulance-100.png' width='120' height='120' alt='такси по России' />
                  </motion.div>
                  <p className='service__title'>Скорая помощь</p>
                  <p>Мы заботимся о здоровье наших пациентов и постоянно следим за их сосстоянием.</p>
              </motion.div>
            </Col>
            <Col xs={24} md={8}>
            <motion.div
              className="garanty-wrapper"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
                > 
                 <motion.div variants={cardVariants} >
                    <Image src='/service/icons8-nurse-100.png' width='120' height='120' alt='такси по России' />
                  </motion.div>
                  <p className='service__title'>Профессионализм</p>
                  <p>Мы действуем в соответствии с высокими профессиональными стандартами.</p>
			   </motion.div>
            </Col>
            <Col xs={24} md={8}>
            <motion.div
              className="garanty-wrapper"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
                > 
			<motion.div variants={cardVariants} >
                    <Image src='/service/icons8-last-24-hours-100.png' width='120' height='120' alt='такси по России' />
                  </motion.div>
                  <p className='service__title'>Мониторинг 24/7</p>
                  <p>Мы радом с нашими пациентами 24 часа в сутки и 7 дней в неделю.</p>
			   </motion.div>
            </Col>
          </Row>
        </div>
        </div>
  );
}
