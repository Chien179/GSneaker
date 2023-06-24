import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";
import trash from "../../assets/trash.png";
import "./Cart.css";

function Cart({ data, carts, setCarts }) {
  const [isRemoved, setIsRemoved] = useState(false)

  const handleDecrease = () => {
    const updateCount = carts?.map((cart) =>
      cart.id === data.id && cart.count > 0
        ? { ...cart, count: cart.count - 1 }
        : cart
    );

    const newCarts = updateCount?.filter((cart) =>
      cart.count === 0 ? cart.id !== data.id : cart
    );

    if (newCarts.length !== carts.length) {
      setIsRemoved(true)
    } else {
      setCarts(updateCount);
    }
  }

  const handleIncrease = () => {
    const updateCount = carts?.map((cart) =>
      cart.id === data.id
        ? { ...cart, count: cart.count + 1 }
        : cart
    );
    setCarts(updateCount);
  }

  const handleRemove = () => {
    if (isRemoved) {
      setIsRemoved(false)
      setCarts(carts?.filter((cart) => cart.id !== data.id));
    }
  }

  return (
    <Stack
      direction="row"
      alignItems="start"
      textAlign="start"
      spacing={1}
      mb={3}
      className={isRemoved ? "anim-remove" : ""}
      onAnimationEnd={handleRemove}>
      <div
        style={{
          width: "35%",
        }}>
        <img
          src={data.image}
          alt={data.name}
          style={{
            backgroundColor: data.color,
          }}
          className={"img-product-cart"}
        />
      </div>
      <Stack
        spacing={1}
        sx={{
          width: "65%",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
          }}
          className="anim-product"
        >
          {data.name}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
          className="anim-product"
        >
          ${data.price}
        </Typography>
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-between"
          className="anim-control">
          <Stack
            direction="row"
            width="50%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            textAlign="center"
            spacing={2}
          >
            <Button
              className="button button-count"
              onClick={handleDecrease}
            >
              <img src={minus} alt="decrease" className="img-count" />
            </Button>
            <Typography>{data.count}</Typography>
            <Button
              className="button button-count"
              onClick={handleIncrease}
            >
              <img src={plus} alt="increase" className="img-count" />
            </Button>
          </Stack>
          <Button
            className="button button-remove"
            onClick={() => setIsRemoved(true)}>
            <img
              src={trash}
              alt="remove"
              className="img-trash"
            />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Cart;
