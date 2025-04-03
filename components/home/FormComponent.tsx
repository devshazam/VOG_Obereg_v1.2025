"use client";

import React, { useState } from 'react';

import { Col, Row,  Button, Form,Typography, Checkbox, Input, Flex  } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';


const { Title} = Typography;
export default function FormComponent() {
	const onFinish = (values: any) => {
	  console.log('Received values of form: ', values);
	};

  return (
    <>
    <div id='order' className='bg-gray-100'>
    <div className="template__wrapper">
          <div className="template__indent">
          <Title level={2} className='sub-title'>Форма связи:</Title>
		<div className='flex justify-center '>
		<Form
			name="login"
			initialValues={{ remember: true }}
			style={{ width: "100%"}}
			onFinish={onFinish}
			//  layout="horizontal"
		>
			<Form.Item
			name="username"
			rules={[{ required: true, message: 'Please input your Username!' }]}
			>
			<Input prefix={<UserOutlined />} placeholder="Username" />
			</Form.Item>
			<Form.Item
			name="password"
			rules={[{ required: true, message: 'Please input your Password!' }]}
			>
			<Input prefix={<LockOutlined />} type="password" placeholder="Password" />
			</Form.Item>
			<Form.Item>
			<Flex justify="space-between" align="center">
				<Form.Item name="remember" valuePropName="checked" noStyle>
				<Checkbox>Remember me</Checkbox>
				</Form.Item>
				<a href="">Forgot password</a>
			</Flex>
			</Form.Item>

			<Form.Item>
			<Button block type="primary" htmlType="submit" >
				Log in
			</Button>
			or <a href="">Register now!</a>
			</Form.Item>
		</Form>
		</div>
          </div>

          </div>
          </div>
    </>
  );
}
