window.onload = function () {

    const canvas = document.getElementById('clock');
    const width = 700;
    const height = 700;
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    if (canvas.getContext) {
        const ctx  = canvas.getContext('2d');

        ctx.translate(width/2, height/2);   // 中心点

        ctx.save();
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, 360 * Math.PI / 180);
        ctx.fill();
        ctx.restore();

        ctx.save();                         // 外围圆盘
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(0, 0, 300, 0, 360 * Math.PI / 180);
        ctx.stroke();
        ctx.restore();


        for (let i = 0; i <= 12; i++){      // 整点时刻
            ctx.save();
            ctx.lineWidth = 3;
            ctx.rotate(i * 30 * Math.PI / 180);
            ctx.beginPath();
            ctx.moveTo(0, -300);
            ctx.lineTo(0, -250);
            ctx.stroke();
            ctx.restore();
        }


        for (let i = 0; i <= 60; i++){      // 分钟时刻
            ctx.save();
            ctx.rotate(i * 6 * Math.PI / 180);
            ctx.beginPath();
            ctx.moveTo(0, -300);
            ctx.lineTo(0, -280);
            ctx.stroke();
            ctx.restore();
        }


        setInterval(function () {

            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'white';
            ctx.arc(0, 0, 240, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.restore();

            ctx.save();
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(0, 0, 5, 0, 360 * Math.PI / 180);             // 圆心圆
            ctx.fill();
            ctx.restore();


            let now = new Date();
            let second = now.getSeconds();
            let minute = now.getMinutes() + second / 60;
            let hour = (now.getHours() > 12 ? now.getHours() - 12 : now.getHours()) + minute / 60;


            ctx.save();             // 时针
            ctx.lineWidth = 5;
            ctx.rotate((hour / 6) * Math.PI);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -120);
            ctx.stroke();
            ctx.restore();

            ctx.save();
            ctx.lineWidth = 3;
            ctx.rotate((minute / 30) * Math.PI);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -200);
            ctx.stroke();
            ctx.restore();

            ctx.save();
            ctx.strokeStyle = 'red';
            ctx.rotate((second / 30) * Math.PI);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -240);
            ctx.stroke();
            ctx.restore();

        });



    }else {
        let span = canvas.childNodes[1];
        let now = new Date();
        span.appendChild(document.createTextNode(now));
    }


    return false;
}