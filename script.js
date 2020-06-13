var homeClass = document.querySelector('.home');
var removeText = document.querySelector('.text-container');
var heading = document.querySelector('.heading');
var subhead = document.querySelector('.subhead');
var navText = document.querySelector('.nav-text');
var height = window.screen.height;
var logo = document.querySelector('.logo');
var textContainer = document.querySelector('.text-container');
var navHeight = homeClass.style.height + '100vh';
console.log(height);

window.onscroll = function(){
    var frac = window.pageYOffset / window.screen.height;
    this.heading.style.position = 'relative';
    this.heading.style.top = frac*height/2 + 'px';
    this.subhead.style.position = 'relative';
    this.subhead.style.top = frac*height/2 + 'px';

    this.heading.style.opacity = Math.min(1, 1-1.3*frac);
    this.subhead.style.opacity = Math.min(1, 1-1.3*frac);

    if(window.pageYOffset > 500){
        this.navText.style.opacity = '1';
    }

    else{
        this.navText.style.opacity = '0';
    }
}

var canvas = document.getElementById('lmao');

var ctx = canvas.getContext('2d');
var py, ay, px, bx, by;
bx = by = 50;
var xv = 6, yv = 6;
var bd = 15;
var dy;
var aiSpeed = 2;
var pspeed = 3;
var ph;
var s1=0, s2=0;
var thic;

let mq = window.matchMedia( "(max-width: 700px)" );
if(mq.matches == true) {
    thic = 10;
    ph = 160;
    bd=10;
}
else{
  thic = 20;
  ph = 220;
  bd=15;
}

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

console.log(thic);

py = 0;
ay = canvas.height/2;
px = 10;

canvas.style.opacity = '0.4';



setInterval(update, 20);

function reset()
{
  bx = canvas.width/2;
  by = canvas.height/2;
  xv = -xv;
  yv = 4;
}

function update(){
  
  bx+= xv;
  by+=yv;
  
  if(by<0 && yv<0)
  {
    yv=-yv;
  }
  
  if(by>canvas.height && yv>0)
  {
    yv=-yv;
  }
  
  if(bx<0)
  {
    if(by>py && by<py+ph)
    {
      xv=-xv;
      yv = 1.2*yv;
    }
    
    else{
      s2++;
      reset();
    }
  }
  
  if(bx>canvas.width)
  {
    if(by>ay && by<ay+ph)
    {
      xv=-xv;
      yv = 1.5*yv;
    }
    
    else{
      s1++;
      reset();
    }
  }
  
  if(ay+ph/2<by)
  {
      if(ay+ph < canvas.height)
        ay+=aiSpeed;
  }
  else{
      if(ay > 0)
        ay-=aiSpeed;
  }

  if($('.text-container').is(':visible')){
    if(py+ph/2<by)
    {
        if(py+ph < canvas.height)
            py+=pspeed;
    }
    else{
        if(py > 0)
            py-=pspeed;
    }
  }else{
      canvas.addEventListener('mousemove', function(e){
        py = Math.min(canvas.height, Math.max(0, e.clientY-ph/2));
      });

      aiSpeed = 9;
      ctx.font = '30px Roboto';
  }
  
  ctx.fillStyle = '#020a17';
ctx.fillRect(0,0,canvas.width,canvas.height);
  
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, py, thic, ph);
  ctx.fillRect(canvas.width - thic, ay, thic, ph);
  ctx.fillRect(bx-bd/2,by,bd,bd);

  ctx.fillStyle = '#eee';
  ctx.fillText(s1, canvas.width/2 - 100, canvas.height/2);
  ctx.fillText(s2, canvas.width/2 + 100, canvas.height/2);
  ctx.fillText('-', canvas.width/2, canvas.height/2);
  ctx.font = '0px Roboto';

}

window.addEventListener('resize', function(e){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

$(logo).on('click', function(){
    $('.text-container').toggle();
});

$(window).on('scroll', function(){
    $('.product').each(function(){
        var element = $(this)[0];

        if(element.getBoundingClientRect().top <= $(window).height() / 8) {
			$(element).children().css('opacity', '1').css('margin', '0 2rem');
		}
    });

    $('.product2').each(function(){
        var element = $(this)[0];

        if(element.getBoundingClientRect().top <= $(window).height() / 8) {
            $(element).children().css('opacity', '1').css('margin', '0 2rem');
         }
     });

    
});
