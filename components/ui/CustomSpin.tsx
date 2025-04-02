"use client"

import { Spin } from 'antd'


export default function CustomSpin() {

	return (
		<div className="w-full h-screen relative">
			<Spin size="large" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
		</div>
		
	)
}