    $( document ).ready(function() {

      /* GET BROWSER HEIGHT 
      function getBrowserHeight() {
      var height;
      if( typeof( window.innerHeight ) == 'number' ) {
          height = window.innerHeight;
      } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
          height = document.documentElement.clientHeight;
      } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
          height = document.body.clientHeight;
      } else {
          height = -1;
      }
      return height;
      }
      */


      /* #MAIN-HEADER FULL HEIGHT */
      //document.getElementById('main-header').style.minHeight = getBrowserHeight() + 'px';


      /* COUNTDOWN INIT. */
      $('#countdown_dashboard').countDown({
        targetDate: {
          'day':    31,
          'month':  7,
          'year':   2016,
          'hour':   16,
          'min':    0,
          'sec':    0
        },
        omitWeeks: true
      });


      /* BS4 TOOLTIP INIT. */
   // $('[data-toggle="tooltip"]').tooltip();
    // why this dont work in BS 4 ?


    /* WOW.js INIT. */
    new WOW().init();


});