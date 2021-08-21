import React from "react";
import styled from "styled-components";

const Body = styled.div`
  
  .letter-image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .animated-mail {
    position: absolute;
    height: 150px;
    width: 200px;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    transition: 0.4s;

    .body {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 100px 200px;
      border-color: transparent transparent #495057 transparent;
      z-index: 2;
    }

    .top-fold {
      position: absolute;
      top: 50px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 50px 100px 0 100px;
      -webkit-transform-origin: 50% 0%;
      -webkit-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
      -moz-transform-origin: 50% 0%;
      -moz-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
      transform-origin: 50% 0%;
      transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
      border-color: #e6e6e6 transparent transparent transparent;
      z-index: 2;
    }

    .back-fold {
      position: absolute;
      bottom: 0;
      width: 200px;
      height: 100px;
      background: #6c757d;
      z-index: 0;
    }

    .left-fold {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 50px 0 50px 100px;
      border-color: transparent transparent transparent #343a40;
      z-index: 2;
    }

    .letter {
      left: 20px;
      bottom: 0px;
      position: absolute;
      width: 160px;
      height: 100px;
      background: white;
      z-index: 1;
      overflow: hidden;
      -webkit-transition: 0.4s 0.2s;
      -moz-transition: 0.4s 0.2s;
      transition: 0.4s 0.2s;

      .letter-border {
        height: 10px;
        width: 100%;
        background: repeating-linear-gradient(
          -45deg,
          #474c52,
          #474c52 8px,
          transparent 8px,
          transparent 18px
        );
      }

      .letter-title {
        margin-top: 10px;
        margin-left: 5px;
        height: 10px;
        width: 100%;
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
      }
      .letter-context {
        margin-top: 10px;
        margin-left: 5px;
        height: 10px;
        width: 70%;
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
      }

      .letter-stamp {
        margin-top: 30px;
        margin-left: 120px;
        border-radius: 100%;
        height: 30px;
        width: 30px;
        background: #495057;
        opacity: 0.3;
      }
    }
  }

  .shadow {
    position: absolute;
    top: 200px;
    left: 50%;
    width: 400px;
    height: 30px;
    transition: 0.4s;
    transform: translateX(-50%);
    -webkit-transition: 0.4s;
    -webkit-transform: translateX(-50%);
    -moz-transition: 0.4s;
    -moz-transform: translateX(-50%);

    border-radius: 100%;
    background: radial-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );
  }

  .letter-image:hover {
    .animated-mail {
      transform: translateY(50px);
      -webkit-transform: translateY(50px);
      -moz-transform: translateY(50px);
    }

    .animated-mail .top-fold {
      transition: transform 0.4s, z-index 0.2s;
      transform: rotateX(180deg);
      -webkit-transition: transform 0.4s, z-index 0.2s;
      -webkit-transform: rotateX(180deg);
      -moz-transition: transform 0.4s, z-index 0.2s;
      -moz-transform: rotateX(180deg);
      z-index: 0;
    }

    .animated-mail .letter {
      height: 180px;
    }

    .shadow {
      width: 250px;
    }
  }
  
    &:hover {
      cursor: pointer;
    }
    
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 10%;
      border-radius: 50%;
      background-color: darken(#f1c40f, 20%);
      opacity: 0.4;
      
    }
  }
  }
`;

function Home() {
  return (
    <Body>
      <div class="letter-image">
        <div class="animated-mail">
          <div class="back-fold"></div>
          <div class="letter">
            <div class="letter-border"></div>
            <div class="letter-title">Welcome to my Portfolio</div>
            <div class="letter-context">
              I'm Omar a Software Developer based in Chicago, IL
            </div>
            <div class="letter-stamp">
              <div class="letter-stamp-inner"></div>
            </div>
          </div>
          <div class="top-fold"></div>
          <div class="body"></div>
          <div class="left-fold"></div>
        </div>
        <div class="shadow"></div>
      </div>
    </Body>
  );
}

export default Home;
