import React, { useState } from 'react';
import { Button } from 'antd';
import "./styles.css";

const cartList = [{
  id: 1,
  name:"Serun AHC",
  price: "100000",
  finalPrice: "100000",
  quantity: 1,
},{
  id:2,
  name:"Serun NI",
  price: "20000",
  finalPrice: "200000",
  quantity: 2,
}
]

function CartList(){
  const [cartListData, setCartListData] = useState(cartList);
  
  function handleChangeQuality(action, id) {
    const newCartList = cartListData;
    const productIndex = cartListData.findIndex((item) => item.id === id);
    if (newCartList[productIndex].quantity === 1 && action === 'minus') {
      return null;
    } else {
      newCartList.splice(productIndex, 1, {
        ...newCartList[productIndex],
        quantity: newCartList[productIndex].quantity + (action === 'plus' ? 1 : -1),
      });
      setCartListData([...newCartList]);
    }
  }

  function renderCartList(){
    return cartListData.map((cartItem, cartIndex) => {
      return(
        <>
        <div className="cart_list_wrap" key={`cartitem-${cartItem.id}-${cartIndex}`}>
          <div className="cart_item_wrap">
            <div className="cart_item_content">
              <div className="col-1">
                <p>{cartItem.name}</p>
              </div>
              <div className="col-2">
                <span>{cartItem.price}</span>
              </div>
              <div className="col-3">
                <div className="quantity_select_box">
                  <span className="quantity_down" onClick={() => handleChangeQuality('minus', cartItem.id)}>-</span>
                  <input className="input_quantity" value={cartItem.quantity} type="tel"/>
                  <span className="quantity_up" onClick={() => handleChangeQuality('plus', cartItem.id)}>+</span>
                </div>
              </div>
              <div className="col-4">
                <span className="final_price">{cartItem.finalPrice}</span>
              </div>
              <div className="col-5">
                <span className="del_cart_item">Xoá</span>
              </div>
            </div>
          </div>
        </div>
        </>
      )
    });
  };
  return(
    <>
      <h1>Cart List</h1>
      <div className="tbl_header_cart">
        <div className="product_name col-1">
          Sản phẩm
        </div>
        <div className="product_price col-2">
          Đơn giá
        </div>
        <div className="product_quantity col-3">
          Số lượng
        </div>
        <div className="product_amount col-4">
          Số tiền
        </div>
        <div className="product_action col-5">
          Thao tác
        </div>
      </div>
      {renderCartList()}
      <Button>Thanh Toán</Button>
    </>
  )
}
export default CartList;