var phanTuA4 = document.getElementsByClassName('phantu-a4');
var phanTuA5 = document.getElementsByClassName('phantu-a5');

console.log(phanTuA4);
console.log(phanTuA5);

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    if ( window.pageYOffset >= 105 ){
        phanTuA5[0].classList.add('hienthi');
    }else{
        phanTuA5[0].classList.remove('hienthi');
    }
});

