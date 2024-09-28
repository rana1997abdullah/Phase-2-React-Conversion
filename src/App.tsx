import { useEffect, useState } from "react";

import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";

interface Props {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}
function App() {
  const [items, setItems] = useState<Props[]>([
    {
      id: 1,
      title: "A14 Pro Max",
      price: 158.99,

      rating: 4,

      category: "electronics",
      image: "./images/card1.jpg",
    },
    {
      id: 2,
      title: "Samsung Galaxy S24 Ultra Cell",

      price: 1049.99,
      rating: 4,

      category: "electronics",
      image: "./images/card2.jpg",
    },

    {
      id: 10,
      title: "Samsung Galaxy A15",

      price: 147.99,

      rating: 3.5,

      category: "electronics",
      image: "./images/card3.jpg",
    },
    {
      id: 11,
      title: "Samsung Galaxy A35",

      price: 324.99,

      rating: 5,

      category: "electronics",
      image: "./images/card4.jpg",
    },
    {
      id: 12,
      title: "Samsung Galaxy S24+ Plus Cell",

      price: 999.99,

      rating: 4.5,

      category: "electronics",
      image: "./images/card5.jpg",
    },

    {
      id: 16,
      title: "Samsung Galaxy A50s",

      price: 124.5,

      rating: 3.5,

      category: "electronics",
      image: "./images/card6.jpg",
    },
    {
      id: 17,
      title: "Samsung Galaxy A04e",

      price: 88.5,

      rating: 4.5,

      category: "electronics",
      image: "./images/card7.jpg",
    },
    {
      id: 18,
      title: "Blod K50",

      price: 199.99,

      rating: 5,

      category: "electronics",
      image: "./images/card8.jpg",
    },
    {
      id: 19,
      title: "I24 Ultra 5G",

      price: 189.99,

      rating: 5,

      category: "electronics",
      image: "./images/card9.jpg",
    },
    {
      id: 20,
      title: "Samsung Galaxy Z Fold 6 AI Cell Phone",

      price: 1499.99,

      rating: 4.5,

      category: "electronics",
      image: "./images/card10.jpg",
    },
    {
      id: 21,
      title: "SAMSUNG Galaxy Tab A9+ Tablet",
      price: 219,
      category: "computers",
      image: "./images/card11.jpg",
      rating: 4.5,
    },
    {
      id: 22,
      title: "ARZOPA Portable Monitor, 15.6'' 1080P FHD Laptop",
      price: 92.99,
      category: "computers",
      image: "./images/card12.jpg",
      rating: 3,
    },
    {
      id: 23,
      title: "Sceptre 24-inch LED Monitor",
      price: 85.99,
      category: "computers",
      image: "./images/card13.jpg",
      rating: 3.5,
    },
    {
      id: 24,
      title: "HP Newest 14 Ultral Light Laptop",
      price: 246.99,
      category: "computers",
      image: "./images/card14.jpg",
      rating: 4,
    },
    {
      id: 25,
      title: "ASUS ROG Strix G16 (2024) Gaming Laptop",
      price: 1277.99,
      category: "computers",
      image: "./images/card15.jpg",
      rating: 4.5,
    },
    {
      id: 26,
      title: "HP FHD 23.8 inch 24mh Computer Monitor",
      price: 199.99,
      category: "computers",
      image: "./images/card16.jpg",
      rating: 3.5,
    },
    {
      id: 27,
      title: "Samsung 870 EVO SATA III SSD 1TB 2.5” Internal Solid State Drive",
      price: 91.9,
      category: "computers",
      image: "./images/card17.jpg",
      rating: 4.5,
    },
    {
      id: 28,
      title: "Dell 31.5 inch S3222HN Monitor ",
      price: 169.99,
      category: "computers",
      image: "./images/card18.jpg",
      rating: 4.5,
    },
    {
      id: 29,
      title:
        "F156P1 Portable Monitor | 1080P | 15.6inch | USB-C, HDMI | Laptop",
      price: 85.99,
      category: "computers",
      image: "./images/card19.jpg",
      rating: 4.5,
    },
    {
      id: 30,
      title: "Sceptre 24.5 inch Gaming Monitor ",
      price: 144,
      category: "computers",
      image: "./images/card20.jpg",
      rating: 4.5,
    },
    {
      id: 31,
      title: "Dell SE2422HX 24 inch Monitor",
      price: 120,
      category: "computers",
      image: "./images/card21.jpg",
      rating: 4,
    },
    {
      id: 32,
      title: "Acer Nitro V Gaming Laptop | Intel Core i5-13420H",
      price: 759.5,
      category: "computers",
      image: "./images/card22.jpg",
      rating: 4.5,
    },
    {
      id: 33,
      title: "ProCase 2 Pack Screen Protector for iPad 10th Generation 2022",
      price: 6.9,
      category: "computers",
      image: "./images/card23.jpg",
      rating: 4.5,
    },
    {
      id: 34,
      title: "S1 14 inch Laptop Monitor Extender",
      price: 179.99,
      category: "computers",
      image: "./images/card24.jpg",
      rating: 4.5,
    },
    {
      id: 35,
      title: "Transformers",
      price: 4,
      category: "movies",
      image: "./images/card25.jpg",
      rating: 4.2,
    },
    {
      id: 36,
      title: "21 Jump Street",
      price: 4,
      category: "movies",
      image: "./images/card26.jpg",
      rating: 4.5,
    },
    {
      id: 37,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      price: 3.7,
      category: "movies",
      image: "./images/card27.jpg",
      rating: 4,
    },
    {
      id: 38,
      title: "Transformers: Revenge of the Fallen",
      price: 3.99,
      category: "movies",
      image: "./images/card28.jpg",
      rating: 5,
    },
    {
      id: 39,
      title: "A Quiet Place: Day One (Standard)",
      price: 5.99,
      category: "movies",
      image: "./images/card29.jpeg",
      rating: 3.5,
    },
    {
      id: 40,
      title: "Passengers",
      price: 3.99,
      category: "movies",
      image: "./images/card30.jpeg",
      rating: 5,
    },
    {
      id: 41,
      title: "From Season 2",
      price: 2.99,
      category: "movies",
      image: "./images/card31.jpeg",
      rating: 3.5,
    },
    {
      id: 42,
      title: "Challengers",
      price: 3.99,
      category: "movies",
      image: "./images/card32.jpeg",
      rating: 4,
    },
    {
      id: 43,
      title: "Minions: The Rise of Gru",
      price: 3.59,
      category: "movies",
      image: "./images/card33.jpeg",
      rating: 4.5,
    },
    {
      id: 44,
      title: "H2OGO! Turtle Ride On Inflatable Pool Float",
      price: 11.99,
      category: "toys",
      image: "./images/card34.jpeg",
      rating: 5,
    },
    {
      id: 45,
      title: "UP IN & OVER Bop Bag Elephant",
      price: 9.99,
      category: "toys",
      image: "./images/card35.jpg",
      rating: 3,
    },
    {
      id: 46,
      title: "UP IN & OVER Bop Bag Giraffe",
      price: 9.99,
      category: "toys",
      image: "./images/card36.jpg",
      rating: 4,
    },
    {
      id: 47,
      title: "Panel Beach Ball",
      price: 8.99,
      category: "toys",
      image: "./images/card37.jpg",
      rating: 4.5,
    },
    {
      id: 48,
      title: "Panel Beach Ball",
      price: 13.99,
      category: "toys",
      image: "./images/card38.jpg",
      rating: 5,
    },
  ]);
  const [filteredProducts, setFilteredProducts] = useState<Props[]>(items);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  useEffect(() => {
    setFilteredProducts(
      selectedCategory == "all"
        ? items
        : items.filter((element) => element.category == selectedCategory)
    );
  }, [selectedCategory]);

  const handleSelectFilterButton = (category: string) => {
    setFilteredProducts(
      category == "all"
        ? items
        : items.filter((element) => element.category == selectedCategory)
    );
  };
  return (
    <>
      <Header className="">
        <span className="navbar-text outer-header">Rana's Shop with React</span>
      </Header>

      <ProductList
        items={filteredProducts}
        setSelectedCategory={setSelectedCategory}
        onSelectFilterButton={handleSelectFilterButton}
      />
    </>
  );
}

export default App;
