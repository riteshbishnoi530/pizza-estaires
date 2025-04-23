import { HappyHome, IngrediantFrais, LivraisonRapide, PaiementSimple } from "./icons";

export interface NOTRE_PIZZERIA_CARDS{
  icon:string,
  heading:string
  Description:string
}
export const HEADER_LIST = [
    { name: 'Pizzas', href: '#' },
    { name: 'Tacos', href: '#' },
    { name: 'Burger', href: '#' },
    { name: 'Menus', href: '#' },
    { name: 'Tex-Mex', href: '#' },
  ];
  

export const NOTRE_PIZZERIA_CARDS = [
  {
    icon: IngrediantFrais,
    heading: "Ingrédients frais et de qualité",
    description: "Nous sélectionnons uniquement les meilleurs ingrédients pour vous offrir des plats délicieux et authentiques."
  },
  {
    icon: PaiementSimple,
    heading: "Paiement simple et sécurisé",
    description: "Commandez en ligne et payez en un clic, en toute sécurité."
  },
  {
    icon: LivraisonRapide,
    heading: "Livraison rapide et zen",
    description: "Recevez vos plats préférés à domicile, rapidement et sans stress."
  },
  {
    icon: HappyHome,
    heading: "Happy at home ",
    description: "Profitez de vos repas confortablement chez vous, avec des saveurs qui raviront toute la famille."
  }
]

export const PIZZA_TYPES_LIST = [
  {
    image: "/assets/images/pizza-faite.webp",
    heading:"Pizza faite maison avec des ingrédients frais",
    description:"Découvrez nos pizzas préparées avec soin, à base de produits frais et de qualité."
  },
  {
    image: "/assets/images/livaison-pizza.webp",
    heading:"Livraison de pizzas et plats faits maison près de chez vous",
    description:"Commandez en ligne et profitez d’une livraison rapide dans votre ville."
  },
  {
    image: "/assets/images/hygiene-pizza.webp",
    heading:"Hygiène et qualité : notre engagement au quotidien",
    description:"Chaque plat est préparé dans le respect des normes strictes d’hygiène et de sécurité alimentaire."
  },
  {
    image: "/assets/images/pizza-faite.webp",
    heading:"Pizza faite maison avec des ingrédients frais",
    description:"Découvrez nos pizzas préparées avec soin, à base de produits frais et de qualité."
  },
  {
    image: "/assets/images/livaison-pizza.webp",
    heading:"Livraison de pizzas et plats faits maison près de chez vous",
    description:"Commandez en ligne et profitez d’une livraison rapide dans votre ville."
  },
  {
    image: "/assets/images/hygiene-pizza.webp",
    heading:"Hygiène et qualité : notre engagement au quotidien",
    description:"Chaque plat est préparé dans le respect des normes strictes d’hygiène et de sécurité alimentaire."
  }
]

export const PRODUCT_LIST = [
     "/assets/images/fromages.webp",
     "/assets/images/fromages2.webp",
     "/assets/images/fromages3.webp",
     "/assets/images/fromages.webp",
     "/assets/images/fromages2.webp",
  
]