import React, { useState } from 'react';
import { Button } from 'antd';
// import "./styles.css";
import * as Style from "./styles";

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
        <Style.CartListWrap key={`cartitem-${cartItem.id}-${cartIndex}`}>
          <Style.CartItemWrap>
            <Style.CartItemContent>
              <Style.Col1>
                <p>{cartItem.name}</p>
              </Style.Col1>
              <Style.Col2>
                <span>{cartItem.price}</span>
              </Style.Col2>
              <Style.Col3>
                <Style.QuantitySelectBox>
                  <Style.QuantityDown className="quantity_down" onClick={() => handleChangeQuality('minus', cartItem.id)}>-</Style.QuantityDown>
                  <Style.QuantityInput className="input_quantity" value={cartItem.quantity} type="tel"/>
                  <Style.QuantityUp className="quantity_up" onClick={() => handleChangeQuality('plus', cartItem.id)}>+</Style.QuantityUp>
                </Style.QuantitySelectBox>
              </Style.Col3>
              <Style.Col4>
                <span className="final_price">{cartItem.finalPrice}</span>
              </Style.Col4>
              <Style.Col5>
                <span className="del_cart_item">Xoá</span>
              </Style.Col5>
            </Style.CartItemContent>
          </Style.CartItemWrap>
        </Style.CartListWrap>
        </>
      )
    });
  };
  return(
    <>
      <h1>Cart List</h1>
      <Style.TableHeader>
        <Style.Col1>
          Sản phẩm
        </Style.Col1>
        <Style.Col2>
          Đơn giá
        </Style.Col2>
        <Style.Col3>
          Số lượng
        </Style.Col3>
        <Style.Col4>
          Số tiền
        </Style.Col4>
        <Style.Col5>
          Thao tác
        </Style.Col5>
      </Style.TableHeader>
      {renderCartList()}
      <Button>Thanh Toán</Button>
    </>
  )
}
export default CartList;