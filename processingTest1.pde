int i =0;
int j = 500;

boolean bounce;

void setup() { 
size(500, 500); 
 fill(255,0, 255);  
} 


void draw() { 
  background(255,255,255);  
  ellipse(i, height/2, 100 , 100);
  ellipse(j, height/2, 100 , 100);  
  ellipse(height/2, i, 100 , 100);
  ellipse(height/2, j, 100 , 100);
  ellipse(i, i, 100 , 100);
  ellipse(j, j, 100 , 100);
  ellipse(i, j, 100 , 100);
  ellipse(j, i, 100 , 100);
  
  if (i == height) {
    bounce = true;
  } else if (i == 0) {
    bounce = false;
  }
  
  if (!bounce) {
    i++;
    j--;
  } else {
    j++;
    i--;
  }
  
}
