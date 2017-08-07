import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';

exports.swapRowsFirst = swapRowsFirst;
function swapRowsFirst() {
	var data = state.getModel();
	if(data.length > 1) {
		var i = 0;
		var j = 1;
		swap(i, j);
	}
}

exports.swapRowsMid = swapRowsMid;
function swapRowsMid() {
	var data = state.getModel();
	if(data.length > 1) {
		var i = Math.floor(data.length / 2) - 1;
		var j = i+1;
		swap(i, j);
	}
}

exports.swapRowsLast = swapRowsLast;
function swapRowsLast() {
	var data = state.getModel();
	if(data.length > 1) {
		var i = data.length-2;
		var j = i+1;
		swap(i, j);
	}
}

//non-keyed swap
function swap(i, j) {
	if(i >= j) return; //j has to be larger than i

	//update model
	var data = state.getModel();
	var temp = data[i];
	data[i] = data[j];
	data[j] = temp;

	state.updateView();

	//swaping styles of td's
	// for(var n = 1; n <= 4; n++) {
	// 	swapClasses(rows[i].cells[n], rows[j].cells[n]);
	// }

	//swaping styles of tr's
	// swapClasses(rows[i], rows[j]);
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