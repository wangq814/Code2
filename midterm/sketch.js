let drops = [];
let numOfDrops = 3000;
let clouds1 = [];
let numOfClouds1 = 10;
let cloudImg1;
let obstacles = [];
let houses;
let mySun;
let ghost;
let bg;
let gh;
let r,g,b;
let h = [];
let api1 = 'http://api.openweathermap.org/data/2.5/weather?q=';
let city = 'New York';
let unit = '&units=metric&'
let apiKey1 = '&appid=3c46186d5e093892645e15f861e25d9c';

let api2 = 'http://api.waqi.info/search/?';
let apiKey2 = 'token=3e352ed6cfe5717962efee5dad9060b601f44506&keyword=';

//http://api.waqi.info/search/?token=3e352ed6cfe5717962efee5dad9060b601f44506&keyword=wuhan

function preload() {
    let url1 = api1 + city + unit + apiKey1; 
    let url2 = api2 + apiKey2 + city;
    data1 = loadJSON(url1);
    data2 = loadJSON(url2);
    
    
    
    
}

function setup(){
    createCanvas(800,500);
    cloudImg1 = loadImage("https://image.ibb.co/d1MJCH/Asset_4.png");
    //bg = loadImage("https://preview.ibb.co/jL2OCH/Asset_11_2x.png" );
    bg = loadImage("bg.png");
    //houses = loadImage("https://preview.ibb.co/daYkRc/Asset_11.png");
   houses = loadImage("house.png");
    
    for (var i = 0; i < numOfDrops; i++){
        drops.push(new Rain());
    }  
    
       for (var j = 0; j < numOfClouds1; j++){
        clouds1.push(new Cloud());
    }  
    
     for(var k = 0; k < 3; k++){
         h.push(new House());
     }
     
    mySun = createSprite(700,100);
    var sunAnimation = mySun.addAnimation("rotation","https://image.ibb.co/gaZzKx/Asset_1.png");
    mySun.rotationSpeed = -1;  
    

    gh = new Ghost();
    //h = new House();

//    ghost = createSprite(50,height/2);
//    var ghostAnimation = ghost.addAnimation("floating","https://image.ibb.co/iOeLsH/Asset_7.png", "https://image.ibb.co/iOeLsH/Asset_7.png", "https://image.ibb.co/i1CJex/Asset_8.png","https://image.ibb.co/i1CJex/Asset_8.png")
//    ghost.setCollider("rectangle",0,0,60,80);
    
    
    
    
//    mySun = createSprite(700,100);
//    var sunAnimation = mySun.addAnimation("rotation","https://image.ibb.co/gaZzKx/Asset_1.png");
//    mySun.rotationSpeed = -1;
}




function draw(){
    background(r,g,b);
    r = 160;
    g = 230;
    b = 255;
    
    image(bg,0,150,800,500);
    gh.display();
    
    for (var k = 0; k < 2; k ++){
    h[k].display();
    h[k].moving();
    h[k].update();
    
    }
    
	if(data1&&data2){
        let aqi1 = data2.data[0].aqi;
        let icon = data1.weather[0].icon;
        let temp = data1.main.temp;
        let humidity = data1.main.humidity;
        let windSpeed = data1.wind.speed;
   
   
            //day time
            //clear sky day
            if(icon == "01d"){
                //sun animation, light blue background 
                 
                 drawSprite(mySun);
            }
            //few clouds
             if(icon == "02d"){
                //sun animation, light blue background, few clouds moving
                 
                 drawSprite(mySun);
       for (var j = 0; j < numOfClouds1; j++){
        clouds1[j].move();
        clouds1[j].display();
        clouds1[j].update();
      
   }
            }
            //scattered clouds
             if(icon == "03d"){
                //light blue background, big clouds 
                 
                 drawSprite(mySun);
        for (var j = 0; j < numOfClouds1; j++){
        clouds1[j].move();
        clouds1[j].display();
        clouds1[j].update();
        drawSprite(mySun);
      
   }
            }
            //broken clouds
             if(icon == "04d"){
                 
                  drawSprite(mySun);
                //ight blue background, many small clouds moving
        
        for (var j = 0; j < numOfClouds1; j++){
        clouds1[j].move();
        clouds1[j].display();
        clouds1[j].update();
      
   }
            }
            //shower rain
             if(icon == "09d"){
                //greyish blue background, grey moving clouds, shower rain (set longer interval in update and more drops / faster speed), ghost with unbrella
                
        for (var j = 0; j < numOfClouds1; j++){
        clouds1[j].move();
        clouds1[j].display();
        clouds1[j].update();
      
   }
            }
            //day time rain
             if(icon == "10d"){
                // greyish blue background, grey moving clouds, sun behind clouds, rain, ghost with unbrella
        
        for (var j = 0; j < numOfClouds1; j++){
        clouds1[j].move();
        clouds1[j].display();
        clouds1[j].update();
            }
             }
            //thunderstorm
             if(icon == "11d"){
                //greyish blue background, grey clouds, thunder animation 
                 
            }
            //snow
             if(icon == "13d"){
                //greyish blue background, more clouds, snow array
                 
            }
            //mist
             if(icon == "50d"){
                //greyish background, less visibility, no clouds, no sun
                
                 r =200;
                 g = 200;
                 b = 200;
                 
            }
            
            //night time
            //clear sky night
            if(icon == "01n"){
                //moon, stars animation, dark blue back ground 
                r = 37;
                g = 53;
                b = 86;
            }
            //few clouds night
            if(icon == "02n"){
                //moon, stars animation, dark blue back ground, few clouds
                r = 37;
                g = 53;
                b = 86;
            }
            //scattered clouds night
             if(icon == "03n"){
                //dark blue background, big clouds 
                r = 37;
                g = 53;
                b = 86;
            }
            //broken clouds
             if(icon == "04n"){
                //dark blue background, many small clouds moving
                r = 37;
                g = 53;
                b = 86;
            }
            //shower rain night
             if(icon == "09n"){
                //greyish blue background, grey moving clouds, shower rain (set longer interval in update and more drops / faster speed), ghost with unbrella
                r = 37;
                g = 53;
                b = 86;
            }
          //night time rain
            if(icon == "10n"){
                //moon, dark blue back ground, rain, ghost with unbrella
                r = 37;
                g = 53;
                b = 86;
                 console.log(aqi1);
                      for (var i = 0; i < numOfDrops; i++){
        
        drops[i].move();
        drops[i].display();
        drops[i].update();
   }
        
            }
//            //thunderstorm
//             if(icon == "11n"){
//                //greyish blue background, grey clouds, thunder animation 
//            }
//            //snow
//             if(icon == "13n"){
//                //greyish blue background, more clouds, snow array
//            }
            //mist
             if(icon == "50n"){
                //greyish background, less visibility, no clouds, no sun
                 
            }
     
        
   
//    
//         console.log(aqi1);
//        
//         for (var i = 0; i < numOfDrops; i++){
//        
//        drops[i].move();
//        drops[i].displaySnow();
//        drops[i].update();
//   }
        
       
        
             //air quality index
        if(aqi1 <= 50){
		fill(255,255,255,0); 
    }
         if (aqi1 <= 100 && aqi1 > 50){
        fill(200,200,200,50);
}
    if (aqi1 <= 150 && aqi1 > 100){
        fill(180,180,180,50);
}
    if (aqi1<=200 && aqi1 > 150){
        fill(150,150,150,50);
}
    if (aqi1<=300 && aqi1 > 200){
        fill(130,130,130,50);
}
    if (aqi1 > 300){
        fill(100,100,100,50);
}
    rect(0,0,800,500);
        
   
         }
    
    
    
    
}

