function setup() {
  createCanvas(windowWidth, windowHeight);
  background(121, 223,33);
  // line();
  angleMode(DEGREES)  

  rect(100, 100, 200,100,0,20,20,20);

  translate(300,200);
  rotate(15);

  push()//store it
  fill('red')
  rect(100, 250, 200,100,0,20,20,20);
  ellipse(200,150,100);
  rotate(-15);
  translate(0,0);
  pop()//against push
 

  let rectx = 400;
  let recty = 100;
  let rectd = 400;

  rect(rectx,recty,rectd);
  ellipse(rectx + rectd/2,recty + rectd/2,rectd);
  // quad(x1, y1, x2, y2, x3, y3, x4, y4)
  // fill(v1, [v2], [v3], [a])
  // stroke(v1, [v2], [v3], [a])
  // strokeWeight(weight,height,windowHeight,windowWidth,mouseX,mouseY)
  //colorMode(HSB)
  fill(12,22,334)
  // stroke(300,330,34,90)
  stroke('yellow')
  strokeWeight(22)
  ellipse(windowWidth/2,windowHeight/2,200)



}

function draw() {
}
