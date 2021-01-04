class Ball{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
		this.ball = loadImage("untitled folder/paper.png");
		this.ball.scale = 0.5;
		World.add(world, this.body);

	}
	display(){
			
			var paperpos = this.body.position;		
			push();
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			//ellipse(0,0,this.r, this.r);
			pop()
			image(this.ball, paperpos.x - 100,paperpos.y - 100);
	}

}