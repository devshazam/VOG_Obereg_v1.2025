"use client";

import React, { useState } from 'react';
import {  Menu, Button, Drawer, Row, Col, Flex } from 'antd';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import AdminButton from '../ui/AdminButton';
import { AuditOutlined, PrinterOutlined, FormatPainterOutlined, ReadOutlined } from '@ant-design/icons';
// import Logo from '../../public/logo.svg';
import Logo from '../../public/logo.webp';
import {MenuOutlined} from '@ant-design/icons';


type MenuItem = Required<MenuProps>['items'][number];




export default function Header() {
	const [open, setOpen] = useState(false);
	
	const showDrawer = () => {
	  setOpen(true);
	};
	
	const onClose = () => {
	  setOpen(false);
	};


	const items: MenuItem[] = [
		{
			label: <a href="/#goods" onClick={() => onClose()}>Услуги</a>,
			key: 'kopirovanie',
			icon: <ReadOutlined />,
		},
		{
		  label: <a href="/#portfolio" onClick={() => onClose()}>Фотографии</a>,
		  key: 'poligrafia',
		  icon: <ReadOutlined />,
	   },
		{
			label: <a href="/#tarifs" onClick={() => onClose()}>Цены</a>,
		  key: 'izdeliya',
		  icon: <ReadOutlined />,
		},
		{
			label: <a href="/#contacts" onClick={() => onClose()}>Контакты</a>,
			key: 'pechat',
			icon: <ReadOutlined />,
		},
	];

  return (
	<header>
        <nav className='header'>
          <div className="header__indent-block">
            <div className="header__fixed-header">
                  <div className="template__wrapper">
                      <Row gutter={16}>
                        <Col  xs={14} md={4}>
                            <a href='/' className=''>
                          <div className="flex justify-start items-center w-full h-full"	>
                              <Image src={Logo} className='header__logo' alt='Полиграфия в Волгограде'/>
						<div className='flex flex-col ml-2 py-1'>
							<span className='text-base text-gray-600 leading-none'><b>ОБЕРЕГ</b></span>
							<hr />
							<span className='text-xs text-gray-600 leading-none'>Пансионат</span>
						</div>
                          </div>
                            </a>
                        </Col>

                        <Col span={17} className='!hidden md:!block'>
				    		<div className="flex items-center h-full w-full">
                          		<Menu mode="horizontal" items={items} className='w-full'/>
						</div>
                        </Col>
                        <Col  span={3} className='!hidden md:!block'>
                          <Flex align="center" className='w-full h-full' justify='end'>
                            г.Волгоград
                          </Flex>
                        </Col>
						<Col  span={10} className=' md:!hidden'>
							<Flex align="center" className='w-full h-full' justify='end'>
								<Button onClick={showDrawer}>
									<MenuOutlined />
								</Button>
							</Flex>
							
							<Drawer title="Меню" onClose={onClose} open={open}>
								<Menu mode="inline" items={items}/>
								{/* <div className="mt-4">
									<Flex align="center" className='w-full' justify='center'>
										<AdminButton/>
									</Flex>
								</div> */}
							</Drawer>
                        </Col>
                      </Row>
                  </div>
                  	{/* <div className="header__run-string-wrapper">
					<div className="header__run-string">
					</div>
				</div> */}
            </div>
          </div>
        </nav>
	</header>
  );
}
