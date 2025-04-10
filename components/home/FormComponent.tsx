"use client";

import React, { useState } from 'react';

import { Col, Row,  Button, DatePicker ,Typography, Checkbox, Input, Flex,ConfigProvider  } from 'antd';

import { PhoneOutlined, UserOutlined } from '@ant-design/icons';

import locale from 'antd/locale/ru_RU';
import dayjs from 'dayjs';

import 'dayjs/locale/ru';

const { RangePicker } = DatePicker;


const { Title} = Typography;

export default function FormComponent() {

	

  return (
    <>
    <div id='contacts' className='bg-gray-100'>
    <div className="template__wrapper">
          <div className="template__indent">
          <Title level={2} className='sub-title'>Контакты:</Title>
		<Row gutter={[16, 16]}>
			<Col xs={24} md={12}>
				<div className="flex flex-col gap-y-4">
					<p className='text-base'><b>🎉Пансионат для малоподвижных пациентов:</b></p>
					<p  className='text-base'>Телефоны: </p>
					<ul className='list-disc list-inside'>
						<li><a href='tel:+79608904501'>+7 (960) 890-45-01</a> <a href={"https://wa.me/+79608904501"} >(WatsApp</a>, <a href="https://t.me/+79608904501">Telegram)</a></li>
						<li><a href='tel:+79608740120'>+7 (960) 874-01-20</a></li>
					</ul>
					<p className='text-base'>Email: <a href='mailto:aline08@mail.ru'>aline08@mail.ru</a></p>
					<p className='text-base'>Адреса в Волгограде:</p>
					<ul className='list-disc list-inside'>
						<li>ул. Причальная, 116</li>
					</ul>
					
				</div>
			</Col>
			<Col xs={24} md={12}>
			<div className="flex flex-col gap-y-4">
			<p className='text-base'><b>Заявка на консультацию:</b></p>
			<form action={"https://formspree.io/f/xjkvkdjj"} method="post">
				<div className="flex flex-col gap-y-4">
					<Input prefix={<UserOutlined />} placeholder="Ваше имя" name='name'/>

					<Input prefix={<PhoneOutlined />}  placeholder="Password" name='phone' />

					<ConfigProvider locale={locale}>
						{/* <DatePicker defaultValue={dayjs('2015-01-01', 'YYYY-MM-DD')} /> */}
						<RangePicker name='date' placeholder={["Дата от", "Дата до"]}  style={{ width: '100%' }}/>
					</ConfigProvider>

					<Flex justify="space-between" align="center">

						<Checkbox checked>Согласен с политикой конфиденциальности</Checkbox>

					</Flex>
	
					<Button block type="primary" htmlType="submit" >
						Отправить заявку
					</Button>
					{/* <button type='submit'>ff</button> */}
					</div>
					</form>
					</div>
			</Col>
		</Row>
          </div>

          </div>
          </div>
    </>
  );
}
