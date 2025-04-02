"use client"

import { Result,Button } from 'antd'


export default function FeedBack({ info,button = true }: { info: string, button?: boolean}) {

	return (
		<Result
			status="warning"
			title={info}
			subTitle="Просто перейдите на главную:"
			extra={button ? <Button type="primary" href='/'>На главную</Button> : <></>}
	   />
	)
}