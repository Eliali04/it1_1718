var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Bokser
c.fillStyle = 'red';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'green';
c.fillRect(200, 200, 300, 400);
c.fillStyle = 'red';
c.fillRect(350, 410, 200, 100);
c.fillStyle = 'yellow';
c.fillRect(150, 300, 100, 100);

// Linjer
c.beginPath();
c.moveTo(70, 350);
c.lineTo(350, 100);
c.lineTo(300, 300);
c.lineTo(70, 350);
c.fillStyle = 'rgba(0, 255, 0, 0.3)';
c.strokeStyle = 'red';
c.fill();
c.stroke();


// Sirkel (arc)
c.beginPath();
c.arc(300, 300, 30, 0, 2*Math.PI);
c.strokeStyle = 'blue';
c.fillStyle = 'rgba(0, 255, 0, 0.3)';
c.fill();
c.stroke();

// Mange sirkler
for(var i = 1; i<3; i++){
    c.beginPath();
    c.arc(150+i*2, 150+i*8, 30+i*10, 0, 2*Math.PI);
    c.fillStyle = 'rgba(0, 255, 0, 0.3)';
    c.strokeStyle = 'blue';
    c.stroke();
}

// Tilfeldig
for(var i = 1; i<100; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var r = Math.round( Math.random() * 255);
    var g = Math.round( Math.random() * 255);
    var b = Math.round( Math.random() * 255);
    c.beginPath();
    c.arc(x, y, 10, 0, 2*Math.PI);
    c.strokeStyle = 'rgba('+r+','+g+','+b+',1)';
    c.stroke();
    console.log(r);
}




