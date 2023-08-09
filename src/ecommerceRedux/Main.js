import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { achaSaNaam } from "./features/ecommerceSlice";
import "./store.css";

function Main() {
  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.ecommerce;
  });

  //   window.onload = () => {
  //     dispatch(achaSaNaam)
  //   }

  useEffect(() => {
    dispatch(achaSaNaam());
  }, [dispatch]);

  if (init.isLoading) {
    return "Loading...";
  }

  if (init.isError) {
    return "You have an error...";
  }

  return (
    <>
      {init.products &&
        init.products.map((pr) => {
          return (
            <div className="product">
              <img src={pr.image} alt={pr.title}></img>
              <h2>{pr.price}</h2>
            </div>
          );
        })}
    </>
  );
}

export default Main;
