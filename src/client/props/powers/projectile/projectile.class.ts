import { Pickup } from "../pickup/pickup.class";

export class Projectile {
    public weapon: Phaser.Weapon;
    public bulletCount: number = 10;
    public pickup: Pickup;
    public player: Phaser.Sprite;

    public constructor(private gameInstance: Phaser.Game, player?) {
        this.weapon = this.gameInstance.add.weapon(10, 'laser');
        this.weapon.fireLimit = this.bulletCount;
        this.weapon.fireRate = 1000;
        if (player) {
            this.player = player;
            this.weapon.trackSprite(this.player, 10, 0, true);
        }
    }
    public fireWeapon() {
        this.weapon.fire();
        this.bulletCount = this.weapon.fireLimit - this.weapon.shots;
    }
    public renderPickup(): void {
        this.pickup = new Pickup(this.gameInstance, { x: 12, y: 12 });

    }


}