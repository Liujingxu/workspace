window.onload = function () {

    const canvas = document.getElementById('msc');
    const textArea = document.getElementById('urls');
    let  source = 'image/face.jpg';





    if (canvas.getContext){
        var  size = 5;

        console.log(source);
        var ctx = canvas.getContext('2d');

        ctx.save();
        var image= new Image();

        image.src = source;

        image.onload = function () {

            canvas.width = image.width * 2;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);

            var  mscImage;

            for (var i = 0; i < image.width; i = i + size){
                for (var j = 0; j < image.height; j = j + size){
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

                    ctx.putImageData(mscImage, i + image.width, j);
                }
            }

        }
    }
};

function getCenter(size) {
    return (size * size / 2).toFixed(0);
}