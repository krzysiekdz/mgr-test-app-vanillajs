import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';

var filterOn = false;
var classNameFiltered = 'filtered';
var backup = [];

exports.filter = filterWithRemove;


function filter1() {
	var data = state.getModel(), rows = state.getRows();
	var table = Bindings.table;

	if(data.length > 0 && !filterOn) {
		filterOn = true;

		for(var i = 0; i < data.length; i++) {
			//update model and view 
			if(data[i].id % 10 === 0) {
				data[i].visible = true;
			} else {
				data[i].visible = false;
				var tr = rows[i];
				tr.className = 'visible-off';
			}
		}
		table.classList.add(classNameFiltered);
		
	} else if (data.length > 0 && filterOn) {
		filterOn = false;

		for(var i = 0; i < data.length; i++) {
			//update model and view 
			if(!data[i].visible) {
				data[i].visible = true;
				var tr = rows[i];
				// var tr = table.children.item(i);
				tr.className = 'visible-on';
			}
		}
		table.classList.remove(classNameFiltered);
	}
}

//non-keyed version: filtering, rerender filtered, remove rest 
function filterWithRemove() {
	var data = state.getModel(), rows = state.getRows();
	var table = Bindings.table;

	if(data.length > 0 && !filterOn) {
		filterOn = true;
		backup = data.slice();
		var newState = [];

		for(var i = 0; i < data.length; i++) {
			//update model
			if(data[i].id % 10 === 0) {
				newState.push(data[i]);
			} 
		}
		state.setModel(newState);
		state.updateView();
		table.classList.add(classNameFiltered);
		
	} else if (data.length > 0 && filterOn) {
		filterOn = false;

		state.setModel(backup);
		state.updateView();		
		table.classList.remove(classNameFiltered);
	}
}


// function filter2() {
// 	var data = state.data;
// 	var {tableWrap, table} = Bindings;

// 	if(data.length > 0 && !filterOn) {
// 		filterOn = true;
// 		tableWrap.removeChild(table);
// 	} else if (data.length > 0 && filterOn) {
// 		filterOn = false;
// 		tableWrap.appendChild(table);
// 	}
// }


// function filter3() {
// 	var data = state.data;
// 	var {tableWrap} = Bindings;

// 	if(data.length > 0 && !filterOn) {
// 		filterOn = true;
// 		tableWrap.classList.add('visible-off');
// 	} else if (data.length > 0 && filterOn) {
// 		filterOn = false;
// 		tableWrap.classList.remove('visible-off');
// 	}
// }