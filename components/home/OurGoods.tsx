"use client";

import { Col, Row, Typography} from 'antd';
import { motion } from "framer-motion";


const ARROFSVG = [
	['/voices/icons8-ambulance-100.png', 'Визитки', 'Трансфер'], 
	['/voices/icons8-bread-and-rye-100.png', 'Визитки', 'Диета'], 
	['/voices/icons8-walk-100.png', 'Визитки', 'Прогулки'], 
	['/voices/icons8-doctor-100.png', 'Визитки', 'Врач рядом'], 
	['/voices/icons8-clean-100.png', 'Визитки', 'Влажная уборка'], 
	['/voices/icons8-care-100.png', 'Визитки', 'Забота'], 
	['/voices/icons8-bed-100.png', 'Визитки', 'Новое белье'], 
	['/voices/icons8-entertainment-100.png', 'Визитки', 'Развлечения'], 
	['/voices/icons8-bathing-60.png', 'Визитки', 'Помощь в бане'], 
	['/voices/icons8-stargaze-100.png', 'Визитки', 'Наблюдение'], 
	['/voices/icons8-aerobics-100.png', 'Визитки', 'Аэробика'], 
	['/voices/icons8-sun-100.png', 'Визитки', 'Климат'], 
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
                              <img src={item[0]} alt={item[3]}  className="goods__image" />
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
