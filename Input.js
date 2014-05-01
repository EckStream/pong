function Input() {
	this.w = false;
	this.a = false;
	this.s = false;
	this.d = false;
	
	this.space = false;
	
	this.set = function (event, bool){
		var keycode = event.keyCode;
		
		switch(keycode){
			case 65:
				this.a = bool;
				break;
			case  83:
				this.s = bool;
				break;
			case  68:
				this.d = bool;
				break;
			case  87:
				this.w = bool;
				break;
			case  32:
				this.space = bool;
				break;
				
					
		}
	};

}
