class log {
    constructor(x, y, width, height) {
        var option = {
            isStatic: true,
            density: 1.2

        }
        this.body = Bodies.rectangle(x, y, width, height, option)
        this.width = width
        this.height = height
        this.image = loadImage("dustbingreen.png")
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0, 200, 450);
        pop();
    }
}










