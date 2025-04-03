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
              <p className='section-grey_text'>Любой текст в рамках зажанной lkbyys Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
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
                    <Image src='/icons8-ambulance-100.png' width='100' height='100' alt='такси по России' />
                  </motion.div>
                  <p className='service__title'>Скорая помощь</p>
                  <p>Любой текст по вашему желанию, но в рамках заданной длинны. Lorem, ipsum.</p>
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
                    <Image src='/icons8-ambulance-100.png' width='100' height='100' alt='такси по России' />
                  </motion.div>
                  <p className='service__title'>Скорая помощь</p>
                  <p>Любой текст по вашему желанию, но в рамках заданной длинны. Lorem, ipsum.</p>
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
                    <Image src='/icons8-ambulance-100.png' width='100' height='100' alt='такси по России' />
                  </motion.div>
                  <p className='service__title'>Скорая помощь</p>
                  <p>Любой текст по вашему желанию, но в рамках заданной длинны. Lorem, ipsum.</p>
			   </motion.div>
            </Col>
          </Row>
        </div>
        </div>
  );
}
