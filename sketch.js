num_arr = new Array(15);
let color_keeper;
function setup() {
  createCanvas(400, 400);
  for (i = 0; i < 16; i++) {
    num_arr[i] = new Number();
    num_arr[i].set_cord(i % 4, floor(i / 4));
  }
  start();
}

function draw() {
  background(220);
  lines();
  board();
}

function keyPressed() {
  moved = false
  if (keyCode === 68) {
    for (z = 0; z < 4; z++) {
      for (i = 0; i < 4; i++) {
        for (j = 2; j >= 0; j--) {
          if (num_arr[4 * i + j].number != 0 && num_arr[4 * i + j + 1].number == 0) {
            num_arr[4 * i + j + 1].number = num_arr[4 * i + j].number;
            num_arr[4 * i + j].number = 0;
            moved=true;
          }
          if (num_arr[4 * i + j].number == num_arr[4 * i + j + 1].number&&num_arr[4 * i + j + 1].number!=0 && num_arr[4 * i + j].added==false &&num_arr[4 * i + j + 1].added==false) {
            num_arr[4 * i + j + 1].number = num_arr[4 * i + j + 1].number * 2
            num_arr[4 * i + j].number = 0;
            num_arr[4 * i + j + 1].added = true;
            moved=true;
          }
        }
      }
    }
  }
  if (keyCode === 65) {
    for (z = 0; z < 4; z++) {
      for (i = 0; i < 4; i++) {
        for (j = 1; j <4; j++) {
          if (num_arr[4 * i + j].number != 0 && num_arr[4 * i + j - 1].number == 0) {
            num_arr[4 * i + j - 1].number = num_arr[4 * i + j].number;
            num_arr[4 * i + j].number = 0;
            moved=true;
          }
          if (num_arr[4 * i + j].number == num_arr[4 * i + j - 1].number && num_arr[4 * i + j].number!=0 && num_arr[4 * i + j].added==false && num_arr[4 * i + j - 1].added==false) {
            num_arr[4 * i + j - 1].number = num_arr[4 * i + j - 1].number * 2
            num_arr[4 * i + j].number = 0;
            num_arr[4 * i + j - 1].added = true;
            moved=true;
          }
        }
      }
    }
  }
  if (keyCode === 87) {
    for (z = 0; z < 4; z++) {
      for (i = 0; i < 4; i++) {
        for (j = 1; j <4; j++) {
          if (num_arr[4 * j + i].number != 0 && num_arr[4 * (j-1) + i].number == 0) {
            num_arr[4 * (j-1) + i].number = num_arr[4 * j + i].number;
            num_arr[4 * j + i].number = 0;
            moved=true;
          }
          if (num_arr[4 * j + i].number == num_arr[4 * (j-1) + i].number &&num_arr[4 * (j-1) + i].number!=0 && num_arr[4 * j + i].added ==false &&num_arr[4 * (j-1) + i].added ==false) {
            num_arr[4 * (j-1) + i].number = num_arr[4 * (j-1) + i].number * 2
            num_arr[4 * j + i].number = 0;
            num_arr[4 * (j-1) + i].added = true;
            moved=true;
          }
        }
      }
    }
  }
  if (keyCode === 83) {
    for (z = 0; z < 4; z++) {
      for (i = 0; i < 4; i++) {
        for (j = 2; j>=0; j--) {
          if (num_arr[4 * j + i].number != 0 && num_arr[4 * (j+1) + i].number == 0) {
            num_arr[4 * (j+1) + i].number = num_arr[4 * j + i].number;
            num_arr[4 * j + i].number = 0;
            moved=true;
          }
          if (num_arr[4 * j + i].number == num_arr[4 * (j+1) + i].number &&num_arr[4 * (j+1) + i].number!=0 && num_arr[4 * j + i].added == false && num_arr[4 * (j+1) + i].added ==false) {
            num_arr[4 * (j+1) + i].number = num_arr[4 * (j+1) + i].number * 2
            num_arr[4 * j + i].number = 0;
            moved=true;
            num_arr[4 * (j+1) + i].added = true;
          }
        }
      }
    }
  }
  if(moved==true){
   rand_add(); 
  }
}

function lines() {
  strokeWeight(3);
  line(width / 4, 0, width / 4, width);
  line(width / 2, 0, width / 2, width);
  line(3 * width / 4, 0, 3 * width / 4, width);
  line(0, height / 4, width, height / 4);
  line(0, height / 2, width, height / 2);
  line(0, 3 * height / 4, width, 3 * height / 4);
  strokeWeight(1);
}

function board() {
  for (i = 0; i < 16; i++) {
    num_arr[i].display();
    num_arr[i].added = false;
    
  }
}

function rand_add() {
  r = floor(random(10));
  if (r < 9) {
    num_to_add = 2;
  } else {
    num_to_add = 4;
  }
  if (board_is_full()) {
    return false;
  } else {
    r = floor(random(16));

    while (num_arr[r].number != 0) {
      r = floor(random(16));
    }
    num_arr[r].number = num_to_add;
  }


}

function board_is_full() {
  for (i = 0; i < 16; i++) {
    if (num_arr[i].number == 0) {
      return false;
    }
  }
  return true;
}

function start() {
  rand_add();
  rand_add();
}