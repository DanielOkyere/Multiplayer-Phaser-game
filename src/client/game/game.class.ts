import { Player } from "../actors/player/player.class";
import { Pickup } from "../props/powers/pickup/pickup.class";
import { Projectile } from "../props/powers/projectile/projectile.class";

declare const window: any;
export class Game {
    private actors: Array<Player>;
    private actor: Player;
    protected game: Phaser.Game;

    protected manageAssets(game): void {
        this.actors = [];
        this.actor = new Player(game, this.actors);
        const projectile = new Projectile(game);
        projectile.renderPickup();

    }
    protected gameUpdate(game): void {
        if (this.actor && this.actor.controls) {
            this.actor.view();
        }
        if (this.projectile) {
            game.physics.arcade.overlap(
                this.projectile.pickup.item,
                this.actor.player,
                (pickup, actor) => {
                    this.actor.assignPickup(game, this.actor)
                };
            Pickup.kill();
            )
        }
    }

    protected properties(game): void {
        game.stage.disableVisibilityChange = true;
        game.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');
        game.add.sprite(0, 0, 'space');
        game.time.desiredFps = 60;
        game.renderer.clearBeforeRender = false;
        game.physics.startSystem(Phaser.Physics.ARCADE);

    }
}