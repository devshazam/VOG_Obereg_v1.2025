'use client'

import Image, { StaticImageData  } from 'next/image';


interface CardProps {
  src: StaticImageData,
  alt: string,
  title: string,
  text?: string,
}

export default function Card({src, alt, title}: CardProps) {


  return (
    <div className='mySwiper__wrapper'>
      <Image src={src} alt={alt} className='tarifs__image-tarif' sizes="100vw"/>
            <div className='mySwiper__wrapper-text'>
              <p>{title}</p>
            </div>
          </div>

  );
}
