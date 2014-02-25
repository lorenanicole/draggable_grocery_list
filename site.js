$(document).ready(function() {
  $('.item').draggable({ helper: 'clone' });
  var list = new groceryList();
  $('#grocery_list').droppable({
      drop: function( event, ui ) {
        var name = ui.draggable.find(".item_name").text();
        var price = ui.draggable.find(".item_price").text();
        list.items.push(new item(name, price));
        $( this ).find("tbody").append("<tr>" + ui.draggable.html() + "</tr>");
        list.sum();
    }
  });
});


function item(name, price) {
  this.name = name
  this.price = price
}

function groceryList(items, total) {
  this.items = []
  this.total = 0
}

groceryList.prototype.sum = function() {
  for (var i = 0; i < this.items.length; i++) {
    this.total += parseFloat(this.items[i].price);
    $("#total_cost").empty();
    $("#total_cost").text(this.total.toFixed(2));
  }
}



