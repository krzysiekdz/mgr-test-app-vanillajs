import Bindings from './bind.js';
import Add from './add.js';
import Repl from './replace.js';
import Fns from './other-fns.js';
import Update from './update.js';
import Swap from './swap.js';
import Filter from './filter.js';

document.addEventListener('DOMContentLoaded', function() {

	Bindings.bind();

	//clear, refresh
	Bindings.btnClear.addEventListener('click', function() {
		Fns.clearRows();
	}, false);
	Bindings.btnRefresh.addEventListener('click', function() {
		Fns.refreshRows();
	}, false);

	//init
	Bindings.btnInit.addEventListener('click', function() {
		Add.addRowsLast(Number(Bindings.inputInit.value));
	}, false);

	//add
	Bindings.btnAddFirst.addEventListener('click', function() {
		Add.addRowsFirst(Number(Bindings.inputAdd.value));
	}, false);
	Bindings.btnAddMid.addEventListener('click', function() {
		Add.addRowsMid(Number(Bindings.inputAdd.value));
	}, false);
	Bindings.btnAddLast.addEventListener('click', function() {
		Add.addRowsLast(Number(Bindings.inputAdd.value));
	}, false);

	//replace
	Bindings.btnReplaceFirst.addEventListener('click', function() {
		Repl.replaceRowsFirst(Number(Bindings.inputReplace.value));
	}, false);
	Bindings.btnReplaceMid.addEventListener('click', function() {
		Repl.replaceRowsMid(Number(Bindings.inputReplace.value));
	}, false);
	Bindings.btnReplaceLast.addEventListener('click', function() {
		Repl.replaceRowsLast(Number(Bindings.inputReplace.value));
	}, false);

	//update
	Bindings.btnUpdateColFirst.addEventListener('click', function() {
		Update.updateColFirst(Bindings.inputUpdateCol.value, 
				Bindings.inputUpdateWord.value, 
				Bindings.checkboxUpdateReplace.checked);
	}, false);
	Bindings.btnUpdateColMid.addEventListener('click', function() {
		Update.updateColMid(Bindings.inputUpdateCol.value, 
			Bindings.inputUpdateWord.value, 
			Bindings.checkboxUpdateReplace.checked);
	}, false);
	Bindings.btnUpdateColLast.addEventListener('click', function() {
		Update.updateColLast(Bindings.inputUpdateCol.value, 
			Bindings.inputUpdateWord.value, 
			Bindings.checkboxUpdateReplace.checked);
	}, false);
	Bindings.btnUpdate10.addEventListener('click', function() {
		Update.updateRows10(Bindings.inputUpdateCol.value, 
			Bindings.inputUpdateWord.value, 
			Bindings.checkboxUpdateReplace.checked);
	}, false);

	//swap
	Bindings.btnSwapFirst.addEventListener('click', function() {
		Swap.swapRowsFirst();
	}, false);
	Bindings.btnSwapMid.addEventListener('click', function() {
		Swap.swapRowsMid();
	}, false);
	Bindings.btnSwapLast.addEventListener('click', function() {
		Swap.swapRowsLast();
	}, false);


	Bindings.btnFilter10_1.addEventListener('click', function() {
		Filter.filterRows10();
	}, false);
	Bindings.btnFilter10_2.addEventListener('click', function() {
		Filter.filterRows10_2();
	}, false);
	Bindings.btnFilter10_3.addEventListener('click', function() {
		Filter.filterRows10_3();
	}, false);

	Bindings.btnFetch1.addEventListener('click', function() {
		Fns.fetchData(1000);
	}, false);
	Bindings.btnFetch2.addEventListener('click', function() {
		Fns.fetchData(2000);
	}, false);
	Bindings.btnFetch3.addEventListener('click', function() {
		Fns.fetchData(10000);
	}, false);

	Bindings.inputEdit.addEventListener('input', function() {
		Fns.editData();
	}, false);
	Bindings.btnEdit.addEventListener('click', function() {
		Fns.editData();
	}, false);

	Bindings.inputSearch.addEventListener('input', function() {
		Fns.searchData();
	}, false);
	Bindings.btnSearch.addEventListener('click', function() {
		Fns.searchData();
	}, false);

});