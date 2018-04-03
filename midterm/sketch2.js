let drops = [];
let numOfDrops = 1000;

let city, state, country;
//let c,s,c;

let api = 'http://api.airvisual.com/v2/city?city=';
let city1 = 'New York';
let city2 = 'Wuhan';
let city3 = 'Beijing';
let andState = '&state=';
let state1 = 'New York';
let state2 = 'Hubei';
let state3 = 'Beijing'
let andCountry = '&country=';
let country1 = 'USA';
let country2 = 'China';
let apiKey = '&key=6Pb4GhbA6siKTkbeH';

let cityInput, stateInput, countryInput, button;

//
//function preload() {
//    let url1 = api + city1 + andState + state1 + andCountry + country1 + apiKey;
//    let url2 = api + city2 + andState + state2 + andCountry + country2 + apiKey;
//    let url3 = api + city3 + andState + state3 + andCountry + country2 + apiKey;
//    
//    data1 = loadJSON(url1);
//    data2 = loadJSON(url2);
//    data3 = loadJSON(url3);
//}

function setup(){
	//createCanvas(420,700);
    createCanvas(800,500);
    
    
    cityInput = createInput();
    cityInput.size(60);
    cityInput.position(20,80);
    
    stateInput = createInput();
    stateInput.size(60);
    stateInput.position(100,80);
    
    countryInput = createInput();
    countryInput.size(60);
    countryInput.position(180,80);
    
    button = createButton('submit');
    button.position(countryInput.x + countryInput.width, 80);
    button.mousePressed(loadUserCity);
    //cityInput.changed(loadUserCity);
    
  city = createElement('h2', 'city');
  city.position(20, 30);
  state = createElement('h2', 'state');
  state.position(100, 30);
  country = createElement('h2', 'country');
  country.position(180, 30);

   
    
textAlign(CENTER);
  textSize(50);
    
    for (var i = 0; i < numOfDrops; i++){
        drops.push(new Rain());
    }  
}


function loadUserCity() {
    // set city, state, and country variables
    // to user input
   
    // make api call based on those variables
    let url1 = api + cityInput.value() + andState + stateInput.value() + andCountry + countryInput.value() + apiKey;
    let url2 = api + city2 + andState + state2 + andCountry + country2 + apiKey;
    let url3 = api + city3 + andState + state3 + andCountry + country2 + apiKey;
    
    data1 = loadJSON(url1);
    data2 = loadJSON(url2);
    data3 = loadJSON(url3);
    
//    return _city = cityInput.value();
//    return _state = stateInput.value();
//    return _country = countryInput.value();
   
}




function draw(){
    
   
	background(255);
   
    
    noStroke();
    textSize(26);
    fill(150);
    text("AIR QUALITY INDEX",150,30);
	if(data1){
        var aqi1 = data1.data.current.pollution.aqius;
        if(aqi1 < 12){
		fill(250); 
    }
         if (aqi1<35 && aqi1 > 12){
        fill(200);
}
    if (aqi1<55 && aqi1 > 35){
        fill(150);
}
    if (aqi1<150 && aqi1 > 55){
        fill(100);
}
    if (aqi1<250 && aqi1 > 150){
        fill(50);
}
    if (aqi1<500 && aqi1 > 250){
        fill(10);
}
    ellipse(100,200,aqi1,aqi1);
       // console.log('aqi1 = ' + aqi1);
        textSize(18);
        textAlign(CENTER, CENTER);
        fill(100);
        text("NEW YORK", 100,450);
        fill(aqi1);
        text(aqi1, 100,200);
        
   
}
    
    if(data2){
        var aqi2 = data2.data.current.pollution.aqius;
        if(aqi2 < 12){
		fill(255); 
    }
         if (aqi2<35 && aqi2 > 12){
        fill(200);
}
    if (aqi2<55 && aqi2 > 35){
        fill(150);
}
    if (aqi2<150 && aqi2 > 55){
        fill(100);
}
    if (aqi2<250 && aqi2 > 150){
        fill(50);
}
    if (aqi2<500 && aqi2 > 250){
        fill(10);
}
    ellipse(300,200,aqi2,aqi2);
       // console.log('aqi2 = ' + aqi2);
        textSize(18);
        fill(100);
        textAlign(CENTER, CENTER);
        text("WUHAN", 300, 450);
        fill(aqi2);
        text(aqi2,300,200);
}
    
        if(data3){
        var aqi3 = data3.data.current.pollution.aqius;
            
       if(aqi3 < 12){
		fill(255); 
    }
         if (aqi3<35 && aqi3 > 12){
        fill(200);
}
    if (aqi3<55 && aqi3 > 35){
        fill(150);
}
    if (aqi3<150 && aqi3 > 55){
        fill(100);
}
    if (aqi3<250 && aqi3 > 150){
        fill(50);
}
    if (aqi3<500 && aqi3 > 250){
        fill(10);
}
    ellipse(600,200,aqi3,aqi3);
           // console.log('aqi3 = ' + aqi3);
           
            textSize(18);
        textAlign(CENTER, CENTER);
        fill(100);
        text("BEIJING", 600, 450);
             fill(aqi3);
        text(aqi3, 600, 200);
             
}
    
    for (var i = 0; i < numOfDrops; i++){
        drops[i].move();
        drops[i].display();
        drops[i].update();
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
    
    this.display = function(){
        fill(50);
        line(this.x, this.y, this.x + this.windSpeed, this.y+20);    
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
