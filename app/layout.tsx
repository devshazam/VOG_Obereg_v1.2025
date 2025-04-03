import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import "@/lib/styles/styles.scss";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatButtonCustom from "../components/ui/FloatButtonCustom";

// import Test from "../components/ui/Test";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import '@ant-design/v5-patch-for-react-19';

const сomfortaa = Comfortaa({
//   variable: "--font-сomfortaa",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Пансионат для пожилых - Оберег | город Волгоград!",	
  description: "Доступный пансионат для малоподвижных пациентов после инсульта в Волгограде. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru"  className={сomfortaa.className}>
      <body>
		<AntdRegistry>
			<ConfigProvider
				theme={{
				token: {
					colorPrimary: '#45aece',
					borderRadius: 2,
					colorTextBase: '#242424',
					fontFamily: 'inherit',
					fontWeightStrong: 600,
					fontSize: 14,
					// lineWidth: 600,
					colorBorder: '#8b8b8b',
					colorTextPlaceholder: '#afafaf',
					colorLink: '#45aece',
					colorFillTertiary: '#a3a2a2', // Цвет слайдера
				},
				components: {
					Divider: {
					orientationMargin: 0,
					textPaddingInline: 1,
					},
					Slider: {
					railBg: '#8b8b8b',
					trackHoverBg: '#45aece',
					trackBg: '#45aece',
					},
				},
				}}
						>
				<Header />
					<main>
						{children}
					</main>
				<Footer />
				<FloatButtonCustom />
			</ConfigProvider>
		</AntdRegistry>
      </body>
    </html>
  );
}
