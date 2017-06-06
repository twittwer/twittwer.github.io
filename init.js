'use strict';

$( document )
  .ready( function () {

    $( '.button-collapse' )
      .sideNav();

    $( '.dropdown-button' )
      .dropdown( {
        constrainWidth: false,
        hover         : false,
        belowOrigin   : true
      } );

  } );