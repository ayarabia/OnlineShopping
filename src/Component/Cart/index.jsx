import { Container, Row, Col } from "react-bootstrap";
import React ,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart ,getTotalQuantity} from "../../redux/features/cart/cartSlice";
function Cart() {
  const { cartItems, cartTotalAmount  } = useSelector((state) => state.cart);
  const columns=["Product","Price","Quantity","Total"]
  const dispatch = useDispatch();
 const  handelRemoveFromCart=(product)=>{
    dispatch(removeFromCart(product))
  }
  const  handelDecrease=(product)=>{
    dispatch(decreaseQuantity(product))
  }
  const  handelIncrease=(product)=>{
    dispatch(increaseQuantity(product))
  }
  const  handelClearCart=()=>{
    dispatch(clearCart())
  }
 useEffect(()=>{
  dispatch(getTotalQuantity())
 })
  return (
    <Container>
      <h1 className="text-center my-5">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <Row className="border-bottom border-gray-500 py-3 fw-bold fs-5" >
            {columns.map((column ,index)=>{
              return   <Col sm={1} md={3} key={index}>
             {column}
            </Col>
            })}
          </Row>
           {cartItems.map((item, index) => {
            return (
              <Row className="border-bottom border-gray-500 py-3" key={index}>
                <Col sm={1} md={3} className="d-flex align-items-center justify-content-center ">
                  <div className="d-flex justify-content-between align-items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-50 h-50"
                    />
                    <div>
                      <p className="fs-4">{item.title}</p>
                      <button onClick={() =>handelRemoveFromCart(item)}>Remove</button>
                    </div>
                  </div>
                </Col>
                <Col sm={1} md={3} className="d-flex align-items-center justify-content-center fs-4">
                  ${item.price}
                </Col>
                <Col sm={1} md={3} className="d-flex align-items-center justify-content-center">
                  <div className="  border border-gray-500 py-2 d-flex justify-content-around align-items-center w-75 rounded m-auto">
                    <button onClick={()=>handelIncrease(item)}>+</button>
                    <p className="fs-4">{item.quantity}</p>
                    <button onClick={()=>handelDecrease(item)} >-</button>
                  </div>
                </Col>
                <Col sm={1} md={3} className="d-flex align-items-center justify-content-center fs-4">
                  ${item.quantity * item.price}
                </Col>
              </Row>
            );
          })}
          <div className="d-flex justify-content-between align-items-center py-5">
            <button onClick={() =>handelClearCart()}>Clear Cart</button>
            <div>
              <p className="fs-5">TotalCost:${cartTotalAmount}</p>
              <Link to="/" className="text-danger fs-4 text-decoration-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span className="ms-2">Continue Shoping</span>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div>
          <p className="fs-2">Cart is empty</p>
          <Link to="/" className="text-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            <span className="ms-2 fs-5">Start Shoping</span>
          </Link>
        </div>
      )}
    </Container>
  );
}
export default Cart;