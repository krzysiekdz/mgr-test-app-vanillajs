import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';
import row from './row.js';


exports.updateColFirst = updateColFirst;
function updateColFirst(col, word, replace) {
	updateCol(1, col, word, replace);
}

exports.updateColMid = updateColMid;
function updateColMid(col, word, replace) {
	updateCol(2, col, word, replace);
}

exports.updateColLast = updateColLast;
function updateColLast(col, word, replace) {
	updateCol(3, col, word, replace);
}

exports.updateRows10 = updateRows10;
function updateRows10(col, word, replace) {
	col--;
	var colName = 'c' + col;
	var data = state.data;
	if(data.length > 10) {
		for(var i = 0; i < data.length; i += 10) {
			//update model
			if(replace) {
				data[i][colName] = word;
			} else {
				data[i][colName] += word;
			}
			//update view
			var tr = data[i].ref;
			// var tr = table.children.item(i);
			tr.cells[col].innerText = data[i][colName];
		}
	}
}

function updateCol(type, col, word, replace) {
	col--;
	var data = state.data;
	if(data.length > 0 && (col > 0 && col < 5)) {
		var i = getTypePos(type);
		var colName = 'c' + col;
		//update model
		if(replace) {
			data[i][colName] = word;
		} else {
			data[i][colName] += word;
		}
		//update view
		var tr = data[i].ref;
		tr.cells[col].innerText = data[i][colName];
	}
}

function getTypePos(type) {
	var data = state.data;
	switch(type) {
		case 1 : return 0;
		case 2 : return Math.floor(data.length/2);
		case 3 : return data.length - 1;
	}
}