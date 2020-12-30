import styled from "styled-components";
import { Button } from "antd";

export const ProductListContainer = styled.div`
  max-width: 100%;
`;
export const ProductListContent = styled.div`
  width: calc(100% - 200px);
  margin: 0px 100px;
`;

export const Product = styled.div`
  box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.1);

  & .product-card-image {
    transform: scale(1);
    transition: 0.5s;
  }

  &:hover {
    & .product-hover {
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 1;
    }

    & .product-card-image {
      transform: scale(1.05);
    }
  }
`;

export const ProductContentHover = styled.div`
  position: absolute;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: 0.3s;
`;

export const ProductButtonList = styled.div`
  display:flex;
`;

export const ProductButtonItem = styled.div`
  width:30px;
  height:30px;
  border-radius:999px;
  background-color:red;
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

export const ProductNameContainer = styled.div`
  height: 60px;
`;

export const ProductNameContent = styled.a`
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

  & > i svg{
    fill:#ffa965;
  }
`;

export const ProductPrice = styled.p`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  align-items: center;
`;

export const SalePrice = styled.p`
  margin: 0;
  padding: 0;
  font-size: 28px;
  font-weight: 500;
  color: #848484;
  font-family: Josefin Sans;
`;
export const OrgPrice = styled.del`
  font-size: 18px;
  color: #aaaaaa;
  font-family: Josefin Sans;
`;

export const ProductImageContainer = styled.div`
  width: 100%;
`;

export const ProductImageContent = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  padding-top: 100%;
`;
