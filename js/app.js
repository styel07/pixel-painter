/////////======div id = pixelPainter=========/////////
var colorSelected = 'white';

function cell(grid) {
  var divCell = document.createElement('div');
  divCell.style.border = '1px black solid';
  divCell.style.background = 'white';
  divCell.style.width = '10px';
  divCell.style.height = '10px';
  divCell.appendChild(document.createTextNode(''));
  grid.appendChild(divCell);
  divCell.addEventListener('click', function() {
    this.style.background = divCell.style.background;
  });
}

function grid(rows, col) {
  var twoDimArr = [];
  var count = 0;
  var table = document.createElement('table');
  var pixelPainter = document.getElementById('pixelPainter');
  for (var i = 0; i < rows; i++) {
    var row = table.appendChild(document.createElement('TR'));
    for (var j = 0; j < col; j++) {
      var cell = row.appendChild(document.createElement('TD'));
      cell.setAttribute('name', 'grid');
      cell.setAttribute('id', count++);
      cell.style.background = 'white'; // paints cell white
      // cell.style.border = '1px solid black';
      cell.addEventListener('click', function() {
        this.style.background = colorSelected;
      });
    }
  }
  pixelPainter.appendChild(table);
}
grid(15, 15);

///=======div id - color picker ==========////
function colorPickerButton(grid, setColorsInPicker) {
  var colorButton = document.createElement('button');
  colorButton.style.background = setColorsInPicker;
  colorButton.style.width = '40px';
  colorButton.style.height = '40px';
  colorButton.appendChild(document.createTextNode(''));
  grid.appendChild(colorButton);
  colorButton.addEventListener('click', function() {
    colorSelected = setColorsInPicker;
  });
}
function colorPickerGrid() {
  var color = [
  ['red', 'orange'],
  ['yellow', 'green'],
  ['blue', 'purple'],
  ['lime', 'salmon']
  ];

  var twoDimArr = [];
  var rows = 4;
  var col = 2;
  var numbers = 0;
  var colorPicker = document.getElementById('colorPicker');// connecting html and js
  for (var i = 0; i < rows; i++) {
    var row = [];
    for (var j = 0; j < col; j++) {
      row.push(numbers++);
      var setColorsInPicker = color[i][j];
      colorPickerButton(colorPicker, setColorsInPicker);
    }
    colorPicker.appendChild(document.createElement('br'));
    twoDimArr.push(row);
  }
}
colorPickerGrid();

//////==========div id = control - erase button =============////
var eraseButton = document.createElement('button');
eraseButton.appendChild(document.createTextNode('erase'));
eraseButton.appendChild(document.createElement('br'));
eraseButton.addEventListener('click', function() {
    colorSelected = 'white';
  });
var remove = document.getElementById('controls');
remove.appendChild(eraseButton);

//////==========div id = control - clear button =============////
var clearButton = document.createElement('button');
clearButton.appendChild(document.createTextNode('clear'));
clearButton.addEventListener('click', function() {
    location.reload();
  });
var remove = document.getElementById('controls');
remove.appendChild(clearButton);

//////===================list button colors =================////////

var str = '#';

var saveButton = document.createElement('button');
saveButton.appendChild(document.createTextNode('save'));
saveButton.addEventListener('click', function() {
  for (var u = 0; u < twoDimArr.length; u++) {
    str += twoDimArr[u].id + ':' + twoDimArr[u].style.background + '/';
  }
  window.location.hash = str;

});
remove.appendChild(saveButton);

//////============== load button ======================/////////////

var loadButton = document.createElement('button');
loadButton.appendChild(document.createTextNode('load'));
loadButton.addEventListener('click', function() {
  url = window.location.hash.substring(1);
  var index = urlEndTag = 0;
  var list = new Array();
  while (url.length > 1 ) {
    urlEndTag = url.indexOf('/');
    list.push(url.substring(index, urlEndTag));
    url = url = url.substring(urlEndTag + 1);
  }
  for (var i = 0; i < list.length; i++) {
    var temp = list[i];
    var indexURL = temp.indexOf(':');
    var positin = temp.substring(0, index);
    var color = temp.substring(indexURL + 1);
    document.getElementById(position).style.background = color;
  }
});