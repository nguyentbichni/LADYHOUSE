import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
`;

export const BackgroundImage = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 700px;
`;

export const ElementorInner = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 100px 0px;
`;

export const ElementorContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 700px;
`;

export const ElementorElementFirst = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  height: auto;
`;

export const ElementorWidget = styled.div`
  display: block;
  width: 100%;
`;

export const HeadlineFirst = styled.span`
  display: block;
  text-align: left;
  font-size: 80px;
  font-family: "Parisienne", cursive;
  color: #ee2d7a;
`;

export const HeadlineSecond = styled.span`
  display: block;
  text-align: left;
  font-size: 30px;
  font-family: "Potta One", cursive;
  color: black;
`;

export const ElementorImage = styled.div`
  width: 100%;
  height: auto;
`;

export const ElementorElementSecond = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  height: auto;
  padding: 120px 30px;
  box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.5);
  background-color: white;
`;

export const ElementorWidgetContainer = styled.div`
  width: 100%;
`;

export const ElementorIcon = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 90px;

  & svg {
    fill: #ed1b6f;
  }
`;

export const JetHeadline = styled.h3`
  width:100%;
  text-align: center;
  font-family: Josefin Sans, "Josefin Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 36px;
  line-height: 1.1em;
`;

export const JetHeadlineDivider = styled.span`
  display: inline-block;
  text-align:center;
  height: 4px;
  width: 84px;
  background-color: #ee2d7a;
`;

export const JetHeadlineLable = styled.span`
  display: block;
  text-align: center;
  color: #232323;
`;

export const ElementorTextEditor = styled.div`
  text-align: center;
  font-size: 18px;
  color: #848484;
  margin-bottom: 35px;
`;

export const ElementorButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const ElementorButtonLink = styled.a`
  border-radius: 30px;
  border: 2px solid #ed1b6f;
  padding: 10px 20px;
`;

export const ElementorButtonContent = styled.span`
  display: inline-block;
  color: #ed1b6f;
`;