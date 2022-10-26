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
}