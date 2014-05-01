class Player {

    width = 10;
    height = 100;
    color = "white";


    constructor(public x: number, public y: number) {

    }


    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
    }

    insersect(ball: Ball) {
        return (Math.abs(this.x - ball.x) < this.width / 2 + ball.radius) &&
               (Math.abs(this.y - ball.y) < this.height / 2 + ball.radius);
    }
}

class Ball {

    radius = 20;
    color = "white";

    vx: number;
    vy: number;

    constructor(public x: number, public y: number) {

    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        
        ctx.arc(this.x, this.y, this.radius,0,2* Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();

    }

}

class Board {
    width = 800;
    height = 600;
    margin = 50;

    player1 = new Player(this.margin, this.height / 2);
    player2 = new Player(this.width - this.margin, this.height / 2);

    ball = new Ball(this.width / 2, this.height / 2); 

    step(player1Input: number, player2Input: number)
    {
        this.movePlayer(this.player1, player1Input);
        this.movePlayer(this.player2, player2Input);

        this.moveBall();
    }

    movePlayer(player: Player, input: number) {
        player.y += input;
        player.y = Math.max(player.height / 2, player.y);
        player.y = Math.min(player.y, this.height - player.height / 2);
    }

    moveBall() {

        this.ball.x += this.ball.vx;
        this.ball.y += this.ball.vy;

        if (this.ball.vy > 0) {
            if (this.ball.y > this.height - this.ball.radius)
                this.ball.vy *= -1;
        } else if (this.ball.vy < 0) {
            if (this.ball.y < this.ball.radius)
                this.ball.vy *= -1;
        }

        if (this.ball.vx > 0) {
            if (this.player1.insersect(this.ball))
                this.ball.vx *= -1;
        } else if (this.ball.vx > 0) {
            if (this.player2.insersect(this.ball))
                this.ball.vx *= -1;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, this.width, this.height);

        this.player1.draw(ctx);
        this.player2.draw(ctx);
        this.ball.draw(ctx);
    }
}


