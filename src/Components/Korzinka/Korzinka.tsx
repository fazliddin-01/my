import ProductBox from "../HomePage/ProductBox";
import { useSelector } from "react-redux";
import { selectedBasketProduct } from "../../redux/slice/bascketSlice";
import { MdDelete } from "react-icons/md";

const Korzinka = () => {
  const basket = useSelector(selectedBasketProduct);

  const del =()=>{
  
  }

  return (
    <>
      <div className="container">
      <div className="kor">
        <div className="kor_del" >
          <h1>Products</h1>
          <MdDelete onClick={del} className="kor_del_1"/>
        </div>
      <div className="product-list">
        {basket.map((item: any) => (
          <ProductBox key={item.id} item={item} />
        ))}
      </div>
      </div>
    </div>
    </>
  );
};

export default Korzinka;
