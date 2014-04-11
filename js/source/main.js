(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add').click(add);
    $('#sub').click(sub);
    $('#mul').click(mul);
    $('#div').click(div);
    $('#exp').click(exp);
    $('#fac').click(fac);
    $('#sqrt').click(sqrt);

  }

  function add(){
    var values = getNums();
    var answer = values[0] + values[1];
    display(answer);
  }

  function sub(){
    var values = getNums();
    var answer = values[0] - values[1];
    display(answer);
  }

  function mul(){
    var values = getNums();
    var answer = values[0] * values[1];
    display(answer);
  }

  function div(){
    var values = getNums();
    var answer = values[0] / values[1];
    display(answer);
  }

  function exp(){
    var values = getNums();
    var answer = Math.pow(values[0], values[1]);
    display(answer);
  }

  function fac(){
    var values = getNums();
    var answer = values[0];
    if (answer > 0) {
      for(var i=values[0]; i>1; i--) {
        answer = answer * (i - 1);
      }
    } else {
      answer = 1;
    }

    display(answer);
  }

  function sqrt() {
    var values = getNums();
    var answer = Math.sqrt(values[0]);
    display(answer);
  }


  function getNums() {
    var x = $('#num1').val() * 1;
    var y = $('#num2').val() * 1;
    return [x, y];
  }

  function display(answer) {
    $('#answer').text(answer);
  }

})();
