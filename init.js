'use strict';

$( document )
  .ready( function () {

    $( '.parallax' )
      .parallax();

    $( '.dropdown-button' )
      .dropdown( {
        constrainWidth: false,
        hover         : false,
        belowOrigin   : true
      } );

  } );