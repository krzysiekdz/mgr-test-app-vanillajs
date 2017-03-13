import Bindings from './bind.js';

document.addEventListener('DOMContentLoaded', function() {
	

	//clear, refresh
	btnClear.addEventListener('click', function() {
		clearRows();
	}, false);
	btnRefresh.addEventListener('click', function() {
		refreshRows();
	}, false);

	//add
	btnAddFirst.addEventListener('click', function() {
		addRowsFirst(inputAdd.value);
	}, false);
	btnAddMid.addEventListener('click', function() {
		addRowsMid(inputAdd.value);
	}, false);
	btnAddLast.addEventListener('click', function() {
		addRowsLast(inputAdd.value);
	}, false);

	//replace
	btnReplaceFirst.addEventListener('click', function() {
		replaceRowsFirst(inputReplace.value);
	}, false);
	btnReplaceMid.addEventListener('click', function() {
		replaceRowsMid(inputReplace.value);
	}, false);
	btnReplaceLast.addEventListener('click', function() {
		replaceRowsLast(inputReplace.value);
	}, false);

	//update
	btnUpdateColFirst.addEventListener('click', function() {
		updateColFirst(inputUpdateCol.value, inputUpdateWord.value, checkboxUpdateReplace.checked);
	}, false);
	btnUpdateColMid.addEventListener('click', function() {
		updateColMid(inputUpdateCol.value, inputUpdateWord.value, checkboxUpdateReplace.checked);
	}, false);
	btnUpdateColLast.addEventListener('click', function() {
		updateColLast(inputUpdateCol.value, inputUpdateWord.value, checkboxUpdateReplace.checked);
	}, false);
	btnUpdate10.addEventListener('click', function() {
		updateRows10(inputUpdateCol.value, inputUpdateWord.value, checkboxUpdateReplace.checked);
	}, false);

	//swap
	btnSwapFirst.addEventListener('click', function() {
		swapRowsFirst();
	}, false);
	btnSwapMid.addEventListener('click', function() {
		swapRowsMid();
	}, false);
	btnSwapLast.addEventListener('click', function() {
		swapRowsLast();
	}, false);


	btnFilter10_1.addEventListener('click', function() {
		filterRows10();
	}, false);

	fetch1.addEventListener('click', function() {
		fetchData(1000);
	}, false);
	fetch2.addEventListener('click', function() {
		fetchData(2000);
	}, false);
	fetch3.addEventListener('click', function() {
		fetchData(10000);
	}, false);

	inputEdit.addEventListener('input', function() {
		editData();
	}, false);
	btnEdit.addEventListener('click', function() {
		editData();
	}, false);

	inputSearch.addEventListener('input', function() {
		searchData();
	}, false);
	btnSearch.addEventListener('click', function() {
		searchData();
	}, false);

});