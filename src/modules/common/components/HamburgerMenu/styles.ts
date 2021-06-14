import styled from 'styled-components';

export const Container = styled.nav`
  div {
    display: block;
    position: relative;
    top: 0.4rem;
    right: 0;

    z-index: 1;

    user-select: none;

    a,
    button {
      text-decoration: none;
      color: #232323;

      transition: color 0.3s ease;
    }

    button {
      border: none;
      font-size: 22px;
      background: none;
    }

    input {
      display: block;
      width: 40px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -5px;

      cursor: pointer;

      opacity: 0;
      z-index: 2;

      -webkit-touch-callout: none;
    }

    span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;

      background: #ffffff;
      border-radius: 3px;

      z-index: 1;

      transform-origin: 4px 0px;

      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }

    span:first-child {
      transform-origin: 0% 0%;
    }

    span:nth-last-child(2) {
      transform-origin: 0% 100%;
    }

    input:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: var(--color-primary);
    }

    input:checked ~ span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    input:checked ~ span:nth-last-child(2) {
      transform: rotate(-45deg) translate(0, -1px);
    }

    ul {
      position: fixed;
      width: 150px;
      height: 100vh;
      margin: -40px 0 0 -105px;
      padding: 12px;
      padding-top: 48px;
      text-align: end;
      background: #fff;
      list-style-type: none;
      -webkit-font-smoothing: antialiased;

      transform-origin: 0% 0%;
      transform: translate(100%, 0);

      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

      box-shadow: -5px -4px 16px 2px rgba(0, 0, 0, 0.2);
    }

    ul li {
      padding: 10px 0;
      font-size: 22px;
    }

    input:checked ~ ul {
      transform: none;
    }
  }
`;
