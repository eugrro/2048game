class Number{
	
	constructor(){
		this.number = 0;
		this.x = 0;
		this.y = 0;
    this.added = false;
		
	}
	set_cord(x, y){
		this.x = x;
		this.y = y;
	}
	display(){
    if(this.number!=0){
		textSize(40);
		fill(224, 168, 56);	
		rect(width/4*this.x, height/4*this.y+1, width/4-1, height/4-1)
		fill(0, 0, 0);
		textAlign(CENTER);
		let num = ""+this.number;
		text(num, width/4*this.x+5, height/4*this.y+25, width/4, height/4);
  }
	}
}