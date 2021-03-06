// creates a swatch that stores all the colors
function Canvas() {
}

Canvas.prototype.createGrid = function(swatch) {
  var canvasDivIndex = 0;
  for (var rowIndex = 0; rowIndex < 15; rowIndex++) {
    for (var colIndex = 0; colIndex < 15; colIndex++) {

      // paints colors into swatch container
      var canvasDiv = document.createElement('div');
      var rightContainer = document.querySelector('#paintCanvas');

      canvasDiv.id = 'index_' + canvasDivIndex++;
      canvasDiv.className = 'canvas';
      canvasDiv.style.display = 'inline-block';
      canvasDiv.style.background = 'white';
      canvasDiv.style.border = '1px solid black';
      canvasDiv.style.padding = '10px';

      canvasDiv.addEventListener('click', function(evt){
      evt.target.style.background = swatch.selectedColor;

       // evt.target.style.background = swatch.selectedColor;
        console.log(evt.target.id, swatch.selectedColor);
      });

      rightContainer.appendChild(canvasDiv);
    }
    rightContainer.appendChild(document.createElement('br'));
  }
};