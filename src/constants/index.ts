import imageOne from "@/../public/images/imageOne.png";
import imageTwo from "@/../public/images/imageTwo.png";
import imageThree from "@/../public/images/imageThree.png";
import imageFour from "@/../public/images/imageFour.png";
import imageFive from "@/../public/images/imageFive.png";
import imageSix from "@/../public/images/imageSix.png";
import imageSeven from "@/../public/images/imageSeven.png";
import imageEight from "@/../public/images/imageEight.png";

export const menuItems = [
  {
    title: "خودرو",
    href: "#",
  },
  {
    title: "موتور سیکلت",
    href: "#",
  },
  {
    title: "همکار من",
    href: "#",
  },
];

export const breadcrumbs = [
  {
    title: "همکار",
    href: "#",
  },
  {
    title: "همه آگهی ها",
    href: "#",
  },
  {
    title: "خودرو",
    href: "#",
  },
];

export const dropdowns = ["قیمت", "زمان", "مکان"];

export const infoCars = [
  {
    name: "اتوماتیک اسپرت لاکچری",
    price: 2800000000,
    model: 1400,
    brand: "مدیران خودرو",
    percentage: "5.8",
    time: 8,
    type: "قیمت بازار",
  },
  {
    name: "اتوماتیک اسپرت لاکچری",
    price: 3250000000,
    model: 1403,
    brand: "مدیران خودرو",
    percentage: "-5.8",
    time: 5,
    type: "قیمت بازار",
  },
  {
    name: "اتوماتیک اسپرت لاکچری",
    price: 1578000000,
    model: 1398,
    brand: "مدیران خودرو",
    percentage: "3.2",
    time: 2,
    type: "قیمت کارخانه",
  },
];

export const infoCarsTwo = [
  {
    name: "آمیکو دو کابین آسنا",
    price: 123456789,
    model: "دنده ای ، 1401",
    percentage: "5.8",
    time: 3,
    type: "قیمت بازار",
  },
  {
    name: "آمیکو دو کابین آسنا",
    price: 123456789,
    model: "اتوماتیک ، 1400",
    percentage: "-8.2",
    time: 3,
    type: "قیمت کارخانه",
  },
  {
    name: "آمیکو دو کابین آسنا",
    price: 123456789,
    model: "دنده ای ، 1401",
    percentage: "5.8",
    time: 3,
    type: "قیمت بازار",
  },
];

export const filterItems = [
  {
    placeholder: "برند",
    value: ["تویوتا", "تسلا", "پورشه", "بنز"],
  },
  {
    placeholder: "مدل",
    value: ["کراس اوور", "کوپه", "اسپورت", "سدان"],
  },
  {
    placeholder: "سال تولید",
    value: ["1403 - 1400", "1400 - 1395", "1395 - 1390", "1390 - 1385"],
  },
  {
    placeholder: "قیمت",
    value: [
      "حداکثر یک میلیارد",
      "حداکثر هفتصد و پنجاه میلیون",
      "حداکثر پانصد میلیون",
      "حداکثر دویست و پنجاه میلیون",
    ],
  },
  {
    placeholder: "کارکرد",
    value: [
      "حداکثر سی هزار",
      "حداکثر شصت هزار",
      "حداکثر نود هزار",
      "حداکثر صد و بیست هزار",
    ],
  },
  {
    placeholder: "شهر",
    value: ["تهران", "شیراز", "اصفهان", "مشهد"],
  },
  {
    placeholder: "رنگ",
    value: ["مشکی", "سفید", "نقره ای"],
  },
  {
    placeholder: "شاسی",
    value: ["نردبانی", "لوله‌ای", "یکپارچه", "فضایی"],
  },
  {
    placeholder: "گیربکس",
    value: ["دستی", "اتوماتیک", "نیمه اتوماتیک"],
  },
  {
    placeholder: "وضعیت بدنه",
    value: ["بدون رنگ", "رنگ شده"],
  },
  {
    placeholder: "سوخت",
    value: ["بنزین", "گاز", "دیزل", "برق"],
  },
  {
    placeholder: "تعداد سیلندر",
    value: ["8 عدد", "6 عدد", "4 عدد"],
  },
  {
    placeholder: "حجم موتور",
    value: ["3 الی 4 لیتر", "2 الی 3 لیتر", "1 الی 2 لیتر"],
  },
  {
    placeholder: "دیفرانسیل",
    value: ["توزیع گشتاور", "لغزش محدود", "قفل‌شونده", "باز"],
  },
  {
    placeholder: "کشور سازنده",
    value: ["آلمان", "ژاپن", "آمریکا", "ایران"],
  },
  {
    placeholder: "موارد خاص",
    value: ["کارشناسی شده", "کارشناسی نشده"],
  },
];

export const cars = [
  {
    image: imageOne,
    name: "آئودی، R8",
    time: 10,
    model: 2019,
    usage: 34000,
    type: "اتوماتیک",
    isStore: true,
    location: "تهران فلان منطقه",
    price: 1600000000,
  },
  {
    image: imageTwo,
    name: "بنز، Z8",
    time: 38,
    model: 2022,
    usage: 12000,
    type: "دستی",
    isStore: false,
    location: "تهران فلان منطقه",
    price: 1220000000,
  },
  {
    image: imageThree,
    name: "تسلا، f8",
    time: 53,
    model: 2017,
    usage: 22000,
    type: "دستی",
    isStore: false,
    location: "تهران فلان منطقه",
    price: 1125000000,
  },
  {
    image: imageFour,
    name: "تویوتا کرولا",
    time: 10,
    model: 2023,
    usage: 1000,
    type: "اتوماتیک",
    isStore: true,
    location: "تهران فلان منطقه",
    price: 2310000000,
  },
  {
    image: imageFive,
    name: "بنز، S500",
    time: 39,
    model: 2012,
    usage: 85000,
    type: "اتوماتیک",
    isStore: false,
    location: "تهران فلان منطقه",
    price: 900000000,
  },
  {
    image: imageSix,
    name: "پورشه ماکان",
    time: 2,
    model: 2021,
    usage: 5000,
    type: "دستی",
    isStore: true,
    location: "تهران فلان منطقه",
    price: 4400000000,
  },
  {
    image: imageSeven,
    name: "پورشه پانامرا",
    time: 24,
    model: 2017,
    usage: 29000,
    type: "اتوماتیک",
    isStore: false,
    location: "تهران فلان منطقه",
    price: 3380000000,
  },
  {
    image: imageEight,
    name: "تسلا، A100",
    time: 58,
    model: 2023,
    usage: 500,
    type: "اتوماتیک",
    isStore: false,
    location: "تهران فلان منطقه",
    price: 4410000000,
  },
];
