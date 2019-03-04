window.onload = function () {

    const canvas = document.getElementById('msc');
    const source = 'image/face.jpg';

    if (canvas.getContext){
        var  size = 5;

        var ctx = canvas.getContext('2d');
        ctx.save();

        var image= new Image();

        image.src = source;

        image.onload = function () {

            canvas.width = 500;
            canvas.height = 500;
            ctx.drawImage(image, 100, 100);


            canvas.onmousedown = function (ev) {
                let startX = ev.clientX - this.offsetLeft;
                let startY = ev.clientY - this.offsetTop;
                let positionX, positionY;
                let borderWidth, borderHeight;

                this.onmousemove = function (ev) {

                 let moveX = ev.clientX;
                 let moveY = ev.clientY;

                    if (moveX > startX) {
                        borderWidth = moveX - startX;
                        positionX = startX;
                    } else {
                        borderWidth = startX - moveX;
                        positionX = moveX;
                    }

                    if (moveY > startY) {
                        borderHeight = moveY - startY;
                        positionY = startY;
                    } else {
                        borderHeight = startY - moveY;
                        positionY = moveY;
                    }


                };

                canvas.onmouseup = function (ev) {
                    canvas.onmousemove = null;
                    var mscImage;

                    for (var i = positionX; i < positionX + borderWidth; i = i + size) {
                        for (var j = positionY; j < positionY + borderHeight; j = j + size) {
                            mscImage = ctx.getImageData(i, j, size, size);
                            let colorR = mscImage.data[getCenter(size) * 4];
                            let colorG = mscImage.data[getCenter(size) * 4 + 1];
                            let colorB = mscImage.data[getCenter(size) * 4 + 2];
                            let colorO = mscImage.data[getCenter(size) * 4 + 3];

                            for (var k = 0; k < mscImage.data.length; k++) {
                                mscImage.data[k * 4] = colorR;
                                mscImage.data[k * 4 + 1] = colorG;
                                mscImage.data[k * 4 + 2] = colorB;
                                mscImage.data[k * 4 + 3] = colorO;
                            }

                            ctx.putImageData(mscImage, i, j);
                        }
                    }
                }


                return false;
            };

        }









        }
    };

function getCenter(size) {
    return (size * size / 2).toFixed(0);
}