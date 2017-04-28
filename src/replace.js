import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';
import row from './row.js';

exports.replaceRowsFirst = replaceRowsFirst;
function replaceRowsFirst(count) {
	count = u.parseNumber(count, 1, 2000);
	var {data} = state;
	if(data.length >= count) {
		var start = 0, end = count;

		replaceModel(start, end);

		replaceView(start, end);
	} 
}

exports.replaceRowsMid = replaceRowsMid;
function replaceRowsMid(count) {
	count = u.parseNumber(count, 1, 2000);
	var {data} = state;
	if(state.data.length >= count) {
		var start = Math.floor(data.length / 2) - Math.floor(count/2);
		var end = start + count;

		replaceModel(start, end);

		replaceView(start, end);
	} 
}

exports.replaceRowsLast = replaceRowsLast;
function replaceRowsLast(count) {
	count = u.parseNumber(count, 1, 2000);
	var {data} = state;
	if(state.data.length >= count) {
		var start = data.length - count;
		var end = start + count;

		replaceModel(start, end);

		replaceView(start, end);
	} 
}

function replaceModel(start, end) {
	var newData = u.randomObjects(end-start);
	$$replaceModel(start, end, newData);
}

function $$replaceModel(start, end, newData) {
	var {data} = state;
	for(var i = start, j = 0; i < end; i++, j++) {
		newData[j].ref = data[i].ref;
		data[i] = newData[j];
	}
}

function replaceView(start, end) {
	var {data} = state;
	for(var i = start; i < end; i++) {
		replaceRow(data[i]);
	}
}

//non-keyed replace
function replaceRow(item) {
	var tr = item.ref;
	tr.cells[0].innerText = item.id;
	tr.cells[1].innerText = item.c1;
	tr.cells[2].innerText = item.c2;
	tr.cells[3].innerText = item.c3;
	tr.cells[4].innerText = item.c4;

	//cleaning for possible existing styles
	// for(var i = 1; i <= 4; i++) {
	// 	if(tr.cells[i].classList.contains('search-selected')) {
	// 		tr.cells[i].classList.remove('search-selected');
	// 	}
	// }
}