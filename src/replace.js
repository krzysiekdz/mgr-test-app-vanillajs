import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';

var min = 1, max = 5000;

exports.replaceRowsFirst = replaceRowsFirst;
function replaceRowsFirst(count) {
	count = u.parseNumber(count, min, max);
	var data = state.getModel();
	if(data.length >= count) {
		var start = 0, end = count;

		replaceModel(start, end);
		state.updateView();
	} 
}

exports.replaceRowsMid = replaceRowsMid;
function replaceRowsMid(count) {
	count = u.parseNumber(count, min, max);
	var data = state.getModel();
	if(data.length >= count) {
		var start = Math.floor(data.length / 2) - Math.floor(count/2);
		var end = start + count;

		replaceModel(start, end);
		state.updateView();
	} 
}

exports.replaceRowsLast = replaceRowsLast;
function replaceRowsLast(count) {
	count = u.parseNumber(count, min, max);
	var data = state.getModel();
	if(data.length >= count) {
		var start = data.length - count;
		var end = start + count;

		replaceModel(start, end);
		state.updateView();
	} 
}

function replaceModel(start, end) {
	var newData = u.randomObjects(end-start);
	var data = state.getModel();
	for(var i = start, j = 0; i < end; i++, j++) {
		data[i] = newData[j];
	}
}


