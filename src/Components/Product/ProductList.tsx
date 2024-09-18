import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Iproduct {
  images: string[];
  title: string;
  description: string;
  price: number;
  discountPercentage: number; 
  stock: number; 
}

function ProductList() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Iproduct | null>(null); 
  const [error, setError] = useState(false);
  const { id } = useParams();

  const click = () => {
    alert("Haridingiz uchun katta rahmat");
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data: Iproduct = await response.json(); 
        setProduct(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>404 Product Not Found</div>;
  }

  if (product) {
    return (
      <div className="Productlist">
        <div className="Productlist_box">
          <div className="Productlist_box_1">
            <div className="Productlist_box_1_left_img_bg">
              {product.images && product.images.length > 0 ? (
                <img src={product.images[0]} alt={product.title} />
              ) : (
                <p>No image available</p>
              )}
            </div>

            <div className="Productlist_box_1_right_img">
              {product.images && product.images.length > 0 && (
                <img src={product.images[0]} alt={product.title} />
              )}
            </div>
          </div>

          <div className="Productlist_box_right">
            <h2 className="productlist_box_right_title">{product.title}</h2>
            <p className="productlist_box_right_description">{product.description}</p>
            <p className="productlist_box_right_price">Price: ${product.price}</p>
            <p className="productlist_box_right_disc">
              Discounted Price: $
              {(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}
            </p>
            <p className="productlist_box_right_stock">Stock: {product.stock}</p>

            <button className="kupit" onClick={click}>
              купит
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default ProductList;
