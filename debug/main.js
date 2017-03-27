/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function byName(name) {
  return document.querySelector('[name= ' + name + ']');
}

function text(txt) {
  return document.createTextNode(txt);
}

function create(el) {
  return document.createElement(el);
}

var id = 1;

function randomObjects() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;


  var col1 = ['John', 'Paulo', 'Anthony', 'Roger', 'Graham', 'Robin', 'Terry', 'Erick', 'Michael', 'Carol', 'Simon', 'Sir'];
  var col2 = ['Champman', 'Cleese', 'Gillman', 'Idle', 'Jones', 'Palin', 'Cohen', 'Centurion', 'Dirk', 'Lorett', 'Lancelot', 'Robin', 'Galahad'];
  // var col3 = ['Przywódca', 'Mędrzec', 'Strażnik', 'Rewolucjonista', 'Prorok', 'Asystent', 'Wokalista', 'Urzędnik', 'Handlarz', 'Rycerz', 'Czarnoksiężnik'];
  var col3 = ['Leader', 'Wise man', 'Warden', 'Revolutionary', 'Prophet', 'Assistant', 'Singer', 'Officer', 'Tradesman', 'Knight', 'Wizard'];
  var col4 = [100, 200, 500, 1000, 1500, 2000, 3000, 5000, 8000, 10000];

  var data = [];
  for (var i = 0; i < count; i++) {
    data.push({
      id: id++,
      c1: col1[rand(col1.length)],
      c2: col2[rand(col2.length)],
      c3: col3[rand(col3.length)],
      c4: col4[rand(col4.length)]
    });
  }
  return data;
}

function rand(mod) {
  //max modulo === 1000
  return Math.floor(Math.random() * 1000) % mod;
}

function resetId() {
  id = 1;
}

function setId(i) {
  id = i;
}

exports.byName = byName;
exports.text = text;
exports.create = create;
exports.randomObjects = randomObjects;
exports.resetId = resetId;
exports.setId = setId;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	data: []
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var b = {};
module.exports = b;
b.bind = bind;

