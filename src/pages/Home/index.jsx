import React, { useState } from "react";


import { Row, Col, Carousel } from "antd";
import {FaHandHoldingHeart} from "react-icons/fa"
import * as Style from "./styles";

import Slider1 from "../../assets/img/slider-bg.jpg";
import Slider2 from "../../assets/img/slider-bg-2.jpg";
import ContentImg from "../../assets/img/content-image-5a.jpg";

function Home() {
  return (
    <>
      <Style.Container>
        <Carousel autoplay dots={false}>
          <Style.BackgroundImage image={Slider1} />
          <Style.BackgroundImage image={Slider2} />
        </Carousel>

        <Style.ElementorInner>
          <Style.ElementorContainer>
            <Row style={{width:"100%"}}>
              <Col span={14}>
                <Style.ElementorElementFirst>
                  <Style.ElementorWidget>
                    <Style.HeadlineFirst>
                      Professional
                    </Style.HeadlineFirst>
                    <Style.HeadlineSecond>Makeup Kit</Style.HeadlineSecond>
                  </Style.ElementorWidget>
                  <Style.ElementorImage>
                    <img src={ContentImg} alt="ElementorImage"/>
                  </Style.ElementorImage>
                </Style.ElementorElementFirst>
              </Col>
              <Col span={10}>
                <Style.ElementorElementSecond>
                  <Style.ElementorIcon>
                    <FaHandHoldingHeart/>
                  </Style.ElementorIcon>
                  <Style.JetHeadline>
                    <Style.JetHeadlineDivider></Style.JetHeadlineDivider>
                    <Style.JetHeadlineLable>Perfect Flawles</Style.JetHeadlineLable>
                    <Style.JetHeadlineLable>Skin Tone</Style.JetHeadlineLable>
                  </Style.JetHeadline>
                  <Style.ElementorTextEditor>
                    <p>Professional makeup all in one set, including blush, eyeshadow, compact, foundation, lip color, and brushes. Select the perfect kit depending on your skin</p>
                  </Style.ElementorTextEditor>
                  <Style.ElementorWidgetContainer>
                    <Style.ElementorButtonWrapper>
                      <Style.ElementorButtonLink>
                        <Style.ElementorButtonContent>
                          Shop now
                        </Style.ElementorButtonContent>
                      </Style.ElementorButtonLink>
                    </Style.ElementorButtonWrapper>
                  </Style.ElementorWidgetContainer>
                </Style.ElementorElementSecond>
              </Col>
            </Row>
          </Style.ElementorContainer>
        </Style.ElementorInner>
      </Style.Container>
    </>
  );
}
export default Home;
