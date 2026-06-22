const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const particles = [];

for(let i=0;i<80;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        vx:(Math.random()-0.5)*0.6,
        vy:(Math.random()-0.5)*0.6
    });
}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        p.x+=p.vx;
        p.y+=p.vy;

        if(p.x<0||p.x>canvas.width)p.vx*=-1;
        if(p.y<0||p.y>canvas.height)p.vy*=-1;

        ctx.fillStyle="#6366f1";
        ctx.beginPath();
        ctx.arc(p.x,p.y,2,0,Math.PI*2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();
