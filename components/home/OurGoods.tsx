"use client";

import { Col, Row, Typography} from 'antd';
import { motion } from "framer-motion";


const ARROFSVG = [
	['/icons8-hospital-bed-50', 'Визитки', 'Новая кровать'], 
	['/icons8-hospital-bed-50', 'Визитки', 'Новая кровать'], 
	['/icons8-hospital-bed-50', 'Визитки', 'Новая кровать'], 
	['/icons8-hospital-bed-50', 'Визитки', 'Новая кровать'], 
	['/icons8-hospital-bed-50', 'Визитки', 'Новая кровать'], 
	['/icons8-hospital-bed-50', 'Визитки', 'Новая кровать'], 
	['/icons8-hospital-bed-50', 'Визитки', 'Новая кровать'], 
	['/icons8-hospital-bed-50', 'Визитки', 'Новая кровать'], 
	['/icons8-hospital-bed-50', 'Визитки', 'Новая кровать'], 
	['/icons8-hospital-bed-50', 'Визитки', 'Новая кровать'], 
	['/icons8-hospital-bed-50', 'Визитки', 'Новая кровать'], 
	['/icons8-hospital-bed-50', 'Визитки', 'Новая кровать'], 
               //    ['plackaty', '/banner', 'Банеры', 'изготовление баннеров'],
               //    ['naklejki', '/samokleyki', 'Самоклейки', 'изготовление наклеек'],
               //    ['listovki', '/posterka', 'Постеры', 'изготовление постеров'],
               //    ['broshjury', '/broschurovka', 'Брошюры', 'изготовление брошюр'], 
               //    ['buklety', '/cherteji', 'Чертежи', 'копирование чертежей'], 
               //    ['flaery', '/photopechat', 'Печать', 'печать на бумаге'],
               //    ['priglashenija', '/laminacia', 'Ламинация', 'ламинирование'],
               //    ['otkrytki', '/raspechatka', 'Распечатка', 'изготовление открыток'],
               //    ['pakety', '/plastik', 'Пластик', 'печать на пластике'],
               //    ['katalogi', '/rizograf', 'Ризограф', 'печать на ризографе'],
               //    ['prezentacii', '/holsty', 'Холст', 'изготовление презентации'],
                ];

				
export default function OurGoods() {
	const { Text, Title } = Typography;
					
  	return (
        <>
          <Title  level={2}>Включено в стоимость:</Title>
          <Row gutter={16}>
            {
              ARROFSVG.map((item: string[], index: number) => {return (
                    <Col xs={12} md={4} key={index}>
                      <motion.div className="goods__motion-block"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                          {/* <a href={item[1]}> */}
                            <p style={{fontSize:'11px'}}>{item[2]}</p>
                            <div className="template__img-wrap">
                              <img src={`/good${item[0]}.png`} alt={item[3]}  className="goods__image" />
                            </div>
                          {/* </a> */}
                      </motion.div>
                  </Col>
              );
            }) 

            }
            
          </Row>
        </>

  );
}
