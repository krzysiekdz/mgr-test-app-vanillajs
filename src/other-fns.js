import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';
import row from './row.js';
import Add from './add.js';
import Replace from './replace.js';


exports.clearRows = clearRows;
function clearRows() {
	if(state.data.length > 0) {
		state.data = [];
		u.resetId();
		Bindings.table.remove();
		var table = Bindings.table = u.create('tbody');
		table.setAttribute('name', 'table');
		Bindings.tableWrap.appendChild(table);
	} 
}

exports.refreshRows = refreshRows;
function refreshRows() {
	if(state.data.length > 0) {
		console.log('refresh');
		Bindings.table.remove();
		var table = Bindings.table = u.create('tbody');
		table.setAttribute('name', 'table');
		Bindings.tableWrap.appendChild(table);
		state.data.forEach(item => {
			table.appendChild(row.createRow(item));
		});
	}
}

exports.fetchData = fetchData;
function fetchData(count) {
	var resource = 'data' + count + '.json';
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var newData = JSON.parse(this.responseText);
			clearRows();
			u.setId(count+1);
			Add.addRowsFirst(null, newData);
		}
	}
	xhttp.open('GET', resource, true);
	xhttp.send();
}

exports.editData = editData;
function editData() {
	var data = state.data;
	if(data.length > 0) {
		data[0].c1 = Bindings.inputEdit.value;
		Replace.replaceRow(data[0], data[0]);
	} 
}

exports.searchData = searchData;
function searchData() {
	if(state.data.length > 0 ) {
		searchFor(Bindings.inputSearch.value);
	}
}


function searchFor(txt) {
	var col = ['c1', 'c2', 'c3', 'c4'];

	state.data.forEach(item => {
		for(var i = 0; i < 4; i++) {
			var prop = item[col[i]] + "";
			if(txt !== "" && prop.indexOf(txt) !== -1) {
				item.ref.cells[i+1].classList.add('search-selected');
				if(!item.search) {
					item.search = [null, null, null, null];
				}
				item.search[i] = txt;
			} else if (item.search && item.search[i]) {
				item.search[i] = null;
				item.ref.cells[i+1].classList.remove('search-selected');
			}
			
		}
	});
}