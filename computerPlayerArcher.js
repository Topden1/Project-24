class computerPlayerArcher {
    constructor(x, y, width, height) {
        var options = {
          isStatic: true
        };
    
        this.body = Bodies.rectangle(x, y, width, height, options);
    
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/playerArcher.png");
    
            World.add(world, this.body);

            Matter.Body.seyAngle(this.body,-P1/20);
      }
    
       display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }

    if (move === "UP" && computerPlayerArcher.body.angle < 1.77) {
        angleValue = 0.1;
    }else{
        angleValue = -0.1;
    }

    if(move === "DOWN" && computerPlayerArcher.body.angle > 1.47) {
        angleValue = -0.1;
    }else{
        angleValue = 0.1;
    }
