"use client";

import { Col, Row , Typography, Image} from 'antd';

const { Title} = Typography;


export default function Portfolio() {
  
  return (
  
    <>
          <Title level={2} className='sub-title'>Наша жизнь:</Title>
            <Row className='mt-10'>
                <Col xs={24} md={8}>
                    <Image src='/preview_4503599640122515_df10.jpg' alt='Портфолио 1' width="100%" className="p-6 w-full h-auto"/>
                </Col>
                <Col xs={24} md={8}>
                    <Image src='/preview_4503599640122515_df10.jpg'  alt='Портфолио 2' width="100%" className="p-6 w-full h-auto"/>
                </Col>
                <Col xs={24} md={8}>
                    <Image src='/preview_4503599640122515_df10.jpg'  alt='Портфолио 3' width="100%" className="p-6 w-full h-auto"/>
                </Col>
                <Col xs={24} md={8}>
                    <Image src='/preview_4503599640122515_df10.jpg'  alt='Портфолио 4' width="100%" className="p-6 w-full h-auto"/>
                </Col>
                <Col xs={24} md={8}>
                    <Image src='/preview_4503599640122515_df10.jpg'  alt='Портфолио 5' width="100%" className="p-6 w-full h-auto"/>
                </Col>
                <Col xs={24} md={8}>
                    <Image src='/preview_4503599640122515_df10.jpg'  alt='Портфолио 6' width="100%" className="p-6 w-full h-auto"/>
                </Col>
            </Row>
</>
  );
}

  


