//Create variables here
var dog;
var food;
var Food;
var stock;
var milk;
var lastfedtime;
lastfedtime = "if you feed your dog the feeded time will show here";
var currenttime;
var lastfedhour;
function preload()
{
  //load images here
  dogIMG = loadImage("dogImg.png");
  happydogIMG = loadImage("dogImg1.png");
  milkIMG = loadImage("Milk.png");
}

function setup() {
  createCanvas(800, 800);
  database = firebase.database();
  dog = createSprite(650,500,10,10);
  dog.addImage(dogIMG);
  dog.scale = 0.2;

  food = database.ref('food');
  food.on("value",readstock);

  milk = new Foodtype();

  stock = 20;




}


function draw() {  
background("teal");
  drawSprites();
  //add styles here

textSize(20);
fill("black");


milk.draw();
text("food remaining:" + stock,400,dog.y - 50);


milk.feedbutton.mousePressed(()=>{
if(stock > 0)
stock -= 1,
writeStock(stock);
lastfedtime = hour() + ':' + minute();
lastfedhour = hour();
console.log(lastfedtime);
});

milk.addstockbutton.mousePressed(()=>{
stock = 20;
writeStock(20);
});

if(frameCount % 1 == 0){
currenttime = hour();
console.log(currenttime);
}

text('LastFed' +":"+ lastfedtime,100,20);

if(stock == 0){
  textSize(30);
  fill(255,0,0);
  text("you have no food",375,200);
}

milk.createbottle();

}

function readstock(data){
stock = data.val();
}

function writeStock(number){
database.ref('/').update({
food: number
})
}