import styled from "styled-components";

export const Col1 = styled.div`
  width: 46.27949%;
`;
export const Col2 = styled.div`
  width: 15.88022%;
`;
export const Col3 = styled.div`
  width: 15.4265%;
`;
export const Col4 = styled.div`
  width: 10.43557%;
`;
export const Col5 = styled.div`
  width: 12.70417%;
`;
export const TableHeader = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  margin-bottom: 12px;
  background-color: #ffe6ff;
`;
export const CartListWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
`;
export const CartItemWrap = styled.div`
  padding: 15px;
  border-bottom: .5px solid #f0f0f5;
`;
export const CartItemContent = styled.div`
  display: flex;
`;
export const QuantitySelectBox = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 3px;
  width: 84px;
`;
export const QuantityInput = styled.input`
  border: none;
  background: transparent;
  width: 32px;
  text-align: center;
  font-size: 13px;
  appearance: none;
  margin: 0px;
  outline: none;
`;
export const QuantityDown = styled.span`
  display: inline-block;
  text-align: center;
  border-right: 1px solid rgb(200, 200, 200);
  color: rgb(153, 153, 153);
  cursor: pointer;
  width: 24px;
  height: 24px;
`;
export const QuantityUp = styled(QuantityDown)`
  border-right: none;
  border-left: 1px solid rgb(200, 200, 200);
`;