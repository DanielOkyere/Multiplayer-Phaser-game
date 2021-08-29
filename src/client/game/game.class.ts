import { Player } from "../actors/player/player.class";

export class Game{
    private actors: Array<Player>;
    private actor: Player;
    protected game: Phaser.Game;

    protected manageAssets(): void{

    }
    protected gameUpdate(this.actor && this.actor.controls): void {
        this.actor.view().
     }
    protected properties(): void {
        this.game.stage.disableVisibilityChange = true;
        this.game.add.titleSprite(0, 0, this.game.width, this.game.height, 'space');
        this.game.add.sprite(0, 0, 'space');
        this.game.time.desiredFps = 60;
        this.game.renderer.clearBeforeRender = false;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
    }
}