import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .dropdownmain {
    display: flex;
    align-items: flex-start;
    a {
      text-decoration: none;
      color: #000000;
    }

    a:hover {
      color: #222222;
    }

    .dropdown {
      display: inline-block;;
      position: relative;
      z-index: 1;
    }

    .dd-button {
      display: inline-block;
      border: 1px solid gray;
      border-radius: 4px;
      padding: 10px 30px 10px 20px;
      background-color: #ffffff;
      cursor: pointer;
      white-space: nowrap;
    }

    .dd-button:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid black;
    }

    .dd-button:hover {
      background-color: #eeeeee;
    }

    .dd-input {
      display: none;
    }

    .dd-menu {
      position: absolute;
      top: 100%;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 0;
      margin: 2px 0 0 0;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
      background-color: #ffffff;
      list-style-type: none;
    }

    .dd-input + .dd-menu {
      display: none;
    }

    .dd-input:checked + .dd-menu {
      display: block;
    }

    .dd-menu li {
      padding: 10px 20px;
      cursor: pointer;
      white-space: nowrap;
    }

    .dd-menu li:hover {
      background-color: #f6f6f6;
    }

    .dd-menu li a {
      display: block;
      margin: -10px -20px;
      padding: 10px 20px;
    }

    .dd-menu li.divider {
      padding: 0;
      border-bottom: 1px solid #cccccc;
    }
  }
  .label-float {
    position: relative;
    padding-top: 13px;
  }

  .label-float input {
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline: none;
    min-width: 250px;
    padding: 15px 20px;
    font-size: 16px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-appearance: none;
    @media (max-width: 500px) {
      min-width: 150px;
    }
  }

  .label-float input:focus {
    border: 2px solid #3951b2;
  }

  .label-float input::placeholder {
    color: transparent;
  }

  .label-float label {
    pointer-events: none;
    position: absolute;
    top: calc(50% - 8px);
    left: 15px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    background-color: white;
    padding: 5px;
    box-sizing: border-box;
    color: #3951b2;
    font-size: 12px;
  }

  .label-float input:required:invalid + label {
    color: red;
  }
  .label-float input:focus:required:invalid {
    border: 2px solid red;
  }
  .label-float input:required:invalid + label:before {
    content: "*";
  }
  .label-float input:focus + label,
  .label-float input:not(:placeholder-shown) + label {
    font-size: 12px;
    top: 0;
    color: #3951b2;
  }
  .navbar {
    height: 50px;
    display: flex;
    justify-content: center;
    font-weight: 600;
    padding-top: 15px;
    font-family: "Roboto";
    font-size: 25px;
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
  .img {
    img {
      height: fit-content;
      height: fit-content;
      width: 70px;
      margin-top: -21px;
      padding: 20px;
    }
  }
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding: 10px;
  }
  #contact input[type="checkbox"] {
    zoom: 1.5;
  }
  #contact input[type="text"],
  #contact input[type="email"],
  #contact input[type="tel"],
  #contact input[type="url"],
  #contact textarea,
  #contact button[type="submit"] {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
  }

  #contact {
    padding: 25px;
    margin: 30px 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
  }
  #details {
    padding: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
  }
  #details input[type="text"],
  #details input[type="email"],
  #details input[type="tel"],
  #details input[type="url"],
  #details textarea,
  #details button[type="submit"] {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
  }

  #contact h3 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
    text-decoration: overline;
    font-family: sans-serif;
  }

  #contact h2 {
    margin: 5px 0 15px;
    display: block;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    font-size: 20px;
    font-family: monospace;
  }

  select {
    min-width: 250px;
    border: 1px solid #ccc;
    background: #fff;
    margin: 0 0 5px;
    padding: 10px;
    border-radius: 8px;
    @media (max-width: 500px) {
      min-width: 180px;
    }
  }

  fieldset {
    border: medium none !important;
    min-width: 100%;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button {
      cursor: pointer;
      min-width: 150px;
      border: none;
      background: #0096ff;
      color: #fff;
      margin: 0 0 5px;
      padding: 10px;
      font-size: 15px;
      border-radius: 8px;
      @media (max-width: 368px) {
        min-width: 120px;
      }
    }
  }

  #contact input[type="text"],
  #contact input[type="email"],
  #contact input[type="tel"],
  #contact input[type="url"],
  #contact input[type="date"],
  #contact input[type="number"],
  #contact textarea {
    border: 1px solid #ccc;
    background: #fff;
    margin: 0 0 5px;
    padding: 10px;
    border-radius: 8px;
  }
  #details input[type="text"],
  #details input[type="email"],
  #details input[type="tel"],
  #details input[type="url"],
  #details input[type="date"],
  #details input[type="number"],
  #details textarea {
    min-width: 100px;
    border: 1px solid #ccc;
    background: #fff;
    margin: 0 0 5px;
    padding: 10px;
    border-radius: 8px;
  }
  #details {
    select {
      min-width: 150px;
      border: 1px solid #ccc;
      background: #fff;
      padding: 10px;
      border-radius: 8px;
      margin: 0 0 5px;
    }
  }
  .flex {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 10px;
    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
    }
  }
  .flex2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10px;
    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
      grid-gap: 0;
    }
  }
  .buttonDiv {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-top: 20px;
    padding: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  #contact input[type="text"]:hover,
  #contact input[type="email"]:hover,
  #contact input[type="tel"]:hover,
  #contact input[type="url"]:hover,
  #contact textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }

  #contact textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
  }

  #contact button[type="submit"] {
    cursor: pointer;
    min-width: 150px;
    border: none;
    background: #0096ff;
    color: #fff;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
    border-radius: 8px;
    @media (max-width: 368px) {
      min-width: 120px;
    }
  }

  #contact button[type="submit"]:hover {
    background: #5d3fd3;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }

  #contact button[type="submit"]:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  .copyright {
    text-align: center;
  }

  #contact input:focus,
  #contact textarea:focus {
    outline: 0;
    border: 1px solid #aaa;
  }

  ::-webkit-input-placeholder {
    color: #888;
  }

  :-moz-placeholder {
    color: #888;
  }

  ::-moz-placeholder {
    color: #888;
  }

  :-ms-input-placeholder {
    color: #888;
  }
