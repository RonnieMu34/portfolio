const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ParticlesArray = [];

class Particle {
    constructor() {
        this.size = Math.random() * 5 + 3;
        this.x = Math.random() * (canvas.width - 50) + (this.size + 10);
        this.y = Math.random() * (canvas.height - 50) + (this.size + 10);
        this.directionX = Math.random() * 5 - 2.5;
        this.directionY = Math.random() * 5 - 2.5;
    }

    update() {
        this.x -= this.directionX;
        this.y -= this.directionY;

        if (this.x - this.size < 0 || this.x + this.size > canvas.width) {
            this.directionX = -this.directionX;
        }

        if (this.y - this.size < - 0 || this.y + this.size > canvas.height) {
            this.directionY = -this.directionY;
        }
    }
}