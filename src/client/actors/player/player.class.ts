import { KeyboardControl } from '../../controls/keyboard.class'
import { Hud } from '../../hud/hud.class';
import { Projectile } from '../../props/powers/projectile/projectile.class';


export class Player{
    public player: Phaser.Sprite;
    public controls: KeyboardControl;
    public playerState: Map<string, boolean | number>;
    public angularVelocity: number = 300;

    public hud: Hud;
    public projectile: Projectile;

    constructor(private gameInstance: Phaser.Game, public playerInstance: any) {
        this.createPlayer(this.gameInstance);
        this.playerInstance = playerInstance;
        this.playerState = new Map();
    }
    public createPlayer(gameInstance): void{
        this.addControls();
        this.player = gameInstance.add.sprite(100, 100, 'shooter-sprite');
        this.player.id = '1';
        this.player.anchor.setTo(0.5, 0.5);
        this.player.animations.add('accelerating', [1, 0], 60, false);
        this.player.name = 'Your name';
        this.attachPhysics(gameInstance);
        this.hud = new Hud();
        this.hud.setName(gameInstance, this.player);
        
    }
    public assignPickup(game: Phaser.Game, player?: { player: any; }): void{
        this.projectile = new Projectile(game, player.player);
        this.playerState.set('ammo', this.projectile.bulletCount);
        this.hud.setAmmo(game, player.player, this.projectile);
    }
    public view(): void{
        this.controls.update();
        if (this.projectile) {
            this.hud.update(this.playerState.get('ammo'));
        }
        
    }
    private addControls(): void{
        this.controls = new KeyboardControl(this.gameInstance, this);

    }

    private attachPhysics(gameInstance): void{
        gameInstance.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldsBounds = true;
        this.player.body.bounce.setTo(10, 10);
        this.player.body.gravity.y = 0;
        this.player.body.drag.set(80);
        this.player.body.maxVelocity.set(100);
        this.player.body.immovable = false;
    }
}