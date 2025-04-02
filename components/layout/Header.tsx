"use client";

import React, { useState } from 'react';
import {  Menu, Button, Drawer, Row, Col, Flex } from 'antd';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import AdminButton from '../ui/AdminButton';
import { AuditOutlined, PrinterOutlined, FormatPainterOutlined, ReadOutlined } from '@ant-design/icons';
import Logo from '../../public/logo.svg';
import {MenuOutlined} from '@ant-design/icons';


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <a href="/#poligrafia">Гарантии</a>,
    key: 'poligrafia',
    icon: <ReadOutlined />,
},
{
	label: <a href="/#poligrafia">Услуги</a>,
    key: 'kopirovanie',
    icon: <AuditOutlined />,
  },
  {
    label: <a href="/#poligrafia">Фотографии</a>,
    key: 'pechat',
    icon: <PrinterOutlined />,
  },
  {
    label: <a href="/#poligrafia">Цены</a>,
    key: 'izdeliya',
    icon: <FormatPainterOutlined />,
  },
];


export default function Header() {
	const [open, setOpen] = useState(false);
	
	const showDrawer = () => {
	  setOpen(true);
	};
	
	const onClose = () => {
	  setOpen(false);
	};

  return (
	<header>
        <nav className='header'>
          <div className="header__indent-block">
            <div className="header__fixed-header">
                  <div className="template__wrapper">
                      <Row gutter={16}>
                        <Col  xs={14} md={4}>
                          <div className="flex justify-start items-center w-full h-full"	>
                            <a href='/'>
                              <Image src={Logo} width={30} height={30} className='header__logo' alt='Полиграфия в Волгограде'/>
                            </a>
                          </div>
                        </Col>

                        <Col span={16} className='!hidden md:!block'>
                          <Menu mode="horizontal" items={items}/>
                        </Col>
                        <Col  span={4} className='!hidden md:!block'>
                          <Flex align="center" className='w-full h-full' justify='end'>
                            <AdminButton/>
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
								<div className="mt-4">
									<Flex align="center" className='w-full' justify='center'>
										<AdminButton/>
									</Flex>
								</div>
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
