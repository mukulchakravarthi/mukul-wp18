var layers = document.querySelector('.layers');
var layersInput = document.querySelector('#layers');
var offsetInputX = document.querySelector('#offset-x');
var offsetInputY = document.querySelector('#offset-y');
var dilation = document.querySelector('#dilation');
var controls = Array.prototype.slice.apply(document.querySelectorAll('.control'));

var render = function(){
  layers.innerHTML = '';
  
  var layerIndex = layersInput.value;
  while(layerIndex){
    
    var layer = document.createElement('div');
    layers.appendChild(layer);
    layer.className = 'layer';
  
    layerIndex --;
  }
  update();
}


var update = function(){
  console.log('update');
  
  Array.prototype.slice.apply(layers.querySelectorAll('.layer')).forEach(function(layer, layerIndex){
    console.log(layerIndex)
    var numLayers = layersInput.value;
  
    var size = layerIndex/numLayers * 100;
    layer.style.width = size + '%';
    layer.style.height = size + '%';
    layer.style.backgroundSize = 640 + (1-layerIndex/numLayers) * dilation.value + 'px';
    layer.style.backgroundPositionX = layerIndex/numLayers * offsetInputX.value + '%';
    layer.style.backgroundPositionY = layerIndex/numLayers * offsetInputY.value + '%';
    layer.style.zIndex = numLayers - layerIndex;
    
  });

  controls.forEach(function(control, i){
    var val = control.querySelector('input').value;
    control.querySelector('.val').innerHTML = val;
  });
}

layersInput.addEventListener('change', render);
offsetInputX.addEventListener('input', update);
offsetInputY.addEventListener('input', update);
dilation.addEventListener('input', update);

render();
