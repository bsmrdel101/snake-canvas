import Player from "../gameObjects/Player";


export default function game() {
  const player = new Player();
  
  render(() => {
    setBackgroundColor('#7dbec9');
    player.draw();
  });
};
