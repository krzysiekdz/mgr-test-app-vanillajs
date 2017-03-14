import u from './util.js';

var b = {};
module.exports = b;
b.bind = bind;

function bind() {
	b.btnClear = u.byName('clear'),  
	b.btnRefresh = u.byName('refresh'), 

	b.table = u.byName('table'),
	b.tableWrap = u.byName('tableWrap'),

	b.btnAddFirst = u.byName('addFirst'), 
	b.btnAddMid = u.byName('addMid'), 
	b.btnAddLast = u.byName('addLast'), 
	b.inputAdd = u.byName('input-add'),

	b.btnReplaceFirst = u.byName('replaceFirst'), 
	b.btnReplaceMid = u.byName('replaceMid'), 
	b.btnReplaceLast = u.byName('replaceLast'), 
	b.inputReplace = u.byName('input-replace'),

	b.btnUpdateColFirst = u.byName('updateColFirst'), 
	b.btnUpdateColMid = u.byName('updateColMid'), 
	b.btnUpdateColLast = u.byName('updateColLast'), 
	b.btnUpdate10 = u.byName('update10'), 
	b.checkboxUpdateReplace = u.byName('checkbox-update-replace'), 
	b.inputUpdateWord = u.byName('input-update-text'), 
	b.inputUpdateCol = u.byName('input-update-column'), 

	b.btnSwapFirst = u.byName('swapFirst'), 
	b.btnSwapMid = u.byName('swapMid'), 
	b.btnSwapLast = u.byName('swapLast'),

	b.btnFilter10_1 = u.byName('filter10_1'), 
	b.btnFilter10_2 = u.byName('filter10_2'), 
	b.btnFilter10_3 = u.byName('filter10_3'), 

	b.btnFetch1 = u.byName('fetch1'), 
	b.btnFetch2 = u.byName('fetch2'), 
	b.btnFetch3 = u.byName('fetch3'), 

	b.inputInput = u.byName('input-input'),  

	b.inputEdit = u.byName('input-edit'), 
	b.btnEdit = u.byName('btn-edit'),

	b.inputSearch = u.byName('input-search'), 
	b.btnSearch = u.byName('btn-search');
}

