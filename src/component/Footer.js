import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

// 내 정보로 바꾸기
const Footer = () => {
  return (
    <div>
      <FooterNotice>INTRODUCE</FooterNotice>
      <FooterList>
        <FooterList mainFooter>
          <div>lovely, love-lee</div>
          <div>Junior FE developer(will be..)</div>
          <div>contact</div>
        </FooterList>
        <FooterList logo>
          <a href="https://github.com/twolove-sarang/cssColor-ariation">
            <img width={30} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
          </a>
          <a href="https://velog.io/@twolove-sarang/series/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-css%EA%B0%80%EC%9D%B4%EB%93%9C">
            <img width={30} src="https://logodownload.org/wp-content/uploads/2018/02/blogger-logo-icon.png" />
          </a>
        </FooterList>
        <FooterList diary>
          <div>This HEX code portfolio made by Sa-Rang, Lee.</div>
          <div>2022.12.28~updating</div>
        </FooterList>
      </FooterList>
    </div>
  );
};

export default Footer;

const FooterNotice = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  color: #9f9f9f;
  margin-top: 90px;
  border-bottom: 1px solid #4f4f4f;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const FooterList = styled.div`
  justify-content: center;
  color: #9f9f9f;
  font-size: 14px;

  ${(props) =>
    props.mainFooter &&
    css`
      text-align: center;
      padding: 40px;
      margin: 10px;
      div:first-child {
        font-weight: 800;
        color: white;
        font-size: 25px;
        margin-bottom: 10px;
      }
      div:nth-child(3) {
        margin-top: 40px;
        font-weight: 700;
      }
    `}

  ${(props) =>
    props.logo &&
    css`
      width: 100px;
      height: 30px;
      display: flex;
      justify-content: space-between;
      margin-left: auto;
      margin-right: auto;
      margin-top: -30px;
      &div {
        width: 30px;
      }
    `}

    ${(props) =>
    props.diary &&
    css`
      text-align: center;
      padding-top: 50px;
      padding-bottom: 50px;
      div:first-child {
        font-weight: 800;
        margin-bottom: 10px;
      }
    `}
`;
