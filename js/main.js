console.log("Loaded");


// $('#lightSlider').lightSlider({
//     gallery: true,
//     item: 1,
//     loop:true,
//     slideMargin: 0,
//     thumbItem: 9
// });




var colorsold = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);

    var colors = new Array(
        [105,0,41],
        [175,208,234],
        [255,171,156],
        [24,12,134],
        [0,90,68],
        [255,221,0],
        [255,246,201],
        [222,49,99]);


  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,10);


  $('#send').on('click', function(){     
    console.log('Clicked');
    var name = document.getElementById('full-name').value;
        
    var email = document.getElementById('email').value;
       
    var subject = document.getElementById('subject').value;
       
    var message = document.getElementById('message').value;
    
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);
});




//scrool listener 
//get the top position of an element 
//when a specific top position of an element is at 0 
//  add a class to it (is-isView)

var foo = document.getElementById('service-1');
var html = document.getElementsByTagName('html')[0];
window.addEventListener('Scroll', function(){
    var elePos = foo.offsetTop;
    var htmlPos = html.scrollTop;
    var numToWatch = elePos - htmlPos;
    console.log(ser_one);
    console.log(ser_one.offsetTop);
    console.log(html.scrollTop);
    console.log(ele-Pos - htmlPos);
    if(numToWatch < 150)
    foo.classList.add('is-inView');
})



AOS.init({
    duration: 1200,
  })