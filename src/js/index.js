import '../css/business/index.css';
import '../css/business/index.less';
import '../img/b.jpg';

console.log(1111);
// var a;

let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

let htmlDom = document.getElementsByTagName('html')[0];

htmlDom.style.fontSize = htmlWidth / 10 + 'px';