function bind() {
	b.btnClear = _util2.default.byName('clear'), b.btnRefresh = _util2.default.byName('refresh'), b.table = _util2.default.byName('table'), b.tableWrap = _util2.default.byName('tableWrap'), b.btnInit = _util2.default.byName('btn-init'), b.inputInit = _util2.default.byName('input-init'), b.btnAddFirst = _util2.default.byName('addFirst'), b.btnAddMid = _util2.default.byName('addMid'), b.btnAddLast = _util2.default.byName('addLast'), b.inputAdd = _util2.default.byName('input-add'), b.btnReplaceFirst = _util2.default.byName('replaceFirst'), b.btnReplaceMid = _util2.default.byName('replaceMid'), b.btnReplaceLast = _util2.default.byName('replaceLast'), b.inputReplace = _util2.default.byName('input-replace'), b.btnUpdateColFirst = _util2.default.byName('updateColFirst'), b.btnUpdateColMid = _util2.default.byName('updateColMid'), b.btnUpdateColLast = _util2.default.byName('updateColLast'), b.btnUpdate10 = _util2.default.byName('update10'), b.checkboxUpdateReplace = _util2.default.byName('checkbox-update-replace'), b.inputUpdateWord = _util2.default.byName('input-update-text'), b.inputUpdateCol = _util2.default.byName('input-update-column'), b.btnSwapFirst = _util2.default.byName('swapFirst'), b.btnSwapMid = _util2.default.byName('swapMid'), b.btnSwapLast = _util2.default.byName('swapLast'), b.btnFilter10_1 = _util2.default.byName('filter10_1'), b.btnFilter10_2 = _util2.default.byName('filter10_2'), b.btnFilter10_3 = _util2.default.byName('filter10_3'), b.btnFetch1 = _util2.default.byName('fetch1'), b.btnFetch2 = _util2.default.byName('fetch2'), b.btnFetch3 = _util2.default.byName('fetch3'), b.inputInput = _util2.default.byName('input-input'), b.inputEdit = _util2.default.byName('input-edit'), b.btnEdit = _util2.default.byName('btn-edit'), b.inputSearch = _util2.default.byName('input-search'), b.btnSearch = _util2.default.byName('btn-search');
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _appState = __webpack_require__(1);

var _appState2 = _interopRequireDefault(_appState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//sprawdzic zajetosc pamieciowa jesli daje 1 glownego listenera zamiast wielu mniejszych - i jak to zadziala na szybkosci funkcji

var trClicked = null;

exports.createRow = createRow;
function createRow(item) {
	var tr = _util2.default.create('tr');

	tr.addEventListener('click', function () {
		clickRow(tr);
	}, false);

	var td1 = _util2.default.create('td');
	var td2 = _util2.default.create('td');
	var td3 = _util2.default.create('td');
	var td4 = _util2.default.create('td');
	var td5 = _util2.default.create('td');
	var td6 = _util2.default.create('td');
	td1.className = 'col-md-1';
	td2.className = 'col-md-2';
	td3.className = 'col-md-2';
	td4.className = 'col-md-2';
	td5.className = 'col-md-2';
	td6.className = 'col-md-2';
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tr.appendChild(td6);

	//mozna sprawdzic wydajnosc takich odwołań

	// tr.cells[0].appendChild(text(item.id));
	// tr.cells[1].appendChild(text(item.label));

	// td1.appendChild(text(item.id));
	// td2.appendChild(text(item.label));

	td1.innerText = item.id;
	td2.innerText = item.c1;
	td3.innerText = item.c2;
	td4.innerText = item.c3;
	td5.innerText = item.c4;

	//btn remove
	var btn = _util2.default.create('button');
	btn.className = 'btn btn-default';
	var span = _util2.default.create('span');
	span.className = 'glyphicon glyphicon-remove';
	btn.appendChild(span);
	btn.addEventListener('click', function () {
		deleteRow(tr, item);
	}, false);
	td6.appendChild(btn);

	return tr;
}

//tworzenie wielu listenerow vs 1 wiekszy - wydajnosc pamieciowa oraz szybkosc dzialania - mozna zmirzyc
function clickRow(tr) {
	if (!trClicked) {
		trClicked = tr;
		trClicked.classList.toggle('selected');
	} else if (trClicked !== tr) {
		trClicked.classList.toggle('selected');
		trClicked = tr;
		trClicked.classList.toggle('selected');
	} else if (trClicked === tr) {
		trClicked.classList.toggle('selected');
		trClicked = null;
	}
}

function deleteRow(tr, item) {
	tr.remove();
	var i = _appState2.default.data.findIndex(function (it) {
		return it.id === item.id;
	});
	if (i > -1) {
		_appState2.default.data.splice(i, 1);
	}
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _appState = __webpack_require__(1);

var _appState2 = _interopRequireDefault(_appState);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.addRowsFirst = addRowsFirst;
exports.addRowsMid = addRowsMid;
exports.addRowsLast = addRowsLast;

function addRowsFirst(count, newData) {
	//newData - optional parameter - if it is, randomObjects is not used
	if (!newData) {
		newData = _util2.default.randomObjects(count);
	}

	//update model
	_appState2.default.data = newData.concat(_appState2.default.data);

	updateView(newData, 0, false);
}

function addRowsMid(count, newData) {
	if (!newData) {
		newData = _util2.default.randomObjects(count);
	}

	//update model
	var mid = 0;
	if (_appState2.default.data.length > 0) {
		mid = Math.floor(_appState2.default.data.length / 2);
		var args = [mid, 0]; //position mid, 0 removes - for splice function 
		args = args.concat(newData); //mid, 0 + newData -> args for splice
		Array.prototype.splice.apply(_appState2.default.data, args);
	} else {
		_appState2.default.data = newData;
	}

	updateView(newData, mid, false);
}

function addRowsLast(count, newData) {
	if (!newData) {
		newData = _util2.default.randomObjects(count);
	}

	//update model
	_appState2.default.data = _appState2.default.data.concat(newData);

	updateView(newData, undefined, true);
}

function updateView(newData, insertBeforePos, last) {
	var table = _bind2.default.table;
	var docFragment = document.createDocumentFragment();

	newData.forEach(function (item) {
		item.ref = _row2.default.createRow(item);
		docFragment.appendChild(item.ref);
	});

	if (last) {
		table.appendChild(docFragment);
	} else if (table.children.length > 0) {
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _appState = __webpack_require__(1);

var _appState2 = _interopRequireDefault(_appState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.replaceRowsFirst = replaceRowsFirst;
function replaceRowsFirst(count) {
	var data = _appState2.default.data;

	if (data.length >= count) {
		var newData = _util2.default.randomObjects(count);
		for (var i = 0; i < count; i++) {
			//replace model and view
			replaceRow(data[i], newData[i]);
			// replaceRowSlow(table.children.item(i), data[i], newData[i]);
		}
	}
}

exports.replaceRowsMid = replaceRowsMid;
function replaceRowsMid(count) {
	var data = _appState2.default.data;

	if (_appState2.default.data.length >= count) {
		var newData = _util2.default.randomObjects(count);
		var start = Math.floor(data.length / 2) - Math.floor(count / 2);
		var end = start + count;
		for (var i = start, j = 0; i < end; i++, j++) {
			//replace model and view
			replaceRow(data[i], newData[j]);
			// replaceRowSlow(table.children.item(i), newData[j], data[i]);
		}
	}
}

exports.replaceRowsLast = replaceRowsLast;
function replaceRowsLast(count) {
	var data = _appState2.default.data;

	if (_appState2.default.data.length >= count) {
		var newData = _util2.default.randomObjects(count);
		var start = data.length - count;
		var end = start + count;
		for (var i = start, j = 0; i < end; i++, j++) {
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
	for (var i = 1; i <= 4; i++) {
		if (tr.cells[i].classList.contains('search-selected')) {
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

function replaceRowSlow(tr, item, newItem) {
	//slow because tr is passed through API table.children.item(i)
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _appState = __webpack_require__(1);

var _appState2 = _interopRequireDefault(_appState);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterOn = false;

exports.filterRows10 = filterRows10;
function filterRows10() {
	var data = _appState2.default.data;

	if (data.length > 0 && !filterOn) {
		filterOn = true;

		for (var i = 0; i < data.length; i++) {
			//update model and view 
			if (data[i].id % 10 === 0) {
				data[i].visible = true;
			} else {
				data[i].visible = false;
				var tr = data[i].ref;
				// var tr = table.children.item(i);
				tr.className = 'visible-off';
			}
		}
	} else if (data.length > 0 && filterOn) {
		filterOn = false;

		for (var i = 0; i < data.length; i++) {
			//update model and view 
			if (data[i].id % 10 !== 0) {
				data[i].visible = true;
				var tr = data[i].ref;
				// var tr = table.children.item(i);
				tr.className = 'visible-on';
			}
		}
	}
}

exports.filterRows10_2 = filterRows10_2;
function filterRows10_2() {
	var data = _appState2.default.data;
	var tableWrap = _bind2.default.tableWrap,
	    table = _bind2.default.table;


	if (data.length > 0 && !filterOn) {
		filterOn = true;
		tableWrap.removeChild(table);
	} else if (data.length > 0 && filterOn) {
		filterOn = false;
		tableWrap.appendChild(table);
	}
}

exports.filterRows10_3 = filterRows10_3;
function filterRows10_3() {
	var data = _appState2.default.data;
	var tableWrap = _bind2.default.tableWrap;


	if (data.length > 0 && !filterOn) {
		filterOn = true;
		tableWrap.classList.add('visible-off');
	} else if (data.length > 0 && filterOn) {
		filterOn = false;
		tableWrap.classList.remove('visible-off');
	}
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _appState = __webpack_require__(1);

var _appState2 = _interopRequireDefault(_appState);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _add = __webpack_require__(4);

var _add2 = _interopRequireDefault(_add);

var _replace = __webpack_require__(5);

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.clearRows = clearRows;
function clearRows() {
	if (_appState2.default.data.length > 0) {
		_appState2.default.data = [];
		_util2.default.resetId();
		_bind2.default.table.remove();
		var table = _bind2.default.table = _util2.default.create('tbody');
		table.setAttribute('name', 'table');
		_bind2.default.tableWrap.appendChild(table);
	}
}

exports.refreshRows = refreshRows;
function refreshRows() {
	if (_appState2.default.data.length > 0) {
		console.log('refresh');
		_bind2.default.table.remove();
		var table = _bind2.default.table = _util2.default.create('tbody');
		table.setAttribute('name', 'table');
		_bind2.default.tableWrap.appendChild(table);
		_appState2.default.data.forEach(function (item) {
			table.appendChild(_row2.default.createRow(item));
		});
	}
}

exports.fetchData = fetchData;
function fetchData(count) {
	var resource = 'data' + count + '.json';
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var newData = JSON.parse(this.responseText);
			clearRows();
			_util2.default.setId(count + 1);
			_add2.default.addRowsFirst(null, newData);
		}
	};
	xhttp.open('GET', resource, true);
	xhttp.send();
}

exports.editData = editData;
function editData() {
	var data = _appState2.default.data;
	if (data.length > 0) {
		data[0].c1 = _bind2.default.inputEdit.value;
		_replace2.default.replaceRow(data[0], data[0]);
	}
}

exports.searchData = searchData;
function searchData() {
	if (_appState2.default.data.length > 0) {
		searchFor(_bind2.default.inputSearch.value);
	}
}

function searchFor(txt) {
	var col = ['c1', 'c2', 'c3', 'c4'];

	_appState2.default.data.forEach(function (item) {
		for (var i = 0; i < 4; i++) {
			var prop = item[col[i]] + "";
			if (txt !== "" && prop.indexOf(txt) !== -1) {
				item.ref.cells[i + 1].classList.add('search-selected');
				if (!item.search) {
					item.search = [null, null, null, null];
				}
				item.search[i] = txt;
			} else if (item.search && item.search[i]) {
				item.search[i] = null;
				item.ref.cells[i + 1].classList.remove('search-selected');
			}
		}
	});
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _appState = __webpack_require__(1);

var _appState2 = _interopRequireDefault(_appState);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.swapRowsFirst = swapRowsFirst;
function swapRowsFirst() {
	if (_appState2.default.data.length > 1) {
		var i = 0;
		var j = 1;
		swap(i, j);
	}
}

exports.swapRowsMid = swapRowsMid;
function swapRowsMid() {
	if (_appState2.default.data.length > 1) {
		var i = Math.floor(_appState2.default.data.length / 2) - 1;
		var j = i + 1;
		swap(i, j);
	}
}

exports.swapRowsLast = swapRowsLast;
function swapRowsLast() {
	if (_appState2.default.data.length > 1) {
		var i = _appState2.default.data.length - 2;
		var j = i + 1;
		swap(i, j);
	}
}

//non-keyed swap
function swap(i, j) {
	var data = _appState2.default.data;

	//update model
	var temp = data[i];
	_appState2.default.data[i] = data[j];
	_appState2.default.data[j] = temp;

	var a = _appState2.default.data[i];
	var b = _appState2.default.data[j];

	//update view
	a.ref.cells[0].innerText = b.id;
	a.ref.cells[1].innerText = b.c1;
	a.ref.cells[2].innerText = b.c2;
	a.ref.cells[3].innerText = b.c3;
	a.ref.cells[4].innerText = b.c4;

	b.ref.cells[0].innerText = a.id;
	b.ref.cells[1].innerText = a.c1;
	b.ref.cells[2].innerText = a.c2;
	b.ref.cells[3].innerText = a.c3;
	b.ref.cells[4].innerText = a.c4;

	//swaping styles of td's
	for (var i = 1; i <= 4; i++) {
		swapClasses(a.ref.cells[i], b.ref.cells[i]);
	}

	//swaping styles of tr's
	swapClasses(a.ref, b.ref);

	//swaping view references
	temp = a.ref;
	a.ref = b.ref;
	b.ref = temp;

	//keyed swap

	// if(a >= b) return;
	// var tempA = table.children.item(a);
	// table.insertBefore(table.children.item(b), tempA); //B goes before A
	// var tempB = table.children.item(b+1);
	// if(!tempB) {
	// 	table.appendChild(tempA);
	// } else {
	// 	table.insertBefore(tempA, tempB);
	// }
}

function swapClasses(el1, el2) {
	var dirty = false;
	var list1 = el1.classList,
	    list2 = el2.classList;

	if (list1.length !== list2.length) {
		//the same lengths of styles list
		dirty = true;
	} else {
		list1.forEach(function (style) {
			//diffrent lengths of styles list
			if (!list2.contains(style)) {
				dirty = true;
			}
		});
	}

	//swaping styles if changes detected
	if (dirty) {
		var v1 = list1.value,
		    v2 = list2.value;
		el1.className = v2;
		el2.className = v1;
	}

	return dirty;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _appState = __webpack_require__(1);

var _appState2 = _interopRequireDefault(_appState);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.updateColFirst = updateColFirst;
function updateColFirst(col, word, replace) {
	updateCol(1, col, word, replace);
}

exports.updateColMid = updateColMid;
function updateColMid(col, word, replace) {
	updateCol(2, col, word, replace);
}

exports.updateColLast = updateColLast;
function updateColLast(col, word, replace) {
	updateCol(3, col, word, replace);
}

exports.updateRows10 = updateRows10;
function updateRows10(col, word, replace) {
	col--;
	var colName = 'c' + col;
	var data = _appState2.default.data;
	if (data.length > 10) {
		for (var i = 0; i < data.length; i += 10) {
			//update model
			if (replace) {
				data[i][colName] = word;
			} else {
				data[i][colName] += word;
			}
			//update view
			var tr = data[i].ref;
			// var tr = table.children.item(i);
			tr.cells[col].innerText = data[i][colName];
		}
	}
}

function updateCol(type, col, word, replace) {
	col--;
	var data = _appState2.default.data;
	if (data.length > 0 && col > 0 && col < 5) {
		var i = getTypePos(type);
		var colName = 'c' + col;
		//update model
		if (replace) {
			data[i][colName] = word;
		} else {
			data[i][colName] += word;
		}
		//update view
		var tr = data[i].ref;
		tr.cells[col].innerText = data[i][colName];
	}
}

function getTypePos(type) {
	var data = _appState2.default.data;
	switch (type) {
		case 1:
			return 0;
		case 2:
			return Math.floor(data.length / 2);
		case 3:
			return data.length - 1;
	}
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _add = __webpack_require__(4);

var _add2 = _interopRequireDefault(_add);

var _replace = __webpack_require__(5);

var _replace2 = _interopRequireDefault(_replace);

var _otherFns = __webpack_require__(7);

var _otherFns2 = _interopRequireDefault(_otherFns);

var _update = __webpack_require__(9);

var _update2 = _interopRequireDefault(_update);

var _swap = __webpack_require__(8);

var _swap2 = _interopRequireDefault(_swap);

var _filter = __webpack_require__(6);

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

	_bind2.default.bind();

	//clear, refresh
	_bind2.default.btnClear.addEventListener('click', function () {
		_otherFns2.default.clearRows();
	}, false);
	_bind2.default.btnRefresh.addEventListener('click', function () {
		_otherFns2.default.refreshRows();
	}, false);

	//init
	_bind2.default.btnInit.addEventListener('click', function () {
		_add2.default.addRowsLast(Number(_bind2.default.inputInit.value));
	}, false);

	//add
	_bind2.default.btnAddFirst.addEventListener('click', function () {
		_add2.default.addRowsFirst(Number(_bind2.default.inputAdd.value));
	}, false);
	_bind2.default.btnAddMid.addEventListener('click', function () {
		_add2.default.addRowsMid(Number(_bind2.default.inputAdd.value));
	}, false);
	_bind2.default.btnAddLast.addEventListener('click', function () {
		_add2.default.addRowsLast(Number(_bind2.default.inputAdd.value));
	}, false);

	//replace
	_bind2.default.btnReplaceFirst.addEventListener('click', function () {
		_replace2.default.replaceRowsFirst(Number(_bind2.default.inputReplace.value));
	}, false);
	_bind2.default.btnReplaceMid.addEventListener('click', function () {
		_replace2.default.replaceRowsMid(Number(_bind2.default.inputReplace.value));
	}, false);
	_bind2.default.btnReplaceLast.addEventListener('click', function () {
		_replace2.default.replaceRowsLast(Number(_bind2.default.inputReplace.value));
	}, false);

	//update
	_bind2.default.btnUpdateColFirst.addEventListener('click', function () {
		_update2.default.updateColFirst(_bind2.default.inputUpdateCol.value, _bind2.default.inputUpdateWord.value, _bind2.default.checkboxUpdateReplace.checked);
	}, false);
	_bind2.default.btnUpdateColMid.addEventListener('click', function () {
		_update2.default.updateColMid(_bind2.default.inputUpdateCol.value, _bind2.default.inputUpdateWord.value, _bind2.default.checkboxUpdateReplace.checked);
	}, false);
	_bind2.default.btnUpdateColLast.addEventListener('click', function () {
		_update2.default.updateColLast(_bind2.default.inputUpdateCol.value, _bind2.default.inputUpdateWord.value, _bind2.default.checkboxUpdateReplace.checked);
	}, false);
	_bind2.default.btnUpdate10.addEventListener('click', function () {
		_update2.default.updateRows10(_bind2.default.inputUpdateCol.value, _bind2.default.inputUpdateWord.value, _bind2.default.checkboxUpdateReplace.checked);
	}, false);

	//swap
	_bind2.default.btnSwapFirst.addEventListener('click', function () {
		_swap2.default.swapRowsFirst();
	}, false);
	_bind2.default.btnSwapMid.addEventListener('click', function () {
		_swap2.default.swapRowsMid();
	}, false);
	_bind2.default.btnSwapLast.addEventListener('click', function () {
		_swap2.default.swapRowsLast();
	}, false);

	_bind2.default.btnFilter10_1.addEventListener('click', function () {
		_filter2.default.filterRows10();
	}, false);
	_bind2.default.btnFilter10_2.addEventListener('click', function () {
		_filter2.default.filterRows10_2();
	}, false);
	_bind2.default.btnFilter10_3.addEventListener('click', function () {
		_filter2.default.filterRows10_3();
	}, false);

	_bind2.default.btnFetch1.addEventListener('click', function () {
		_otherFns2.default.fetchData(1000);
	}, false);
	_bind2.default.btnFetch2.addEventListener('click', function () {
		_otherFns2.default.fetchData(2000);
	}, false);
	_bind2.default.btnFetch3.addEventListener('click', function () {
		_otherFns2.default.fetchData(10000);
	}, false);

	_bind2.default.inputEdit.addEventListener('input', function () {
		_otherFns2.default.editData();
	}, false);
	_bind2.default.btnEdit.addEventListener('click', function () {
		_otherFns2.default.editData();
	}, false);

	_bind2.default.inputSearch.addEventListener('input', function () {
		_otherFns2.default.searchData();
	}, false);
	_bind2.default.btnSearch.addEventListener('click', function () {
		_otherFns2.default.searchData();
	}, false);
});

/***/ })
/******/ ]);