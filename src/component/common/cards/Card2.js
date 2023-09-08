import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
  ShoppingCart,
} from "@mui/icons-material";
import { Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card2 = ({ imageUrl, title, description, about }) => {
  const [isAdded, setIfAdded] = useState(false);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();
  const HandleCart = () => {
    setIfAdded(true);
    setDone(true);
  };
  const handleClose = () => {
    setDone(false);
  };
  const goToCart = () => {
    navigate("/Cart");
  };
  return (
    <div className="flex h-[100%]">
      <div className=" rounded-lg object-contain w-[900px]">
        <img className="h-[560px]" src={imageUrl} alt="N/A" />
        <p className="text-center font-semibold">{title}</p>
      </div>
      <div className="w-1/2 p-4">
        <p>{description}</p>
        <div className="mt-4">{about}</div>
        {isAdded ? (
          <Button
            color="primary"
            aria-label="add to shopping cart"
            onClick={goToCart}
          >
            <ShoppingCart />
            Go to Cart
          </Button>
        ) : (
          <Button
            color="primary"
            aria-label="add to shopping cart"
            onClick={HandleCart}
          >
            <AddShoppingCart />
            Add to Cart
          </Button>
        )}

        <FavoriteBorder />
        <Favorite />
      </div>
      <Snackbar
        open={done}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Added to cart"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      />
    </div>
  );
};

export default Card2;
