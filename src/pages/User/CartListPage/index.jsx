import React, { useState } from 'react';

function CartListPage() {
  const [cartList, setCartList] = useState([
    {
      id: 1,
      name: 'ABC',
      quantity: 1,
      price: 1000000,
    },
    {
      id: 2,
      name: 'XYZ',
      quantity: 2,
      price: 2000000,
    },
  ]);

  let totalPrice = 0;

  function handleChangeQuality(action, id) {
    const newCartList = cartList;
    const productIndex = cartList.findIndex((item) => item.id === id);
    if (newCartList[productIndex].quantity === 1 && action === 'minus') {
      return null;
    } else {
      newCartList.splice(productIndex, 1, {
        ...newCartList[productIndex],
        quantity: newCartList[productIndex].quantity + (action === 'plus' ? 1 : -1),
      });
      setCartList([...newCartList]);
    }
  }
  
  function renderCartList() {
    return cartList.map((item, index) => {
      totalPrice = totalPrice + (item.price * item.quantity);
      return (
        <div style={{ borderBottom: '1px solid gray' }}>
          <div>Tên sản phẩm: {item.name}</div>
          <div>Đơn giá: {item.price.toLocaleString()}</div>
          <div>Số lượng: {item.quantity}</div>
          <div>
            <button onClick={() => handleChangeQuality('plus', item.id)}>+</button>
            <button onClick={() => handleChangeQuality('minus', item.id)}>-</button>
          </div>
          <div>Số tiền: {(item.price * item.quantity).toLocaleString()}</div>
        </div>
      )
    })
  }
  
  return (
    <>
      <div>Cart List Page</div>
      {renderCartList()}
      <div>Tổng Tiền: {totalPrice.toLocaleString()}</div>
    </>
  );
}

export default CartListPage;