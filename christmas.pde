int R, G, B;
int posX, posY;
int snowArr[] = new int[500];

void setup() {  
  size(800, 500);
  background(18, 204, 221);
  //Fills the array from 1 to 500
  for (int i = 0; i<snowArr.length; i++) {
    snowArr[i] = i+1;
  }
}

void snow() {
  posX = int(random(0, width));
  posY = 0;
  
  while (posY < snowArr.length) { 
  if (mousePressed == true){
     if (keyPressed == true) {
      if (key == 'c') {
        R = int(random(0, 255));
        G = int(random(0, 255));
        B = int(random(0, 255));
        fill(R, G, B);
      }
    } else {
      fill(255);
    }
    posX = int(random(0, width));
    ellipse(posX, snowArr[posY], 10, 10);
    posY=posY+10;
  }
}

void snowman() {
  fill(255);
  ellipse(375, 450, 100, 100);
  ellipse(375, 370, 60, 60);
  ellipse(375, 320, 40, 40);
  fill(0);
  ellipse(365, 310, 10, 10);
  ellipse(385, 310, 10, 10);
  rect(355, 242, 40, 60);
  rect(340, 292, 70, 10);
  stroke(0);
  line(405, 370, 410, 330);
  line(345, 370, 340, 330);
}

void draw() {
  background(18, 204, 221);
  snowman();
  noStroke();
  fill(255, 255, 0);
  ellipse(50, 50, 100, 100);
  snow(); 
}
