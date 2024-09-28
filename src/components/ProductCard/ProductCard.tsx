import "./ProductCard.css";
import Rating from "../Rating";

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: number;
    category: string;
  };
}

const ProductCard = ({ product }: Props) => {
    
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <p className="card-title">{product.title}</p>
        <div style={{display:'flex'}}>
        {"  "}{product.rating} / 5
            <Rating rating={product.rating} />
           
            </div>
        <p className="card-text">${product.price}</p>
        <button type="button" className="btn btn-warning category">
          {product.category}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
