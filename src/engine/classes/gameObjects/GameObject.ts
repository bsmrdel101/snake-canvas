import Anim from "../animations/Anim"
import BoxCol from "../colliders/BoxCol"
import { gameObjectManager } from "./GameObjectManager"

export default class GameObject {
  sprite?: Sprite;
  col: Col;
  friction = 15;
  velocity: Vec2 = { x: 0, y: 0 };
  anim: Anim;
  readonly tags: string[];

  constructor(sprite?: Sprite, col?: Col) {
    this.sprite = sprite;
    this.col = col || new BoxCol();
    this.col.parent = this;
    gameObjectManager.add(this);
  }

  setAnim(anim: Anim) {
    this.anim = anim;
  }

  draw() {
    if (this.anim) {
      this.anim.draw();
    } else {
      this.sprite.draw();
    }
  };

  destroy() {
    this.sprite.destroy();
  };
};
