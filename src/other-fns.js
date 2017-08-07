import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';
import Add from './add.js';


exports.clearRows = clearRows;
function clearRows() {
	var data = state.getModel();
	if(data.length > 0) {
		state.setModel([]);
		u.resetId();
		state.updateView();

		//find the fastest remove method
		// Bindings.table.remove();

		// var table = Bindings.table = u.create('tbody');
		// table.setAttribute('name', 'table');
		// Bindings.tableWrap.appendChild(table);
	} 
}

exports.paintModel = state.paintModel;

exports.fetchData = fetchData;
function fetchData(count) {
	var host = u.host + 'data-files/';
	var resource = 'data' + count + '.json';
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var newData = JSON.parse(this.responseText);
			clearRows();
			u.setId(count+1);
			Add.addRowsFirst(1, newData);
		}
	}
	xhttp.open('GET', host + resource, true);
	xhttp.send();
}

exports.editData = editData;
function editData() {
	var data = state.getModel();
	if(data.length > 0) {
		var item = u.copyItem(data[0]);
		item.c1 = Bindings.inputEdit.value;
		data[0] = item;
		state.updateView();
	} 
}

exports.inputData = inputData;
function inputData(e) {
	Bindings.inputInputView.innerText = e.target.value;
}

exports.searchData = searchData;
function searchData() {
	if(state.getModel().length > 0 ) {
		searchFor(Bindings.inputSearch.value);
	}
}

function searchFor(txt) {
	var col = ['c1', 'c2', 'c3', 'c4'];
	var rows = state.getRows();

	state.getModel().forEach((item, k) => {
		for(var i = 0; i < 4; i++) {
			var prop = item[col[i]] + "";
			if(txt !== "" && prop.indexOf(txt) !== -1) {
				rows[k].cells[i+1].classList.add('search-selected');
				if(!item.search) {
					item.search = [null, null, null, null];
				}
				item.search[i] = txt;
			} else if (item.search && item.search[i]) {
				item.search[i] = null;
				rows[k].cells[i+1].classList.remove('search-selected');
			}
			
		}
	});
}