function Obstacle(x, size, color){  //???
    
    
    this.x = x;
	this.y = 250;

    this.size = size;
    this.color = color;
    
    this.update = function(){
        this.onScreen = (this.x > -this.size);
	    this.x -= speed;  
    }
    
    this.display = function(){
        fill(this.color);
        obstacles = createSprite(this.x, this.y);
        obstacles.setCollider("obstacle",0,0,this.size,this.size);
        obstacles.addAnimation();
    }
    
    this.hit = function(){

    }
    
}


function keyPressed(){
if ( keyCode === UP_ARROW || keyCode === 32){
    gh.jump();
    }
}


function Rain(){
    this.x = random(-500, width);
    this.y = random(-1000,0);
    this.speed = random(3,5);
    this.windSpeed = 1; // = wind speed in api
    this.acceleration = 0.01;
    
    this.move = function() {
     this.x += this.windSpeed;
     this.y += this.speed;
     this.speed += this.acceleration;
    }
    
    this.displayNight = function(){
        stroke(255,255,255,50);
        line(this.x, this.y, this.x + this.windSpeed, this.y+20);    
    }
        this.display = function(){
        stroke(50,50,50,50);
        line(this.x, this.y, this.x + this.windSpeed, this.y+20);    
    }
    this.displaySnow = function(){
      fill(255);
      noStroke();
      ellipse(this.x,this.y,2,2);
    }
    this.update = function(){
     if(this.y > height){
         this.y = random(-1000,0);
     
    if(this.x>width+100) {
        this.x = random(-500,width);
    }
         this.speed = 1;
    }
    }
}


function Cloud() {
    this.x = random(-500,width);
    this.y = random(0,100);
    this.speed = data1.wind.speed/4;
    
    this.move = function(){
        this.x += this.speed;
    }
    this.display = function(){
        image(cloudImg1,this.x, this.y,cloudImg1.width/3,cloudImg1.height/3);
    }
    this.update = function(){
        if(this.x >900){
            this.x = -300;
        }
}
}
    
function Ghost(){
   this.x = 50;
    this.y = 250;
   ghost = createSprite(this.x, this.y);
    var ghostAnimation = ghost.addAnimation("floating","https://image.ibb.co/iOeLsH/Asset_7.png", "https://image.ibb.co/iOeLsH/Asset_7.png", "https://image.ibb.co/iOeLsH/Asset_7.png", "https://image.ibb.co/i1CJex/Asset_8.png","https://image.ibb.co/i1CJex/Asset_8.png","https://image.ibb.co/i1CJex/Asset_8.png")
    ghost.setCollider("rectangle",0,0,60,80);
    
this.display = function(){
    
    drawSprite(ghost);
    }

this.jump = function(){
    this.y = 200;
   
    console.log("up");
}

}


function House(){
    this.x = 0;
    this.y = 320;
    
    this.display = function(){
      image(houses,this.x,this.y,1772,180);
    }
    
    this.moving = function(){
      this.x -=1;    
        
    this.update = function(){
        if(this.x < -1772+800){
            this.x = 0;
        }
}
    }
}
    
    
