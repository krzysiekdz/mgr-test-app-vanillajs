import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';

var min = 1, max = 5000;

exports.updateRowsFirst = updateRowsFirst;
function updateRowsFirst(count) {
	count = u.parseNumber(count, min, max);
	var data = state.getModel();
	if(data.length >= count) {
		var start = 0, end = count;
		updateModel(start, end);
		state.updateView();
	} 
}

exports.updateRowsMid = updateRowsMid;
function updateRowsMid(count) {
	count = u.parseNumber(count, min, max);
	var data = state.getModel();
	if(data.length >= count) {
		var start = Math.floor(data.length / 2) - Math.floor(count/2);
		var end = start + count;
		updateModel(start, end);
		state.updateView();
	} 
}

exports.updateRowsLast = updateRowsLast;
function updateRowsLast(count) {
	count = u.parseNumber(count, min, max);
	var data = state.getModel();
	if(data.length >= count) {
		var start = data.length - count;
		var end = start + count;
		updateModel(start, end);
		state.updateView();
	} 
}


function updateModel(start, end) {
	var newData = u.randomObjects(end-start);
	var data = state.getModel();
	for(var i = start, j = 0; i < end; i++, j++) {
		newData[j].id = data[i].id;
		data[i] = newData[j];
	}
}


exports.partialUpdate = partialUpdate;
function partialUpdate(every) {
	every = u.parseNumber(every, min, max);
	var data = state.getModel();
	if(data.length > 0) {
		updateModelEvery(every);
		state.updateView();
	} 
}


function updateModelEvery(every) {
	var data = state.getModel();
	var count = Math.ceil(data.length / every);
	var newData = u.randomObjects(count);
	for(var i = 0, j = 0; i < data.length; i += every, j++) {
		newData[j].id = data[i].id;
		data[i] = newData[j];
	}
}





