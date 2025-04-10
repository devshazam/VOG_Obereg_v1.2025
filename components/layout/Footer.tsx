'use client';

import { Col, Row, Typography } from 'antd';

const { Text } = Typography;

export default function Footer() {

  return (

      <footer className='footer'>
        <div className="template__wrapper">
        <div className="template__indent">
          <Row className='' gutter={16}>
            <Col xs={12} md={6}>
            <div className="footer__content-wrapper">
                <p><b>Документы:</b></p>
                <ul>
                  <li><a href='/oferta'>Политика</a></li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="footer__content-wrapper">
                <p><b>Примечания:</b></p>
                <ul>
                  <li>Работаем с юр. лицами</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="footer__content-wrapper">
                <p><b>Адреса:</b></p>
                <ul>
                  <li>ул. Причальная, 116</li>
                  <li>Казахская 25</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="footer__content-wrapper">
                <p><b>Контакты:</b></p>
                <ul>
                  <li><a href='tel:+79608904501'>+7 (960) 890-45-01</a></li>
                  <li><a href='tel:+79608740120'>+7 (960) 874-01-20</a></li>
                  <li><a href='mailto:aline08@mail.ru'>aline08@mail.ru</a></li>
                </ul>
              </div>
            </Col>
          </Row>
		<div className="flex justify-between flex-wrap ">
        		<Text>© 2011 - { new Date().getFullYear() } Пансионат в Волгограде. Все права защищены</Text>
			   <Text><a href='https://github.com/devshazam' target='_blank'>разработка сайта</a></Text>
		</div>
        </div>
        </div>
      </footer>


  );
}
