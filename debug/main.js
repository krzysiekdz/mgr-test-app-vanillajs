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

function parseNumber(val, min, max) {
    val = Number(val);
    if (val >= min && val <= max) {
        return val;
    }
    throw "string-parse exception:" + val;
}

var start_;
var stop_;
var stopFlag = false;

exports.stopMeasure = function () {
    stopFlag = true;
};

exports.startMeasure = startMeasure;
function startMeasure(action) {
    if (stopFlag) return;
    start_ = performance.now();
    window.setTimeout(function () {
        stop_ = performance.now();
        console.log(action + " took : " + (stop_ - start_) + " ms");
    }, 0);
}

exports.byName = byName;
exports.text = text;
exports.create = create;
exports.randomObjects = randomObjects;
exports.resetId = resetId;
exports.setId = setId;
exports.parseNumber = parseNumber;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var b = {};
module.exports = b;
b.bind = bind;

function bind() {
	b.btnClear = _util2.default.byName('clear'), b.btnRefresh = _util2.default.byName('refresh'), b.table = _util2.default.byName('table'), b.tableWrap = _util2.default.byName('tableWrap'), b.btnInit = _util2.default.byName('btn-init'), b.inputInit = _util2.default.byName('input-init'), b.btnAddFirst = _util2.default.byName('addFirst'), b.btnAddMid = _util2.default.byName('addMid'), b.btnAddLast = _util2.default.byName('addLast'), b.inputAdd = _util2.default.byName('input-add'), b.btnReplaceFirst = _util2.default.byName('replaceFirst'), b.btnReplaceMid = _util2.default.byName('replaceMid'), b.btnReplaceLast = _util2.default.byName('replaceLast'), b.inputReplace = _util2.default.byName('input-replace'), b.btnUpdateFirst = _util2.default.byName('updateFirst'), b.btnUpdateMid = _util2.default.byName('updateMid'), b.btnUpdateLast = _util2.default.byName('updateLast'), b.btnUpdateEvery = _util2.default.byName('updateEvery'), b.inputUpdate = _util2.default.byName('input-update'), b.inputUpdateEvery = _util2.default.byName('input-update-every'), b.btnSwapFirst = _util2.default.byName('swapFirst'), b.btnSwapMid = _util2.default.byName('swapMid'), b.btnSwapLast = _util2.default.byName('swapLast'), b.btnFetch1 = _util2.default.byName('fetch1'), b.btnFetch2 = _util2.default.byName('fetch2'), b.inputInput = _util2.default.byName('input-input'), b.inputEdit = _util2.default.byName('input-edit'), b.btnEdit = _util2.default.byName('btn-edit'), b.checkboxFilter = _util2.default.byName('checkbox-filter'), b.inputSearch = _util2.default.byName('input-search'), b.btnSearch = _util2.default.byName('btn-search');
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	data: []
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _appState = __webpack_require__(2);

var _appState2 = _interopRequireDefault(_appState);

var _update = __webpack_require__(4);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//sprawdzic zajetosc pamieciowa jesli daje 1 glownego listenera zamiast wielu mniejszych - i jak to zadziala na szybkosci funkcji

var trClicked = null;

exports.createRow = createRow;
function createRow(item) {
	var tr = _util2.default.create('tr');

	tr.addEventListener('click', function () {
		_util2.default.startMeasure('select');
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
	btn.addEventListener('click', function (e) {
		_util2.default.startMeasure('remove one');
		deleteRow(item);
		e.stopPropagation();
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

//non-keyed
function deleteRow(item) {
	var data = _appState2.default.data;

	var idx = data.findIndex(function (it) {
		return it.id === item.id;
	});
	var last = _appState2.default.data.length - 1;

	for (var i = idx; i < last; i++) {
		updateSingle(data[i], data[i + 1]);
		_update2.default.updateRow(data[i]);
	}

	data[last].ref.remove();
	_appState2.default.data.splice(last, 1);
}

function updateSingle(item1, item2) {
	item1.id = item2.id;
	item1.c1 = item2.c1;
	item1.c2 = item2.c2;
	item1.c3 = item2.c3;
	item1.c4 = item2.c4;
}

//keyed
function deleteRow2(tr, item) {
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

var _appState = __webpack_require__(2);

var _appState2 = _interopRequireDefault(_appState);

var _bind = __webpack_require__(1);

var _bind2 = _interopRequireDefault(_bind);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.updateRowsFirst = updateRowsFirst;
function updateRowsFirst(count) {
	count = _util2.default.parseNumber(count, 1, 2000);
	var data = _appState2.default.data;

	if (data.length >= count) {
		var start = 0,
		    end = count;

		updateModel(start, end);

		updateView(start, end);
	}
}

exports.updateRowsMid = updateRowsMid;
function updateRowsMid(count) {
	count = _util2.default.parseNumber(count, 1, 2000);
	var data = _appState2.default.data;

	if (_appState2.default.data.length >= count) {
		var start = Math.floor(data.length / 2) - Math.floor(count / 2);
		var end = start + count;

		updateModel(start, end);

		updateView(start, end);
	}
}

exports.updateRowsLast = updateRowsLast;
function updateRowsLast(count) {
	count = _util2.default.parseNumber(count, 1, 2000);
	var data = _appState2.default.data;

	if (_appState2.default.data.length >= count) {
		var start = data.length - count;
		var end = start + count;

		updateModel(start, end);

		updateView(start, end);
	}
}

function updateModel(start, end) {
	var newData = _util2.default.randomObjects(end - start);
	$$updateModel(start, end, newData);
}

//updating model; in replace we are replacing all objects, in update we only replace properties
function $$updateModel(start, end, newData) {
	var data = _appState2.default.data;

	for (var i = start, j = 0; i < end; i++, j++) {
		data[i].id = newData[j].id;
		data[i].c1 = newData[j].c1;
		data[i].c2 = newData[j].c2;
		data[i].c3 = newData[j].c3;
		data[i].c4 = newData[j].c4;
	}
}

function updateView(start, end) {
	var data = _appState2.default.data;

	for (var i = start; i < end; i++) {
		updateRow(data[i]);

		//non-keyed slow replace
		// updateSlow(Bindings.table.children.item(i), data[i]);
	}
}

exports.updateRow = updateRow;
function updateRow(item) {
	var tr = item.ref;
	tr.cells[0].innerText = item.id;
	tr.cells[1].innerText = item.c1;
	tr.cells[2].innerText = item.c2;
	tr.cells[3].innerText = item.c3;
	tr.cells[4].innerText = item.c4;

	//cleaning for possible existing styles
	// for(var i = 1; i <= 4; i++) {
	// 	if(tr.cells[i].classList.contains('search-selected')) {
	// 		tr.cells[i].classList.remove('search-selected');
	// 	}
	// }
}

exports.partialUpdate = partialUpdate;
function partialUpdate(every) {
	every = _util2.default.parseNumber(every, 1, 10);
	if (_appState2.default.data.length > 0) {
		updateModelEvery(every);
		updateViewEvery(every);
	}
}

function updateModelEvery(every) {
	var data = _appState2.default.data;

	var count = Math.ceil(data.length / every);
	var newData = _util2.default.randomObjects(count);
	$$updateModelEvery(every, newData);
}

function $$updateModelEvery(every, newData) {
	var data = _appState2.default.data;

	for (var i = 0, j = 0; i < data.length; i += every, j++) {
		data[i].id = newData[j].id;
		data[i].c1 = newData[j].c1;
		data[i].c2 = newData[j].c2;
		data[i].c3 = newData[j].c3;
		data[i].c4 = newData[j].c4;
	}
}

function updateViewEvery(every) {
	var data = _appState2.default.data;

	for (var i = 0; i < data.length; i += every) {
		updateRow(data[i]);
	}
}

//non-keyed slow replace -> slow because tr is passed through API table.children.item(i)
function updateSlow(tr, item) {
	tr.cells[0].innerText = item.id;
	tr.cells[1].innerText = item.c1;
	tr.cells[2].innerText = item.c2;
	tr.cells[3].innerText = item.c3;
	tr.cells[4].innerText = item.c4;

	//cleaning for possible existing styles
	// for(var i = 1; i <= 4; i++) {
	// 	if(tr.cells[i].classList.contains('search-selected')) {
	// 		tr.cells[i].classList.remove('search-selected');
	// 	}
	// }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _appState = __webpack_require__(2);

var _appState2 = _interopRequireDefault(_appState);

var _bind = __webpack_require__(1);

var _bind2 = _interopRequireDefault(_bind);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.addRowsFirst = addRowsFirst;
exports.addRowsMid = addRowsMid;
exports.addRowsLast = addRowsLast;

function addRowsFirst(count, newData) {
	//newData - optional parameter - if it is, randomObjects is not used
	count = _util2.default.parseNumber(count, 1, 10000);
	if (!newData) {
		newData = _util2.default.randomObjects(count);
	}

	//update model
	_appState2.default.data = newData.concat(_appState2.default.data);

	updateView(newData, 0, false);
}

function addRowsMid(count, newData) {
	count = _util2.default.parseNumber(count, 1, 10000);
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
	count = _util2.default.parseNumber(count, 1, 10000);
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _appState = __webpack_require__(2);

var _appState2 = _interopRequireDefault(_appState);

var _bind = __webpack_require__(1);

var _bind2 = _interopRequireDefault(_bind);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterOn = false;
var classNameFiltered = 'filtered';

exports.filter = filter1;

function filter1() {
	var data = _appState2.default.data;
	var table = _bind2.default.table;

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
		table.classList.add(classNameFiltered);
	} else if (data.length > 0 && filterOn) {
		filterOn = false;

		for (var i = 0; i < data.length; i++) {
			//update model and view 
			if (!data[i].visible) {
				data[i].visible = true;
				var tr = data[i].ref;
				// var tr = table.children.item(i);
				tr.className = 'visible-on';
			}
		}
		table.classList.remove(classNameFiltered);
	}
}

function filter2() {
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

function filter3() {
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

var _appState = __webpack_require__(2);

var _appState2 = _interopRequireDefault(_appState);

var _bind = __webpack_require__(1);

var _bind2 = _interopRequireDefault(_bind);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _add = __webpack_require__(5);

var _add2 = _interopRequireDefault(_add);

var _update = __webpack_require__(4);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.clearRows = clearRows;
function clearRows() {
	if (_appState2.default.data.length > 0) {
		_appState2.default.data = [];
		_util2.default.resetId();

		//find the fastest remove method
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
			item.ref = _row2.default.createRow(item);
			table.appendChild(item.ref);
		});
	}
}

exports.fetchData = fetchData;
function fetchData(count) {
	var host = 'http://localhost:8080/data-files/';
	var resource = 'data' + count + '.json';
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var newData = JSON.parse(this.responseText);
			clearRows();
			_util2.default.setId(count + 1);
			_add2.default.addRowsFirst(1, newData);
		}
	};
	xhttp.open('GET', host + resource, true);
	xhttp.send();
}

exports.editData = editData;
function editData() {
	var data = _appState2.default.data;
	if (data.length > 0) {
		data[0].c1 = _bind2.default.inputEdit.value;
		_update2.default.updateRow(data[0]);
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

var _appState = __webpack_require__(2);

var _appState2 = _interopRequireDefault(_appState);

var _bind = __webpack_require__(1);

var _bind2 = _interopRequireDefault(_bind);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.replaceRowsFirst = replaceRowsFirst;
function replaceRowsFirst(count) {
	count = _util2.default.parseNumber(count, 1, 2000);
	var data = _appState2.default.data;

	if (data.length >= count) {
		var start = 0,
		    end = count;

		replaceModel(start, end);

		replaceView(start, end);
	}
}

exports.replaceRowsMid = replaceRowsMid;
function replaceRowsMid(count) {
	count = _util2.default.parseNumber(count, 1, 2000);
	var data = _appState2.default.data;

	if (_appState2.default.data.length >= count) {
		var start = Math.floor(data.length / 2) - Math.floor(count / 2);
		var end = start + count;

		replaceModel(start, end);

		replaceView(start, end);
	}
}

exports.replaceRowsLast = replaceRowsLast;
function replaceRowsLast(count) {
	count = _util2.default.parseNumber(count, 1, 2000);
	var data = _appState2.default.data;

	if (_appState2.default.data.length >= count) {
		var start = data.length - count;
		var end = start + count;

		replaceModel(start, end);

		replaceView(start, end);
	}
}

function replaceModel(start, end) {
	var newData = _util2.default.randomObjects(end - start);
	$$replaceModel(start, end, newData);
}

function $$replaceModel(start, end, newData) {
	var data = _appState2.default.data;

	for (var i = start, j = 0; i < end; i++, j++) {
		newData[j].ref = data[i].ref;
		data[i] = newData[j];
	}
}

function replaceView(start, end) {
	var data = _appState2.default.data;

	for (var i = start; i < end; i++) {
		replaceRow(data[i]);
	}
}

//non-keyed replace
function replaceRow(item) {
	var tr = item.ref;
	tr.cells[0].innerText = item.id;
	tr.cells[1].innerText = item.c1;
	tr.cells[2].innerText = item.c2;
	tr.cells[3].innerText = item.c3;
	tr.cells[4].innerText = item.c4;

	//cleaning for possible existing styles
	// for(var i = 1; i <= 4; i++) {
	// 	if(tr.cells[i].classList.contains('search-selected')) {
	// 		tr.cells[i].classList.remove('search-selected');
	// 	}
	// }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _appState = __webpack_require__(2);

var _appState2 = _interopRequireDefault(_appState);

var _bind = __webpack_require__(1);

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
	// for(var i = 1; i <= 4; i++) {
	// 	swapClasses(a.ref.cells[i], b.ref.cells[i]);
	// }

	//swaping styles of tr's
	// swapClasses(a.ref, b.ref);

	//swaping view references
	temp = a.ref;
	a.ref = b.ref;
	b.ref = temp;
}

// function swapClasses(el1, el2) {
// 	var dirty = false;
// 	var list1 = el1.classList,
// 		list2 = el2.classList;

// 	if(list1.length !== list2.length) {//diffrent lengths of styles list
// 		dirty = true;
// 	}
// 	else {
// 		list1.forEach(function(style) {
// 			if(!list2.contains(style)) {
// 				dirty = true;
// 			}
// 		});
// 	}

// 	//swaping styles if changes detected
// 	if(dirty) {
// 		var v1 = list1.value,
// 			v2 = list2.value;
// 		el1.className = v2;
// 		el2.className = v1;
// 	}

// 	return dirty;
// }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bind = __webpack_require__(1);

var _bind2 = _interopRequireDefault(_bind);

var _add = __webpack_require__(5);

var _add2 = _interopRequireDefault(_add);

var _replace = __webpack_require__(8);

var _replace2 = _interopRequireDefault(_replace);

var _otherFns = __webpack_require__(7);

var _otherFns2 = _interopRequireDefault(_otherFns);

var _update = __webpack_require__(4);

var _update2 = _interopRequireDefault(_update);

var _swap = __webpack_require__(9);

var _swap2 = _interopRequireDefault(_swap);

var _filter = __webpack_require__(6);

var _filter2 = _interopRequireDefault(_filter);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

	_bind2.default.bind();

	_util2.default.stopMeasure();

	//clear, refresh
	_bind2.default.btnClear.addEventListener('click', function () {
		_otherFns2.default.clearRows();
	}, false);
	_bind2.default.btnRefresh.addEventListener('click', function () {
		_otherFns2.default.refreshRows();
	}, false);

	//init
	_bind2.default.btnInit.addEventListener('click', function () {
		_util2.default.startMeasure('init');
		_add2.default.addRowsLast(_bind2.default.inputInit.value);
	}, false);

	//add
	_bind2.default.btnAddFirst.addEventListener('click', function () {
		_util2.default.startMeasure('add first');
		_add2.default.addRowsFirst(_bind2.default.inputAdd.value);
	}, false);
	_bind2.default.btnAddMid.addEventListener('click', function () {
		_util2.default.startMeasure('add mid');
		_add2.default.addRowsMid(_bind2.default.inputAdd.value);
	}, false);
	_bind2.default.btnAddLast.addEventListener('click', function () {
		_util2.default.startMeasure('add last');
		_add2.default.addRowsLast(_bind2.default.inputAdd.value);
	}, false);

	//replace
	_bind2.default.btnReplaceFirst.addEventListener('click', function () {
		_util2.default.startMeasure('replace');
		_replace2.default.replaceRowsFirst(_bind2.default.inputReplace.value);
	}, false);
	_bind2.default.btnReplaceMid.addEventListener('click', function () {
		_util2.default.startMeasure('replace');
		_replace2.default.replaceRowsMid(_bind2.default.inputReplace.value);
	}, false);
	_bind2.default.btnReplaceLast.addEventListener('click', function () {
		_util2.default.startMeasure('replace');
		_replace2.default.replaceRowsLast(_bind2.default.inputReplace.value);
	}, false);

	//update
	_bind2.default.btnUpdateFirst.addEventListener('click', function () {
		_util2.default.startMeasure('update');
		_update2.default.updateRowsFirst(_bind2.default.inputUpdate.value);
	}, false);
	_bind2.default.btnUpdateMid.addEventListener('click', function () {
		_util2.default.startMeasure('update');
		_update2.default.updateRowsMid(_bind2.default.inputUpdate.value);
	}, false);
	_bind2.default.btnUpdateLast.addEventListener('click', function () {
		_util2.default.startMeasure('update');
		_update2.default.updateRowsLast(_bind2.default.inputUpdate.value);
	}, false);
	_bind2.default.btnUpdateEvery.addEventListener('click', function () {
		_util2.default.startMeasure('update');
		_update2.default.partialUpdate(_bind2.default.inputUpdateEvery.value);
	}, false);

	//swap
	_bind2.default.btnSwapFirst.addEventListener('click', function () {
		_util2.default.startMeasure('swap');
		_swap2.default.swapRowsFirst();
	}, false);
	_bind2.default.btnSwapMid.addEventListener('click', function () {
		_util2.default.startMeasure('swap');
		_swap2.default.swapRowsMid();
	}, false);
	_bind2.default.btnSwapLast.addEventListener('click', function () {
		_util2.default.startMeasure('swap');
		_swap2.default.swapRowsLast();
	}, false);

	//fetch
	_bind2.default.btnFetch1.addEventListener('click', function () {
		_util2.default.startMeasure('fetch');
		_otherFns2.default.fetchData(1000);
	}, false);
	_bind2.default.btnFetch2.addEventListener('click', function () {
		_util2.default.startMeasure('fetch');
		_otherFns2.default.fetchData(2000);
	}, false);

	//edit
	_bind2.default.inputEdit.addEventListener('input', function () {
		_util2.default.startMeasure('edit');
		_otherFns2.default.editData();
	}, false);
	_bind2.default.btnEdit.addEventListener('click', function () {
		_util2.default.startMeasure('edit');
		_otherFns2.default.editData();
	}, false);

	//filter
	_bind2.default.checkboxFilter.addEventListener('click', function () {
		_util2.default.startMeasure('filter');
		_filter2.default.filter();
	}, false);

	//search
	_bind2.default.inputSearch.addEventListener('input', function () {
		_util2.default.startMeasure('search');
		_otherFns2.default.searchData();
	}, false);
	_bind2.default.btnSearch.addEventListener('click', function () {
		_util2.default.startMeasure('search');
		_otherFns2.default.searchData();
	}, false);
});

/***/ })
/******/ ]);