`;
const commonButtonStyle = css<any>`
  @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
  @import "https://fonts.googleapis.com/css?family=Montserrat:400,700|Raleway:300,400";
`;

export const TabOne = styled.div`
  ${commonButtonStyle}

  .tab_container {
    width: 100%;
    margin: 0 auto;
    margin-top: 40px;
    position: relative;
    box-shadow: 0 20px 60px 0 rgba(0, 0, 0, 0.4);
  }

  .inputnew,
  section {
    clear: both;
    padding-top: 10px;
    display: none;
  }

  .label1 {
    font-weight: 700;
    font-size: 18px;
    display: block;
    float: left;
    width: 14%;
    padding: 1.5em;
    color: #757575;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    background: #f0f0f0;
  }

  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4,
  #tab5:checked ~ #content5 {
    display: block;
    padding: 20px;
    background: #fff;
    color: #999;
    border-bottom: 2px solid #f0f0f0;
  }

  .tab_container,
  .tab-content p,
  .tab_container,
  .tab-content h3 {
    -webkit-animation: fadeInScale 0.7s ease-in-out;
    -moz-animation: fadeInScale 0.7s ease-in-out;
    animation: fadeInScale 0.7s ease-in-out;
  }
  .tab_container,
  .tab-content h3 {
    text-align: center;
  }

  .tab_container [id^="tab"]:checked + label {
    background: #fff;
    box-shadow: inset 0 3px #0ce;
  }

  .tab_container [id^="tab"]:checked + label .fa {
    color: #0ce;
  }

  .label1 .fa {
    font-size: 1.3em;
    margin: 0 0.4em 0 0;
  }

  @keyframes fadeInScale {
    0% {
      transform: scale(0.9);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
