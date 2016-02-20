$(function () {

  var
    paperSize = {
      width: $('#tw').val(),
      height: $('#th').val(),
    },

    button = $('a#btn-calc'),

    quantity = $('input#input-quantity'),

    validate = function (val) {
      
      return $.trim(val).length && $.isNumeric(val)
    },

    getArea = function () {
      var client = {

        width: $('#cw').val(),
        height: $('#ch').val(),

        getSize: function () {
          return {
            'width': parseInt(this.width, 10) * 100,
            'height': parseInt(this.height, 10) * 100,
          };
        }
      };

      if (!(validate(client.width) && validate(client.height))) {
        alert('must be a number consisting of one or more digits');
        return;
      }

      var 
        a = Math.floor(client.getSize().width / paperSize.width),
        b = Math.floor(client.getSize().height / paperSize.height),
        numero = (a * b) + a + b - 1;
      
      quantity = numero == - 1 ? 1 : numero;
      console.log(quantity);

    };

  button.on('click', function (event) {
    event.preventDefault();
    getArea();
  });


});
