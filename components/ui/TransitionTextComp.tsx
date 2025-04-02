"use client";

import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { Typography } from 'antd';

const { Title } = Typography;
const titleArray = ['Пансионат', 'Дом', 'Отдых'];


export default function TransitionTextComp() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  
  return (
		<Title>
			<TextTransition springConfig={presets.wobbly}>
				{titleArray[index % titleArray.length]}
			</TextTransition>
		</Title>
  );
}
