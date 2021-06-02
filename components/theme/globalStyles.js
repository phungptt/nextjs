import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white-two: #f1f1f1;
    --white-three: #e3e3e3;
    --greyish: #b1b1b1;
    --cool-grey: #9ca9ae;
    --warm-grey: #777777;
    --gunmetal: #4d5f66;
    --macaroni-and-cheese: #e5a524;
    --easter-purple: #b175ff;
    --bright-sky-blue: #01b9ff;
    --greenish-teal: #4dd591;
    --steel: #767794;
    --dusk: #434360;
    --white: #ffffff;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #090513;
    -webkit-box-shadow: 0 0 0px 1000px #F8F6FB inset !important;
  }


  ::-webkit-scrollbar {
    width: 6px;
    background: rgba(0, 0, 0, 0.28);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #20c997;
  }
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    line-height: 1.4;
    color: #777777;
    text-align: left;
    background-color: #fff;
    overflow-x: hidden;
  }


  ul {
    padding-left: 0;
    list-style: none;
  }

  .btn-lg, .btn-group-lg > .btn {
    padding: 0.8125rem 1.875rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0;
  }

  .ant-dropdown-menu {
    width: 220px;
    background-color: #434360;
    .ant-dropdown-menu-item-divider {
      display: none;
    }
    .ant-dropdown-menu-item {
      &:hover {
        background-color: unset;
        > a {
          color:  #4dd591;
        }
      }
    }
    a {
      color: #fff
    }
  }

  .ic-language {
    width: 25px;
  }

  .row-about .ant-col {
    padding: 20px 0;
    @media (min-width: ${breakpoint.lg}) {
      padding: 0 50px;
    }
  }

  .slick-dots {
    bottom: -45px;
    text-align: center;
    li {
      width: 40px;
      margin: 0 6px;

      &.slick-active {
        button {
          height: 6px;
          background-color: #4dd591;
        }
      }

      button {
        width: 40px;
        height: 1px;
        background-color: #4dd591;
        padding: 0;
        border: none;
        transition: all 0.2s linear 0s;
        &::before {
          display: none;
        }
      }
    }
  }

  .form-group {
    margin-bottom: ${px2vw(20)}vw;
    label.error {
      font-size: 14px;
      color: #ec3e3e;
      font-weight: 300;
      @media (min-width: ${breakpoint.lg}) {
        font-size: ${px2vw(14)}vw;
      }
    }
  }

  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    display: none;
  }

  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::after {
    display: inline-block;
    margin-left: 4px;
    color: #4dd591;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: '*';
  }
`;
