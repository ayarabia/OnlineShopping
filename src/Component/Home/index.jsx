import React, { useEffect} from "react";
import { Container, Row, Col ,Button} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCart ,getTotalQuantity} from "../../redux/features/cart/cartSlice";
import { fetchProducts } from "../../redux/features/products/productsSlice";
function Home() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const handelAddToCart=(product)=>{
dispatch(addToCart(product))
  }
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getTotalQuantity())
  }, []);
  return (
    <Container className="py-5">
      <h1>New Arrival</h1>
      {loading ? (
        <div className="vh-100 fs-3 text-danger d-flex justify-content-center align-items-center">
          <p>Loading.....</p>
        </div>
      ) : (
        <>
          <Row >
            {products.slice(0,3).map((product, index) => {
              return (
                <Col sm={1} md={4} key={index} className="rounded pt-5 "  >
                 <div className="mx-3 shadow pt-5" style={{height:"400px"}}>
                 <h4>{product.title.substring(0,10)}</h4>
                 <img src={product.image} alt="image" className="w-50 h-50" />
                 <p className="fs-3">${product.price}</p>
                 <Button className="px-5 bg-danger border-danger" onClick={()=>{handelAddToCart(product)}}>Add To Cart</Button>
                 </div>
                </Col>
             );
            })}
          </Row>
        </>
      )}
    </Container>
  );
}
export default Home;
