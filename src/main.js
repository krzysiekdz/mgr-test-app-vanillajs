import Bindings from './bind.js';
import Add from './add.js';
import Repl from './replace.js';
import Fns from './other-fns.js';
import Update from './update.js';
import Swap from './swap.js';
import Filter from './filter.js';
import u from './util.js';


document.addEventListener('DOMContentLoaded', function() {

	Bindings.bind();

	u.stopMeasure();

	//clear, refresh
	Bindings.btnClear.addEventListener('click', function() {
		Fns.clearRows();
	}, false);
	Bindings.btnRefresh.addEventListener('click', function() {
		Fns.refreshRows();
	}, false);

	//init
	Bindings.btnInit.addEventListener('click', function() {
		u.startMeasure('init');
		Add.addRowsLast(Bindings.inputInit.value);
	}, false);

	//add
	Bindings.btnAddFirst.addEventListener('click', function() {
		u.startMeasure('add first');
		Add.addRowsFirst(Bindings.inputAdd.value);
	}, false);
	Bindings.btnAddMid.addEventListener('click', function() {
		u.startMeasure('add mid');
		Add.addRowsMid(Bindings.inputAdd.value);
	}, false);
	Bindings.btnAddLast.addEventListener('click', function() {
		u.startMeasure('add last');
		Add.addRowsLast(Bindings.inputAdd.value);
	}, false);

	//replace
	Bindings.btnReplaceFirst.addEventListener('click', function() {
		u.startMeasure('replace');
		Repl.replaceRowsFirst(Bindings.inputReplace.value);
	}, false);
	Bindings.btnReplaceMid.addEventListener('click', function() {
		u.startMeasure('replace');
		Repl.replaceRowsMid(Bindings.inputReplace.value);
	}, false);
	Bindings.btnReplaceLast.addEventListener('click', function() {
		u.startMeasure('replace');
		Repl.replaceRowsLast(Bindings.inputReplace.value);
	}, false);

	//update
	Bindings.btnUpdateFirst.addEventListener('click', function() {
		u.startMeasure('update');
		Update.updateRowsFirst(Bindings.inputUpdate.value);
	}, false);
	Bindings.btnUpdateMid.addEventListener('click', function() {
		u.startMeasure('update');
		Update.updateRowsMid(Bindings.inputUpdate.value);
	}, false);
	Bindings.btnUpdateLast.addEventListener('click', function() {
		u.startMeasure('update');
		Update.updateRowsLast(Bindings.inputUpdate.value);
	}, false);
	Bindings.btnUpdateEvery.addEventListener('click', function() {
		u.startMeasure('update');
		Update.partialUpdate(Bindings.inputUpdateEvery.value);
	}, false);

	//swap
	Bindings.btnSwapFirst.addEventListener('click', function() {
		u.startMeasure('swap');
		Swap.swapRowsFirst();
	}, false);
	Bindings.btnSwapMid.addEventListener('click', function() {
		u.startMeasure('swap');
		Swap.swapRowsMid();
	}, false);
	Bindings.btnSwapLast.addEventListener('click', function() {
		u.startMeasure('swap');
		Swap.swapRowsLast();
	}, false);

	//fetch
	Bindings.btnFetch1.addEventListener('click', function() {
		u.startMeasure('fetch');
		Fns.fetchData(1000);
	}, false);
	Bindings.btnFetch2.addEventListener('click', function() {
		u.startMeasure('fetch');
		Fns.fetchData(2000);
	}, false);

	//edit
	Bindings.inputEdit.addEventListener('input', function() {
		u.startMeasure('edit');
		Fns.editData();
	}, false);
	Bindings.btnEdit.addEventListener('click', function() {
		u.startMeasure('edit');
		Fns.editData();
	}, false);

	//filter
	Bindings.checkboxFilter.addEventListener('click', function() {
		u.startMeasure('filter');
		Filter.filter();
	}, false);

	//search
	Bindings.inputSearch.addEventListener('input', function() {
		u.startMeasure('search');
		Fns.searchData();
	}, false);
	Bindings.btnSearch.addEventListener('click', function() {
		u.startMeasure('search');
		Fns.searchData();
	}, false);

});