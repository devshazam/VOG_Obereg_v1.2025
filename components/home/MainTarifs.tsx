"use client";

import React, { useState } from 'react';
import { Button, Col,  Row ,Modal, Typography} from 'antd';
import { Badge } from "antd";
import { motion } from "framer-motion";
import Image from 'next/image';
import Tstandart from '../../public/images.webp';
// import Tstandart from '../../public/t-standart.webp';
import Tkomfort from '../../public/t-komfort.webp';
import TkomfortPlus from '../../public/TkomfortPlus.webp';
import Miniven from '../../public/Miniven.webp';



const { Title,} = Typography;

export default function MainTarifs() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    
    <Modal
        title="Принимаем Ваши заявки:"
        open={show}
     //    onOk={handleOk}
     //    confirmLoading={confirmLoading}
        onCancel={handleClose}
	   footer={null}
      >
          <div className='w-full text-center  mb-1'>
              <a title={"phone"} href={"tel:+79297837333"}  style={{ color: '#000', fontSize: "28px"}} className='phone-ya'  rel="nofollow">
                      +7 (929) 783-73-33
              </a>
              <p style={{ color: '#000', fontSize: "12px"}}>Мы всегда на связи! Мы готовы подъехать в любую точку области и забрать Вас, или доставить посылку. <b>Звоните, Все персонально и анонимно.</b></p>
          </div>
          <Button  variant="solid" color='primary'style={{backgroundColor: '#ffd913', color: '#000', width: '100%', textAlign: 'center'}} className='mb-3'> 
              <a title={"Telegramm"} href={"https://t.me/+79297837333"} target="_blank" className='phone-ya'>
                      <Image src={"/telegram.png"} width='44' height='44' alt='phone' style={{display: 'inline-block'}}  rel="nofollow"/>{" "}Написать в Telegram
              </a>
              </Button>
          <Button   variant="solid" color='primary' block
		// style={{color: '#000', width: '100%', textAlign: 'center'}}  
		className='mb-3'>
              <a title={"Whatsapp"} href={"https://wa.me/+79297837333"} target="_blank" className='phone-ya' >
                      <Image src={"/icons8-whatsapp1.png"} width='48' height='48' alt='phone' style={{display: 'inline-block'}}  rel="nofollow"/>{" "}Написать в Whatsapp
              </a>
          
          </Button>


      </Modal>







    <section id='tarifs' className='tarifs  		'>
    <div className="template__wrapper">
    <div className="template__indent">
    <Title level={2} className='sub-title'>Стоимость:</Title>
      <Row className=''>
        <Col xs={24} md={6} className='px-2'>
	   	
			<motion.div className="practics-block box"   
			//  className="box"
			whileHover={{ scale: 1.1 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}>
				<Badge.Ribbon color="red" text={`Sale 5%`}>
					<div className="">
						<h2>Стандарт</h2>
						
						<Image src={Tstandart} alt='такси межгород' className='tarifs__image-tarif' sizes="100vw"/>
						<p><b>Цена:</b> 1000 руб./сут.</p>
						<p>2-х местная палата с балконом</p>
						{/* < */}
						<ul style={{listStyle: "circle",listStylePosition: "inside"}}>
							<li>Завтрак в постель</li>
							<li>Кондиционер</li>
						</ul>
						<Button variant='solid' color="primary" className='tarifs__button'  onClick={handleShow}>Заказать</Button>
					</div>
				</Badge.Ribbon>
			</motion.div>
		
        </Col>
        <Col xs={24} md={6} className='px-2'>
	   	
			<motion.div className="practics-block box"   
			//  className="box"
			whileHover={{ scale: 1.1 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}>
				<Badge.Ribbon color="red" text={`Sale 5%`}>
					<div className="">
						<h2>Стандарт</h2>
						
						<Image src={Tstandart} alt='такси межгород' className='tarifs__image-tarif' sizes="100vw"/>
						<p><b>Цена:</b> 1000 руб./сут.</p>
						<p>2-х местная палата с балконом</p>
						{/* < */}
						<ul style={{listStyle: "circle",listStylePosition: "inside"}}>
							<li>Завтрак в постель</li>
							<li>Кондиционер</li>
						</ul>
						<Button variant='solid' color="primary" className='tarifs__button'  onClick={handleShow}>Заказать</Button>
					</div>
				</Badge.Ribbon>
			</motion.div>
		
        </Col>
        <Col xs={24} md={6} className='px-2'>
	   	
			<motion.div className="practics-block box"   
			//  className="box"
			whileHover={{ scale: 1.1 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}>
				<Badge.Ribbon color="red" text={`Sale 5%`}>
					<div className="">
						<h2>Стандарт</h2>
						
						<Image src={Tstandart} alt='такси межгород' className='tarifs__image-tarif' sizes="100vw"/>
						<p><b>Цена:</b> 1000 руб./сут.</p>
						<p>2-х местная палата с балконом</p>
						{/* < */}
						<ul style={{listStyle: "circle",listStylePosition: "inside"}}>
							<li>Завтрак в постель</li>
							<li>Кондиционер</li>
						</ul>
						<Button variant='solid' color="primary" className='tarifs__button'  onClick={handleShow}>Заказать</Button>
					</div>
				</Badge.Ribbon>
			</motion.div>
		
        </Col>
        <Col xs={24} md={6} className='px-2'>
	   	
			<motion.div className="practics-block box"   
			//  className="box"
			whileHover={{ scale: 1.1 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}>
				<Badge.Ribbon color="red" text={`Sale 5%`}>
					<div className="">
						<h2>Стандарт</h2>
						
						<Image src={Tstandart} alt='такси межгород' className='tarifs__image-tarif' sizes="100vw"/>
						<p><b>Цена:</b> 1000 руб./сут.</p>
						<p>2-х местная палата с балконом</p>
						{/* < */}
						<ul style={{listStyle: "circle",listStylePosition: "inside"}}>
							<li>Завтрак в постель</li>
							<li>Кондиционер</li>
						</ul>
						<Button variant='solid' color="primary" className='tarifs__button'  onClick={handleShow}>Заказать</Button>
					</div>
				</Badge.Ribbon>
			</motion.div>
		
        </Col>
       
      </Row>
    </div>
  </div>
  </section>
</>
  );
}
