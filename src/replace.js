import u from './util.js';
import state from './app-state.js';

exports.replaceRowsFirst = replaceRowsFirst;
function replaceRowsFirst(count) {
	var {data} = state;
	if(data.length >= count) {
		var newData = u.randomObjects(count);
		for(var i = 0; i < count; i++) {
			//replace model and view
			replaceRow(data[i], newData[i]);
			// replaceRowSlow(table.children.item(i), data[i], newData[i]);
		}
	} 
}

exports.replaceRowsMid = replaceRowsMid;
function replaceRowsMid(count) {
	var {data} = state;
	if(state.data.length >= count) {
		var newData = u.randomObjects(count);
		var start = Math.floor(data.length / 2) - Math.floor(count/2);
		var end = start + count;
		for(var i = start, j = 0; i < end; i++, j++) {
			//replace model and view
			replaceRow(data[i], newData[j]);
			// replaceRowSlow(table.children.item(i), newData[j], data[i]);
		}
	} 
}

exports.replaceRowsLast = replaceRowsLast;
function replaceRowsLast(count) {
	var {data} = state;
	if(state.data.length >= count) {
		var newData = u.randomObjects(count);
		var start = data.length - count;
		var end = start + count;
		for(var i = start, j = 0; i < end; i++, j++) {
			//replace model and view
			replaceRow(data[i], newData[j]);
			// replaceRowSlow(table.children.item(i), newData[j], data[i]);
		}
	} 
}


//non-keyed replace
exports.replaceRow = replaceRow;
function replaceRow(item, newItem) {
	item.id = newItem.id;
	item.c1 = newItem.c1;
	item.c2 = newItem.c2;
	item.c3 = newItem.c3;
	item.c4 = newItem.c4;

	var tr = item.ref;
	tr.cells[0].innerText = item.id;
	tr.cells[1].innerText = item.c1;
	tr.cells[2].innerText = item.c2;
	tr.cells[3].innerText = item.c3;
	tr.cells[4].innerText = item.c4;

	//cleaning for possible existing styles
	for(var i = 1; i <= 4; i++) {
		if(tr.cells[i].classList.contains('search-selected')) {
			tr.cells[i].classList.remove('search-selected');
		}
	}

	// item.search = [null, null, null, null];
	// item.visible

	//something similar to keyed replace...

	// tr.cells[0].remove();
	// tr.cells[0].remove();
	// tr.insertBefore(create('td'), tr.cells[0]);
	// tr.insertBefore(create('td'), tr.cells[0]);

	// tr.cells[0].appendChild(text(item.id));
	// tr.cells[1].appendChild(text(item.label));
}

function replaceRowSlow(tr, item, newItem) {//slow because tr is passed through API table.children.item(i)
	item.id = newItem.id;
	item.c1 = newItem.c1;
	item.c2 = newItem.c2;
	item.c3 = newItem.c3;
	item.c4 = newItem.c4;

	tr.cells[0].innerText = item.id;
	tr.cells[1].innerText = item.c1;
	tr.cells[2].innerText = item.c2;
	tr.cells[3].innerText = item.c3;
	tr.cells[4].innerText = item.c4;
}


// do sprawdzenia
// var txt = tr.cells[1].firstChild.nodeValue;
// tr.cells[1].firstChild.nodeValue = txt + 'a';