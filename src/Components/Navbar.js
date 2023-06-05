import React, { useEffect } from 'react';
import $ from 'jquery';
import "../Css/Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  useEffect(() => {
    function test() {
      var tabsNewAnim = $('#navbarSupportedContent');
      var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
      var activeItemNewAnim = tabsNewAnim.find('.active');
      var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      var itemPosNewAnimTop = activeItemNewAnim.position();
      var itemPosNewAnimLeft = activeItemNewAnim.position();
      $('.hori-selector').css({
        top: itemPosNewAnimTop.top + 'px',
        left: itemPosNewAnimLeft.left + 'px',
        height: activeWidthNewAnimHeight + 'px',
        width: activeWidthNewAnimWidth + 'px',
      });
      $('#navbarSupportedContent').on('click', 'li', function (e) {
        $('#navbarSupportedContent ul li').removeClass('active');
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $('.hori-selector').css({
          top: itemPosNewAnimTop.top + 'px',
          left: itemPosNewAnimLeft.left + 'px',
          height: activeWidthNewAnimHeight + 'px',
          width: activeWidthNewAnimWidth + 'px',
        });
      });
    }

    test();
    $(window).on('resize', function () {
      setTimeout(function () {
        test();
      }, 500);
    });
    $('.navbar-toggler').click(function () {
      $('.navbar-collapse').slideToggle(300);
      setTimeout(function () {
        test();
      });
    });

    var path = window.location.pathname.split('/').pop();
    if (path === '') {
      path = 'index.html';
    }
    var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    target.parent().addClass('active');
  }, []);

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      
      <Link to="/" className="navbar-brand navbar-logo" style={{ color:"white" }}>
      FXCalculator
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className="nav-item active">
            <Link to="/" className="nav-link" href="javascript:void(0);">
            
              <i className="fas fa-home"></i>Naslovna
            
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/tecajevi" className="nav-link" href="javascript:void(0);">
            
              <i><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" style={{ opacity: 0.5 }}>
  <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" style={{ fill: "#ffffff" }} />
</svg></i>Kalkulator
            
            </Link>
          </li>
          
          
          <li className="nav-item">
          <Link to="/statistika" className="nav-link" href="javascript:void(0);">
            
              <i className="far fa-chart-bar"></i>Statistika uživo
            
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
} 
export default Navbar;