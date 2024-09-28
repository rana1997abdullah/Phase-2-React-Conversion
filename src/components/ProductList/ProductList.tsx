import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import Header from "../Header/Header";

interface Props {
  items: {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: number;
    category: string;
  }[];
  setSelectedCategory: (category: string) => void;
  onSelectFilterButton: (item: string) => void;
}
const ProductList = ({
  items,
  setSelectedCategory,
  onSelectFilterButton,
}: Props) => {
  const handleSelectItem = (categoryType: string) => {
    onSelectFilterButton(categoryType);
  };
  return (
    <>
      <Header className="inner-header">
        <div id="navbarNavAltMarkup">
          <div
            className="navbar-nav"
            style={{ display: "flex", flexDirection: "row" }}
          >
           {
           ["all","computers","electronics","movies","toys"].map(element=>(
            <button
            type="button"
            className="filter-button"
            key={element}
            onClick={() => {
              setSelectedCategory(element);
              handleSelectItem(element);
            }}
          >
            {element}
          </button>
           ))
        }
          </div>
        </div>
      </Header>
      <div className="cards">
        {items.map((product) => (
          <ProductCard 
          product={product} 
          key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
