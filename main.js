function increaseFontSize(size){
	return function(){
		document.body.style.fontSize = size + 'px';
	};
}


var size12 = increaseFontSize(12);
var size14 = increaseFontSize(14);
var size16 = increaseFontSize(16);

document.getElementById('btnLarge').onclick = size16;
document.getElementById('btnMedium').onclick = size14;
document.getElementById('btnSmall').onclick = size12;


// now change body color

function changeBodyColor(color){
	return function(){
		document.body.style.background = color;
	};
}

var purple = changeBodyColor('#7E57C2');
var indigo = changeBodyColor('#5C6BC0');
var blue = changeBodyColor('#42A5F5');

document.getElementById('btnPurple').onclick = purple;
document.getElementById('btnIndigo').onclick = indigo;
document.getElementById('btnBlue').onclick = blue;


// lexical chaining clouse

var counter = (function(){

	var privateCounter = 0;

	function changeBy(val){
		privateCounter += val;
	}

	return {
		increment: function(){
			changeBy(1);
		},
		decrement: function(){
			changeBy(-1);
		},
		value: function(){
			return privateCounter;
		}
	};


})();

console.log(counter.value());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.value());



// study promise

// const wait = time => new Promise((resolve) => setTimeout(resolve, time));

// wait(3000).then(() => console.log('Hello!')); // 'Hello!


// setTimeout(function(){
// 	console.log("I am coming...");
// },3000);


// const House = new Promise((resolve,reject)) =>{
// 	resolve("hello");
// 	reject("Reason");
// };


var myPara = document.getElementById('para');
var btnPara = document.getElementById('btnPara');

var mainContent = document.getElementById('mainContent');

var z = document.createElement('p');

z.innerHTML = myPara.innerHTML;

btnPara.addEventListener('click',function(){
	mainContent.appendChild(z);
});


