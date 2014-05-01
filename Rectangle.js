function Rectangle(x, y, w, h){
	
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		
		this.contains = function(x,y){
			return 	x >= this.x && x <= (this.x + this.w) &&
					y >= this.y && y <= (this.y + this.h);
		};
		
		this.intersects = function(r){
			return 	r.x <= (this.x + this.w) && (r.x + r.w) >= this.x &&
					r.y <= (this.y + this.h) && (r.y + r.h) >= this.y; 
		};
		
		this.draw = function(color){
			ctx.fillStyle = color;
			ctx.fillRect(this.x, this.y, this.w, this.h);
		};
}
