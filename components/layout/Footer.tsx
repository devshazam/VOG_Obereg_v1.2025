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
                  <li><a href='/oferta'>Договор оферты</a></li>
                  <li><a href='/privacy'>Конфиденциальность</a></li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="footer__content-wrapper">
                <p><b>Примечания:</b></p>
                <ul>
                  <li>Работаем с юр. лицами по тендерным закупкам</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="footer__content-wrapper">
                <p><b>Адреса:</b></p>
                <ul>
                  <li>Петропавловская 87</li>
                  <li>Казахская 25</li>
                  <li>2-я Динамовская 6 (производство)</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="footer__content-wrapper">
                <p><b>Контакты:</b></p>
                <ul>
                  <li><a href='tel:+79093802519'>+7(909) 380-25-19</a></li>
                  <li><a href='tel:+78442599616'>+7 (8442) 59-91-61</a></li>
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
