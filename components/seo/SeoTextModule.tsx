'use client'
import { Divider, Typography } from "antd"
// import * as configuration from '@/config/config';
import { TCommonConfig } from '@/lib/types/cardsTypes';

export default function SeoTextModule({ name, productConfig }: { name: string, productConfig: TCommonConfig }) {

	const { Title, Text } = Typography

	return(
		<div className="mt-12">
			{/* <Divider style={{ borderColor: '#7cb305' }} className="!mt-12"></Divider> */}
			{/* <Title level={1}>{configuration[name as keyof typeof configuration]?.metaData?.h1}</Title>
			<Text>{configuration[name as keyof typeof configuration]?.metaData?.text}</Text> */}
		</div>
	)
};