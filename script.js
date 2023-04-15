//your JS code here. If required.
const item = document.getElementById('level');
const allItems = document.querySelectorAll('li');

let count = 0;

for (let ele of allItems) {
	count++;
	if(ele === item) break;
}

alert('The level of the element is: ' + count);