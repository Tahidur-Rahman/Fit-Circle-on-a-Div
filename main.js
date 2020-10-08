window.onload = window.onresize = function(){
  let box = document.getElementById('elem'),
      style = window.getComputedStyle(box,null),

      height = parseInt(style.getPropertyValue('height')),
      width  = parseInt(style.getPropertyValue('width')),
     
      x = width/2,
      y = height/2,
      circleRadius = Math.min(height,width)/2,
      circ = document.getElementById('circ');

      circ.setAttribute('r',circleRadius);
      circ.setAttribute('cx',x);
      circ.setAttribute('cy',y)

}