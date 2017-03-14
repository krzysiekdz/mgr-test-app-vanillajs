import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';
import row from './row.js';

exports.addRowsFirst = addRowsFirst;
exports.addRowsMid = addRowsMid;
exports.addRowsLast = addRowsLast;

function addRowsFirst(count, newData) {//newData - optional parameter - if it is, randomObjects is not used
	if(!newData) {
		newData = u.randomObjects(count);
	}

	//update model
	state.data = newData.concat(state.data);

	updateView(newData, 0, false);
}

function addRowsMid(count, newData) {
	if(!newData) {
		newData = u.randomObjects(count);
	}

	//update model
	var mid = 0;
	if(state.data.length > 0) {
		mid = Math.floor(state.data.length / 2);
		var args = [mid, 0];//position mid, 0 removes - for splice function 
		args = args.concat(newData);//mid, 0 + newData -> args for splice
		Array.prototype.splice.apply(state.data, args);
	} else {
		state.data = newData;
	}
	
	updateView(newData, mid, false);
}

function addRowsLast(count, newData) {
	if(!newData) {
		newData = u.randomObjects(count);
	}

	//update model
	state.data = state.data.concat(newData);

	updateView(newData, undefined, true);
}


function updateView(newData, insertBeforePos, last) {
	var table = Bindings.table;
	var docFragment = document.createDocumentFragment();

	newData.forEach(item => {
		item.ref = row.createRow(item);
		docFragment.appendChild(item.ref);
	});

	if(last) {
		table.appendChild(docFragment);	
	}
	else if(table.children.length > 0) {
		table.insertBefore(docFragment, table.children.item(insertBeforePos));
	} else {
		table.appendChild(docFragment);	
	}
}


// function addRows(count = 100) {
// 	//wersja 1
// 	// var newData = buildData(count);
// 	// data = data.concat(newData);
// 	// newData.forEach(item => {
// 	// 	table.appendChild(createRow(item));
// 	// });

// 	//sprawdzic czym sie rozni docFramgment od zwyklego diva, gdydybm do niego dodawal
// 	var newData = randomObjects(count);
// 	data = data.concat(newData);
// 	var docFragment = document.createDocumentFragment();
// 	newData.forEach(item => {
// 		docFragment.appendChild(createRow(item));
// 	});
// 	table.appendChild(docFragment);
// }