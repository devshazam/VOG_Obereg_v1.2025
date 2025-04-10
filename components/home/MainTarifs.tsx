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
              <a title={"phone"} href={"tel:+79608904501"}  style={{ color: '#000', fontSize: "28px"}} className='phone-ya'  rel="nofollow">
		    +7 (960) 890-45-01
              </a>
              <p style={{ color: '#000', fontSize: "12px"}}>Мы всегда на связи! Мы готовы подъехать в любую точку Волгограда и забрать вас. <b>Звоните, Все персонально и анонимно.</b></p>
          </div>
          <Button  variant="solid" color='primary'style={{backgroundColor: '#ffd913', color: '#000', width: '100%', textAlign: 'center'}} className='mb-3'> 
              <a title={"Telegramm"} href={"https://t.me/+79608904501"} target="_blank" className='phone-ya'>
                      <Image src={"/icons8-telegram.svg"} width='20' height='20' alt='phone' style={{display: 'inline-block'}}  rel="nofollow"/>{" "}Написать в Telegram
              </a>
              </Button>
          <Button   variant="solid" color='primary' block
		// style={{color: '#000', width: '100%', textAlign: 'center'}}  
		className='mb-3'>
              <a title={"Whatsapp"} href={"https://wa.me/+79608904501"} target="_blank" className='phone-ya' >
                      <Image src={"/icons8-whatsapp.svg"} width='22' height='22' alt='phone' style={{display: 'inline-block'}}  rel="nofollow"/>{" "}Написать в Whatsapp
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
				<Badge.Ribbon color="red" text={`Sale 2%`}>
					<div className="">
						<h2>Комфоорт №1</h2>
						
						<Image src={Tstandart} alt='такси межгород' className='tarifs__image-tarif' sizes="100vw"/>
						<p className='text-xs'><b>Цена:</b> от 1000 руб./сут.</p>
						{/* < */}
						<ul  className='text-xs' style={{listStyle: "circle",listStylePosition: "inside"}}>
							<li><b>Для самостоятельных пациентов</b></li>
							<li>Проживание в 4-5 местной комнате</li>
							<li>5-ти разовое питание</li>
							<li> Стирка одежды и белья</li>
							<li>Дневное наблюдение (сиделка)</li>
							<li>Все досуговые программы</li>
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
				<Badge.Ribbon color="purple" text={`Sale 3%`}>
					<div className="">
						<h2>Комфоорт №2</h2>
						
						<Image src={Tstandart} alt='такси межгород' className='tarifs__image-tarif' sizes="100vw"/>
						<p className='text-xs'><b>Цена:</b> от 1100 руб./сут.</p>
						{/* < */}
						<ul  className='text-xs' style={{listStyle: "circle",listStylePosition: "inside"}}>
							<li><b>Для лежачих пациентов </b></li>
							<li>Все, что содержит предыдущий тариф</li>
							<li>Дневное и ночное наблюдение (сиделка)</li>
							<li>Стрижка, бритье, маникюр, педикюр</li>
							<li>Помощь в передвижении и приеме пищи</li>
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
				<Badge.Ribbon color="orange" text={`Sale 4%`}>
					<div className="">
						<h2>Комфоорт №3</h2>
						
						<Image src={Tstandart} alt='такси межгород' className='tarifs__image-tarif' sizes="100vw"/>
						<p className='text-xs'><b>Цена:</b> от 1100 руб./сут.</p>
						{/* < */}
						<ul  className='text-xs' style={{listStyle: "circle",listStylePosition: "inside"}}>
							<li><b>Для пациентов с деменцией </b></li>
							<li>Все, что содержит предыдущий тариф</li>
							
							<li>Проживание в 2-3 местной комнате</li>
							<li>Психологическая поддержка</li>
							<li>Контроль приема лекарств</li>
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
						<h2>Комфоорт №4</h2>
						
						<Image src={Tstandart} alt='такси межгород' className='tarifs__image-tarif' sizes="100vw"/>
						<p className='text-xs'><b>Цена:</b> от 1200 руб./сут.</p>
						{/* < */}
						<ul  className='text-xs' style={{listStyle: "circle",listStylePosition: "inside"}}>
							<li><b>Для пациентов с ПШБК </b></li>
							<li>Все, что содержит предыдущий тариф</li>
							<li>Помощь в водных процедурах (купание)</li>
							<li>Замена подгузников</li>
							<li>Перевязка</li>
							<li>Развитие мелкой моторики</li>
							<li>Аэробика и занятие на тренажерах</li>
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
