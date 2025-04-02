import * as TableComp from '@/app/admin/[name]/components';

// Функция для перезаписи типов
type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export type TItemOfConfig_dependsOn = Override<TItemOfConfig, { limits: number[] }>

  export type TItemOfConfig = 
  {
    label: string,
    pH: string, // Ширина
    name: string,
	limits?: number[],
    defaultValue: string | number,
    arrValues?: {
      value: number,
      label: string,
    }[],
    depends?: string,
    multiple?: boolean
};

export type TCommonConfig = 
{
	params?: any,
	rus: string,
	mandatory: TItemOfConfig[], 
    optional?: TItemOfConfig[], 
    dependsOn?: TItemOfConfig_dependsOn[], // ТОЛЬКО inpit (!!! не select)
    bagety?: boolean,
    numbersMarks: {[key: number]: string}, 
    image: boolean, 
	metaData: {
		title: string,
		description: string,
		h1: string,
		text: string
	},
	note?: string,
	discount: boolean,
	table: keyof typeof TableComp | false,
	nested?: any,
}
export type TObjectOfCost= 
  {
	porezkaPosterkaCost: number,
	prokleikaCost: number,
	petCost: number,
    bannerCost?: number[][],
    luversCost?: number,
    glueCost?: number,
    perforaciaCost?: number,

    vizitkiCost?: number[][][][],

    samokleykiCost?: number[][],
    porezkaCost: number[],
    plastickCost?: number[]

    podramnikCost?: number[],
    holstyCost?: number[][],
    jobCost?: number[],

    formatToPrice?: number[],
    flagiCost?: number[],
    salesArray?: number[],
    drevkoCost?: number,
    overlokCost?: number,

    squareCost?: number[],
    posterkaCost?: number[][][],

    laminaciaCost?: number[][][],

    broschurovkaCost?: number[][],

    photopechatCost?: number[][],
    raspechatkaCost?: number[][][][][],

    skanirovanieCost?: number[][][],

    photonadocCost?: number[],
    chertejiCost?: number[][][],
    falcovkaCost?: number[],
    rizografCost?: number[][][],
    colorCost?: number[],
	magnitikiCost?: number[][],
    shtenderiCost?: number[],
	threedCost?: number[],
	ploterkaCost?: number[][],
    znachkiCost?: number[][],
    plastikCost?: number[],
    formatCost?: number[]
  };


  export type TCardData = 
  {
    // name?: string,
    width?: number,
    height?: number,
    number: number,
    // Баннер
    density?: number,
    luversovanie?: number,
    luversy?: number,
    prokleika?: number,
    perforacia?: number,
    // Визитки
    sides?: number,
    bumaga?: number,
    laminacia?: number,
    vizitnumber?: number,
    // Самоклейка
    porezka?: number,
    plastick?: number,
    type?: number,
    // Холста
    strach?: number,
    // Флаги
    drevko?: number ,
    overlock?: number,
    // Ксерокопия
    aformat?: number,
    color?: number,
    // Ламинация
    coating?: number,
    depth?: number, 
    // Брошюровка
    stuff?: number,
    cloth?: number,
    // Фальцовка
    falc?: number,
    // Багеты
    pet?: number,
    back?: number,
    glass?: number,
    subType?: number,
	weight?: number,
	volume?: number,

    descriptionCard: string,
    office: number,
  };
