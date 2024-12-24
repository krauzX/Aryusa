export const categoryMenuList = [
  {
    id: 1,
    title: "Ayurvedic",
    src: "/ayurvedic-bowl.svg",
    href: "/shop/ayurvedic",
  },
  {
    id: 2,
    title: "Allopathic",
    src: "/Allopathic.svg",
    href: "/shop/allopathic",
  },
  {
    id: 3,
    title: "Cosmetics",
    src: "/Cosmetics.svg",
    href: "/shop/Cosmetics",
  },
  {
    id: 4,
    title: "H",
    src: "/camera icon.png",
    href: "/shop/H",
  },
  {
    id: 5,
    title: "w",
    src: "/smart watch.png",
    href: "/shop/w",
  },
];

export const incentives = [
  {
    name: "Free Shipping",
    description:
      "Our shipping is completely free and that is completely good for our customers.",
    imageSrc: "/shipping_icon.png",
    svgSrc: "/shipping_icon.gif",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our support is working all day and night to answer any question you have.",
    svgSrc: "/support_icon.gif",
    imageSrc: "/support_icon.png",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "We have super fast shopping experience and you will enjoy it.",
    svgSrc: "/shopping_cart.gif",
    imageSrc: "/shopping_cart.png",
  },
];

export const navigation = {
  sale: [
    { name: "Discounts", href: "#" },
    { name: "News", href: "#" },
    { name: "Register Discounts", href: "#" },
  ],
  about: [
    { name: "About Aryusa", href: "/" },
    { name: "Work With Us", href: "#" },
    { name: "Company Profile", href: "#" },
  ],
  buy: [
    { name: "Aryusa Premium Membership", href: "#" },
    { name: "Terms Of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Complaints", href: "#" },
    { name: "Partners", href: "#" },
  ],
  help: [
    { name: "Contact", href: "#" },
    { name: "How to Buy at Aryusa", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export const reviews = [
  {
    id: 1,
    text: "Amazing product! It has changed my life for the better.",
    author: "John Doe",
  },
  {
    id: 2,
    text: "The best investment I've made in my health.",
    author: "Jane Smith",
  },
  {
    id: 3,
    text: "Highly recommend to anyone looking to improve their well-being.",
    author: "Emily Johnson",
  },
];

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
};

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
