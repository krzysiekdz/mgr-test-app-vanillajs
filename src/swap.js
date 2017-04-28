import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';
import row from './row.js';

exports.swapRowsFirst = swapRowsFirst;
function swapRowsFirst() {
	if(state.data.length > 1) {
		var i = 0;
		var j = 1;
		swap(i, j);
	}
}

exports.swapRowsMid = swapRowsMid;
function swapRowsMid() {
	if(state.data.length > 1) {
		var i = Math.floor(state.data.length / 2) - 1;
		var j = i+1;
		swap(i, j);
	}
}

exports.swapRowsLast = swapRowsLast;
function swapRowsLast() {
	if(state.data.length > 1) {
		var i = state.data.length-2;
		var j = i+1;
		swap(i, j);
	}
}

//non-keyed swap
function swap(i, j) {
	var data = state.data;

	//update model
	var temp = data[i];
		state.data[i] = data[j];
		state.data[j] = temp;


	var a = state.data[i];
	var b = state.data[j];

	//update view
	a.ref.cells[0].innerText = b.id;
	a.ref.cells[1].innerText = b.c1;
	a.ref.cells[2].innerText = b.c2;
	a.ref.cells[3].innerText = b.c3;
	a.ref.cells[4].innerText = b.c4;

	b.ref.cells[0].innerText = a.id;
	b.ref.cells[1].innerText = a.c1;
	b.ref.cells[2].innerText = a.c2;
	b.ref.cells[3].innerText = a.c3;
	b.ref.cells[4].innerText = a.c4;

	//swaping styles of td's
	// for(var i = 1; i <= 4; i++) {
	// 	swapClasses(a.ref.cells[i], b.ref.cells[i]);
	// }

	//swaping styles of tr's
	// swapClasses(a.ref, b.ref);

	//swaping view references
	temp = a.ref;
	a.ref = b.ref;
	b.ref = temp;
}


// function swapClasses(el1, el2) {
// 	var dirty = false;
// 	var list1 = el1.classList,
// 		list2 = el2.classList;

// 	if(list1.length !== list2.length) {//diffrent lengths of styles list
// 		dirty = true;
// 	}
// 	else {
// 		list1.forEach(function(style) {
// 			if(!list2.contains(style)) {
// 				dirty = true;
// 			}
// 		});
// 	}
	
// 	//swaping styles if changes detected
// 	if(dirty) {
// 		var v1 = list1.value,
// 			v2 = list2.value;
// 		el1.className = v2;
// 		el2.className = v1;
// 	}

// 	return dirty;
// }