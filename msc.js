window.onload = function () {

    const body = document.body;
    const canvas = document.getElementById('msc');
    const textArea = document.getElementById('urls');
    let  source = 'image/face.jpg';


    if (canvas.getContext){
        var  size = 5;

        console.log(source);
        var ctx = canvas.getContext('2d');



            body.onmousedown = function (ev) {
                let startX = ev.clientX - this.offsetLeft;
                let startY = ev.clientY - this.offsetTop;
                let positionX, positionY;

                this.onmousemove = function (ev) {
                    let moveX = ev.clientX;
                    let moveY = ev.clientY;

                    if (moveX > startX) {
                        canvas.width = moveX - startX;
                        positionX = startX;
                    }else {
                        canvas.width = startX - moveX;
                        positionX = moveX;
                    }

                    if (moveY > startY) {
                        canvas.height = moveY - startY;
                        positionY = startY;
                    }else {
                        canvas.height = startY - moveY;
                        positionY = moveY;
                    }




                    canvas.style = 'position: absolute;' +
                                    'left: ' + positionX + 'px;' +
                                    'top: ' + positionY + 'px;' +
                                    'border: 2px solid red';


                };



                return false;
            };

            body.onmouseup = function (ev) {
                body.onmousemove = null;

                var  mscImage;

                debugger
                for (var i = 0; i < canvas.width; i = i + size){
                    for (var j = 0; j < canvas.height; j = j + size){
                        mscImage = ctx.getImageData(i, j, size, size);
                        let colorR = mscImage.data[getCenter(size) * 4];
                        let colorG = mscImage.data[getCenter(size) * 4 + 1];
                        let colorB = mscImage.data[getCenter(size) * 4 + 2];
                        let colorO = mscImage.data[getCenter(size) * 4 + 3];

                        for (var k = 0; k < mscImage.data.length; k++){
                            mscImage.data[k * 4] = colorR;
                            mscImage.data[k * 4 + 1] = colorG;
                            mscImage.data[k * 4 + 2] = colorB;
                            mscImage.data[k * 4 + 3] = colorO;
                        }

                        ctx.putImageData(mscImage, i, j);
                    }
                }
            }







        // image.onload = function () {
        //
        //     canvas.width = image.width * 2;
        //     canvas.height = image.height;
        //     ctx.drawImage(image, 0, 0);



        }
    };

function getCenter(size) {
    return (size * size / 2).toFixed(0);
}