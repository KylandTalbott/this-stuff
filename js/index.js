
// controls for changing the background
document.getElementById('background-btn').addEventListener('click', function() {
    document.getElementById('background').style.backgroundImage = "url('https://cdn.vox-cdn.com/thumbor/zqdEQgGaBh8tRrhHmk6UJC36JLs=/0x0:1000x1000/1220x813/filters:focal(416x29:576x189):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59411025/ada232f9f870cf829171fa8990916aa9.1000x1000x1.0.jpg')";
});





// button controls

// controls for the left button
document.getElementById('left').addEventListener('click', function() {
   
    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 10;

    document.getElementById('ball').style.left = newPosition +'px';

});

// controls for the right button
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});

document.getElementById('top').addEventListener('click', function() {

    var position = document.getElementById('ball').style.top;

    var newPosition = parseInt(position) - 10;

    document.getElementById('ball').style.top = newPosition + 'px';
});

document.getElementById('bottom').addEventListener('click', function() {

    var position = document.getElementById('ball').style.top;

    console.log(position)

    var newPosition = parseInt(position) + 10;

    console.log(newPosition);
    document.getElementById('ball').style.top = newPosition + 'px';

    console.log( document.getElementById('ball').style.top)
});