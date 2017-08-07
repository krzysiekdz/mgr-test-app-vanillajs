import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';

exports.addRowsFirst = addRowsFirst;
exports.addRowsMid = addRowsMid;
exports.addRowsLast = addRowsLast;

var min = 1, max = 5000;

function addRowsFirst(count, newData) {//newData - optional parameter - if it is, randomObjects is not used
	count = u.parseNumber(count, min, max);
	if(!newData) {
		newData = u.randomObjects(count);
	}

	//update model
	state.setModel(newData.concat(state.getModel()));

	//update in non-keyed version
	state.updateView();
}

function addRowsMid(count, newData) {
	count = u.parseNumber(count, min, max);
	if(!newData) {
		newData = u.randomObjects(count);
	}

	//update model
	var mid = 0, model = state.getModel();
	if(model.length > 0) {
		mid = Math.floor(model.length / 2);
		var args = [mid, 0];//position mid, 0 removes - for splice function 
		args = args.concat(newData);//mid, 0 + newData -> args for splice
		Array.prototype.splice.apply(model, args);
	} else {
		state.setModel(newData);
	}
	
	state.updateView();
}

function addRowsLast(count, newData) {
	count = u.parseNumber(count, min, max);
	if(!newData) {
		newData = u.randomObjects(count);
	}

	//update model
	var newModel = state.getModel().concat(newData);
	state.setModel(newModel);

	state.updateView();
}


