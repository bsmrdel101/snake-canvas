import BoxCol from "../engine/classes/colliders/BoxCol";
import GameObject from "../engine/classes/gameObjects/GameObject";
import { clamp } from "../utils";


export default class Player extends GameObject {
  moveSpeed = 1;
  maxSpeed = 30;

  constructor() {
    super(new BoxCol(getCenter()));

    update(() => {
      this.handleMovement();
    });
  }

  private handleMovement = () => {
    this.velocity.x = clamp(this.velocity.x + this.moveSpeed, 0, this.maxSpeed);

    if (keysPressed['a'] || keysPressed['ArrowLeft']) {
      this.sprite.pos.x -= this.velocity.x / this.friction;
    } else if (keysPressed['d'] || keysPressed['ArrowRight']) {
      this.sprite.pos.x += this.velocity.x / this.friction;
    } else {
      this.velocity.x = 0;
    }
  };
}
