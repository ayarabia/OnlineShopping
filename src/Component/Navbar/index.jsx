import { Container } from "@mui/system";
import React ,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  getTotalQuantity } from "../../redux/features/cart/cartSlice";
function Navbar() {
  const dispatch = useDispatch();
  const { cartTotalQuantity  } = useSelector((state) => state.cart);
  useEffect(() => {
 dispatch(getTotalQuantity())
   
  }, []);
  return (
   
      <nav  className='bg-secondary 0 py-4 '>
         <Container className="nav-bar d-flex justify-content-between align-items-center">
        <Link to="/home" className="text-decoration-none">
          <h1 className="text-danger">OnlinShop</h1>
        </Link>
        <Link to="/cart" className="text-decoration-none">
          <div className="nav-bag d-flex justify-content-between align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-bag-fill text-danger"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
            </svg>
            <div className="bag-quntity ms-2 rounded-circle bg-white px-2 py-1">
              <span >{cartTotalQuantity}</span>
            </div>
          </div>
        </Link>
        </Container>
      </nav>

  );
}
export default Navbar;
