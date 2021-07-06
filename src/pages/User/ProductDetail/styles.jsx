import styled from "styled-components";
import { Button } from "antd";

export const Product = styled.div`
  padding: 15px;
  
  &:hover {
    border:0.7px solid #ee2d7a;
    transition:1s;
  }
  &:hover .hover-ne{
    display:block;
  }
`;

export const ProductContentHover = styled.div`
  position: absolute;
  display:none;
  z-index:999;
  width:100%;
  height:100%;
  background-color:rgba(230, 224, 224, 0.33);
`;

export const ProductContainer = styled.div`
  position: relative;
`;

export const ProductDetail = styled.div`
  text-align: center;
  padding: 10px;
`;

export const Breadcrumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #ffeaf2;
`;

export const ProductName = styled.a`
  font-weight: 500;
  font-size: 18px;
  color: #151413;
  display: inline-block;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const CustomButton = styled(Button)`
  border-radius: 999px;
`;

export const StarRating = styled.span`
  display: block;
`;

export const ProductPrice = styled.p`
  margin:0;
  padding:0;
  font-size: 28px;
  font-weight: 400;
  color: #848484;
  font-family: Josefin Sans;
`;

export const ProductImageContainer = styled.div`
  width: 200px;
`;

export const ProductImageContent = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  padding-top: 133.33%;
`;
