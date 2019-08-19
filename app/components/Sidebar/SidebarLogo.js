import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Hamburger from 'components/Hamburger/index';

export default function SidebarLogo(props) {
  const Div = styled.div`
    height: 60px;
    background: #fafbfc;

    .logo-section {
      width: 200px;
      float: left;

      a {
        .logo {
          position: relative;
          height: 100%;
          color: black;
          font-size: 30px;
          font-weight: 200;
          padding-left: 15px;
          padding-top: 8px;

          span {
            font-size: 10px;
            position: absolute;
            top: 40px;
            left: 129px;
            color: #565d63;
          }
        }
      }
    }

    .hamburger {
      float: right;
      height: 60px;
      width: 60px;
      padding-top: 8px;
    }
  `;

  return (
    <Div>
      <div className="logo-section">
        <a href={props.href} target="_blank">
          <div className="logo">
            Simple Panel
            <span>React Client</span>
          </div>
        </a>
      </div>
      <Hamburger
        isOpen={props.isHamburgerOpen}
        onClick={props.onHamburgerClick}
      />
    </Div>
  );
}

SidebarLogo.propTypes = {
  isHamburgerOpen: PropTypes.bool.isRequired,
  onHamburgerClick: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
};
