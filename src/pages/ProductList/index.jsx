import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import history from "../../util/history";
import "./styles.css";

import { Row, Col, Carousel, Space, Button } from "antd";

import {
  StarOutlined,
  StarFilled,
  ShoppingCartOutlined,
  HeartOutlined,
  EyeOutlined,
} from "@ant-design/icons";

import * as Style from "./styles";

import {
  getProductListsAction,
  getCategoryListAction,
} from "../../redux/actions";

function ProductList({
  getProductLists,
  productList,
  getCategoryLists,
  categoryList,
}) {
  const [categorySelected, setCategorySelected] = useState(undefined);
  
  const searchKey = history.location.state && history.location.state.searchKey;

  useEffect(() => {
    getCategoryLists();
  }, []);

  useEffect(() => {
    getProductLists({
      page: 1,
      limit: 2,
      searchKey: searchKey,
    });
  }, [searchKey]);

  const renderProductImages = (product) => {
    if (!product.productOptions) return null;
    return product.productOptions.map((option, optionIndex) => (
      <div>
        <Style.ProductImageContainer>
          <Style.ProductImageContent
            className="product-card-image"
            image={option.image}
          />
        </Style.ProductImageContainer>
      </div>
    ));
  };

  function handleShowMore() {
    // setPage(page + 1);
    getProductLists({
      more: true,
      // page: page + 1,
      page: productList.page + 1,
      limit: 2,
      catalogId: categorySelected,
      searchKey: searchKey,
    });
  }

  function handleFilterCategory(id) {
    setCategorySelected(id);
    // setPage(1);
    getProductLists({
      page: 1,
      limit: 2,
      catalogId: id,
      searchKey: searchKey,
    });
  }

  const renderCategoryList = () => {
    if (categoryList.loading) return <p>Loading...</p>;
    const newCategoryList = [
      {
        name: 'All'
      },
      ...categoryList.data,
    ]
    return newCategoryList.map((categoryItem, categoryIndex) => {
      console.log("renderCategoryList -> categoryItem", categoryItem);
      return (
        <li className="category-item">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="javascript:void(0)"
            onClick={() => handleFilterCategory(categoryItem.id)}
            style={{ color: categorySelected === categoryItem.id ? "red" : "" }}
          >
            {categoryItem.name}
          </a>
        </li>
      );
    });
  };

  const renderProductList = () => {
    if (productList.loading) return <p>Loading...</p>;
    return productList.data.map((productItem, productIndex) => {
      return (
        <Col style={{ width: "20%" }}>
          <Style.Product
            onClick={() => history.push(`/product/${productItem.id}`)}
          >
            <Style.ProductContainer>
              <Style.ProductContentHover className="product-hover">
                <Style.ProductButtonList>
                  <Space>
                    <Style.ProductButtonItem>
                      <ShoppingCartOutlined />
                    </Style.ProductButtonItem>
                    <Style.ProductButtonItem>
                      <HeartOutlined />
                    </Style.ProductButtonItem>
                    <Style.ProductButtonItem>
                      <EyeOutlined />
                    </Style.ProductButtonItem>
                  </Space>
                </Style.ProductButtonList>
              </Style.ProductContentHover>
              <div style={{ overflow: "hidden" }}>
                <Carousel autoplay dots={false}>
                  {renderProductImages(productItem)}
                </Carousel>
              </div>
            </Style.ProductContainer>
            <Style.ProductDetail>
              <Style.ProductNameContainer>
                <Style.ProductNameContent href="#">
                  {productItem.name}
                </Style.ProductNameContent>
                <p>{productItem.catalog.name}</p>
              </Style.ProductNameContainer>

              <Style.StarRating>
                <i>
                  <StarFilled />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
              </Style.StarRating>
              <Style.ProductPrice>
                <Style.SalePrice>130.00</Style.SalePrice>
                <Style.OrgPrice>150.00</Style.OrgPrice>
              </Style.ProductPrice>
            </Style.ProductDetail>
          </Style.Product>
        </Col>
      );
    });
  };

  return (
    <Style.ProductListContainer>
      <Row>
        <Col span={24}>
          <Style.Breadcrumb>
            <nav>
              <h1>Skin Care</h1>
              <span>
                <a href="#">Home</a> <span>-</span> <span>Skin care</span>
              </span>
            </nav>
          </Style.Breadcrumb>
        </Col>
      </Row>
      <Style.ProductListContent>
        <Row>
          <Col span={4}>
            <div className="left-sidebar">
              <div className="collection-sidebar">
                <div className="collection-sidebar-item">
                  <h4>Category</h4>
                  <hr />
                  <ul>
                    {renderCategoryList()}
                  </ul>
                </div>
                <div className="collection-sidebar-item">
                  <h4>Shop by Weight</h4>
                  <hr />
                  <ul>
                    <li className="category-item">
                      <a href="#">100 ml </a>
                    </li>
                    <li className="category-item">
                      <a href="#">150 ml</a>
                    </li>
                    <li className="category-item">
                      <a href="#">200 ml</a>
                    </li>
                    <li className="category-item">
                      <a href="#">250 ml</a>
                    </li>
                    <li className="category-item">
                      <a href="#">300 ml</a>
                    </li>
                  </ul>
                </div>
                <div className="collection-sidebar-item">
                  <h4>Shop by Weight</h4>
                  <hr />
                  <ul>
                    <li className="category-item">
                      <a href="#">100 - 200</a>
                    </li>
                    <li className="category-item">
                      <a href="#">200 - 300</a>
                    </li>
                    <li className="category-item">
                      <a href="#">300 - 400</a>
                    </li>
                    <li className="category-item">
                      <a href="#">500 - 600</a>
                    </li>
                    <li className="category-item">
                      <a href="#">500 - xxx</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col span={20}>
            <div className="right-collection">
              <div className="collection-grid">
                {searchKey && (
                  <div>Search for "{searchKey}"</div>
                )}
                <div>
                  <Row gutter={16}>{renderProductList()}</Row>
                  {productList.data.length % 2 === 0 && (
                    <Row justify="center">
                      <Button onClick={() => handleShowMore()}>
                        Show More
                      </Button>
                    </Row>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Button type="primary">dadasdasd</Button>
      </Style.ProductListContent>
    </Style.ProductListContainer>
  );
}

const mapStateToProps = (state) => {
  const { productList, categoryList } = state;
  return {
    productList,
    categoryList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductLists: (params) => dispatch(getProductListsAction(params)),
    getCategoryLists: (params) => dispatch(getCategoryListAction(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
