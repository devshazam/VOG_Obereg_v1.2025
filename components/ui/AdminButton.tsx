"use client";

import React from "react";


import type { MenuProps } from "antd";
import { Dropdown, Button, Badge ,Tooltip} from "antd";
import { ShoppingCartOutlined, DropboxOutlined, LogoutOutlined,WifiOutlined } from '@ant-design/icons'; // {ShoppingCartOutlined}


export default function AdminButton() {



    return (
        <>

		<div className="flex justify-between align-center w-28">
			<Tooltip title="Заказы" placement="bottomRight">
				<a href="/admin"><DropboxOutlined style={{ fontSize: '24px'}}/></a>
			</Tooltip>
			<Tooltip title="Корзина" placement="bottomRight">
				<a href="/cart">
					<ShoppingCartOutlined style={{ fontSize: '24px'}}/>
				</a>
			</Tooltip>
			<Tooltip title="Выход" placement="bottomRight">
				<LogoutOutlined  style={{ fontSize: '22px',}}/>
			</Tooltip>
		</div>
	</>

    );
}
