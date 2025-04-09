"use client";

import { FloatButton, } from 'antd';
import { CommentOutlined, PhoneOutlined } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import Icon, { HomeOutlined } from '@ant-design/icons';
// import { useUserStore } from "@/stores";
import TelegramSvg from "../../public/icons8-telegram.svg";
import ViberSvg from "../../public/icons8-whatsapp.svg";
import PhoneSvg from "../../public/icons8-phone.svg";
import Image from 'next/image';

export default function FloatButtonCustom(){


  return (
    <FloatButton.Group
    trigger="click"
    type="primary"
    style={{ insetInlineEnd: 24 }}
    icon={<PhoneOutlined />}
  >

    <a href={"https://wa.me/+79608904501"} ><FloatButton icon={<Image src={ViberSvg} alt='kopi34-viber'/>}/></a>
    <a href="https://t.me/+79608904501"><FloatButton icon={<Image src={TelegramSvg} alt='kopi34-telegram'/>}/></a>
    <a href='tel:+79608904501'><FloatButton icon={<Image src={PhoneSvg} alt='kopi34-phone'/>}/></a>
   
  </FloatButton.Group>
  );
}
