
// ----------- main elements
var clear, table, tableWrap, refresh, search, add, edit, 
	inputAdd, inputSearch, inputEdit,
	const1, const2, const3, 
	filter10, update10Col2, update10Col5,
	add1first, add1mid, add1last, 
	add2first, add2mid, add2last,
	add3first, add3mid, add3last,
	add4first, add4mid, add4last,
	replace1first, replace1mid, replace1last,
	replace2first, replace2mid, replace2last,
	replace3first, replace3mid, replace3last,
	replace4first, replace4mid, replace4last,
	updateCol2First, updateCol2Mid, updateCol2Last,
	updateCol5First, updateCol5Mid, updateCol5Last,
	swapFirst, swapMid, swapLast;

var data = [];

// -------------- init function

document.addEventListener('DOMContentLoaded', function() {
	
	clear = byName('clear'), table = byName('table'), tableWrap = byName('tableWrap'), refresh = byName('refresh'), 
	search = byName('btn-search'), edit = byName('btn-edit'),
	inputAdd = byName('input-add'), inputEdit = byName('input-edit'), inputSearch = byName('input-search'),
	const1 = byName('const1'), const2 = byName('const2'), const3 = byName('const3'), 
	filter10 = byName('filter10'), update10Col2 = byName('update10Col2'), update10Col5 = byName('update10Col5'),
	add1first = byName('add1first'), add1mid = byName('add1mid'), add1last = byName('add1last'), 
	add2first = byName('add2first'), add2mid = byName('add2mid'), add2last = byName('add2last'),
	add3first = byName('add3first'), add3mid = byName('add3mid'), add3last = byName('add3last'),
	add4first = byName('add4first'), add4mid = byName('add4mid'), add4last = byName('add4last'),
	replace1first = byName('replace1first'), replace1mid = byName('replace1mid'), replace1last = byName('replace1last'),
	replace2first = byName('replace2first'), replace2mid = byName('replace2mid'), replace2last = byName('replace2last'),
	replace3first = byName('replace3first'), replace3mid = byName('replace3mid'), replace3last = byName('replace3last'),
	replace4first = byName('replace4first'), replace4mid = byName('replace4mid'), replace4last = byName('replace4last'),
	updateCol2First = byName('updateCol2First'), updateCol2Mid = byName('updateCol2Mid'), updateCol2Last = byName('updateCol2Last'),
	updateCol5First = byName('updateCol5First'), updateCol5Mid = byName('updateCol5Mid'), updateCol5Last = byName('updateCol5Last'),
	swapFirst = byName('swapFirst'), swapMid = byName('swapMid'), swapLast = byName('swapLast');


	clear.addEventListener('click', function() {
		clearRows();
	}, false);
	refresh.addEventListener('click', function() {
		refreshRows();
	}, false);


	inputSearch.addEventListener('input', function(e) {
		searchData(e);
	}, false);
	search.addEventListener('click', function(e) {
		searchData(e, true);
	}, false);
	
	inputEdit.addEventListener('input', function(e) {
		editData(e);
	}, false);
	edit.addEventListener('click', function() {
		editData(null, true);
	}, false);

	filter10.addEventListener('click', function() {
		filterRows10();
	}, false);
	update10Col2.addEventListener('click', function() {
		updateRows10(1);
	}, false);
	update10Col5.addEventListener('click', function() {
		updateRows10(4);
	}, false);

	const1.addEventListener('click', function() {
		constData(1000);
	}, false);
	const2.addEventListener('click', function() {
		constData(2000);
	}, false);
	const3.addEventListener('click', function() {
		constData(10000);
	}, false);

	add1first.addEventListener('click', function() {
		addRowsFirst(1);
	}, false);
	add1mid.addEventListener('click', function() {
		addRowsMid(1);
	}, false);
	add1last.addEventListener('click', function() {
		addRowsLast(1);
	}, false);

	add2first.addEventListener('click', function() {
		addRowsFirst(1000);
	}, false);
	add2mid.addEventListener('click', function() {
		addRowsMid(1000);
	}, false);
	add2last.addEventListener('click', function() {
		addRowsLast(1000);
	}, false);

	add3first.addEventListener('click', function() {
		addRowsFirst(2000);
	}, false);
	add3mid.addEventListener('click', function() {
		addRowsMid(2000);
	}, false);
	add3last.addEventListener('click', function() {
		addRowsLast(2000);
	}, false);

	add4first.addEventListener('click', function() {
		addRowsFirst(10000);
	}, false);
	add4mid.addEventListener('click', function() {
		addRowsMid(10000);
	}, false);
	add4last.addEventListener('click', function() {
		addRowsLast(10000);
	}, false);

	replace1first.addEventListener('click', function() {
		replaceRowsFirst(1);
	}, false);
	replace1mid.addEventListener('click', function() {
		replaceRowsMid(1);
	}, false);
	replace1last.addEventListener('click', function() {
		replaceRowsLast(1);
	}, false);

	replace2first.addEventListener('click', function() {
		replaceRowsFirst(1000);
	}, false);
	replace2mid.addEventListener('click', function() {
		replaceRowsMid(1000);
	}, false);
	replace2last.addEventListener('click', function() {
		replaceRowsLast(1000);
	}, false);

	replace3first.addEventListener('click', function() {
		replaceRowsFirst(2000);
	}, false);
	replace3mid.addEventListener('click', function() {
		replaceRowsMid(2000);
	}, false);
	replace3last.addEventListener('click', function() {
		replaceRowsLast(2000);
	}, false);

	replace4first.addEventListener('click', function() {
		replaceRowsFirst(10000);
	}, false);
	replace4mid.addEventListener('click', function() {
		replaceRowsMid(10000);
	}, false);
	replace4last.addEventListener('click', function() {
		replaceRowsLast(10000);
	}, false);

	updateCol2First.addEventListener('click', function() {
		updateColFirst(1);
	}, false);
	updateCol2Mid.addEventListener('click', function() {
		updateColMid(1);
	}, false);
	updateCol2Last.addEventListener('click', function() {
		updateColLast(1);
	}, false);

	updateCol5First.addEventListener('click', function() {
		updateColFirst(4);
	}, false);
	updateCol5Mid.addEventListener('click', function() {
		updateColMid(4);
	}, false);
	updateCol5Last.addEventListener('click', function() {
		updateColLast(4);
	}, false);

	swapFirst.addEventListener('click', function() {
		swapRowsFirst();
	}, false);
	swapMid.addEventListener('click', function() {
		swapRowsMid();
	}, false);
	swapLast.addEventListener('click', function() {
		swapRowsLast();
	}, false);

});



// -------------- main functions

function searchData(e, click) {
	// if(data.length > 0 && click) {
	// 	searchFor(inputSearch.value);
	// }
	// if(data.length > 0 ) {
	// 	var txt = inputSearch.value;
	// 	if((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 48 && e.keyCode <= 57)) {
	// 		txt += e.key;
	// 	} else if (e.key === 'Backspace') {
	// 		txt = txt.slice(0, txt.length-1);
	// 	} 
	// 	searchFor(txt);
	// }

	if(data.length > 0 ) {
		searchFor(inputSearch.value);
		// table.children.item(0).cells[1].className = 'ala ma kota';
		// table.children.item(0).cells[1].innerText = 'dom';
		// console.log(table.children.item(0).cells[1].className);
	}


}

// function addData() {
// 	var newData = randomObjects(1);
// 	newData[0].c1 = inputAdd.value;
// 	addRowsFirst(null, newData);
// }

function editData(e, click) {
	// if(click && data.length > 0) {
	// 	data[0].c1 = inputEdit.value;
	// 	replaceRow(data[0], data[0]);
	// } else if(data.length > 0 ) {
	// 	var txt = inputEdit.value;
	// 	if(e.keyCode >= 65 && e.keyCode <= 90) {
	// 		txt += e.key;
	// 	} else if (e.key === 'Backspace') {
	// 		txt = txt.slice(0, txt.length-1);
	// 	} 
	// 	data[0].c1 = txt;
	// 	replaceRow(data[0], data[0]);
	// }

	if(data.length > 0) {
		data[0].c1 = inputEdit.value;
		replaceRow(data[0], data[0]);
	} 
}

var filterOn = false;
function filterRows10() {
	if(data.length > 0 && !filterOn) {
		filterOn = true;

		for(var i = 0; i < data.length; i++) {
			//update model and view 
			if(data[i].id % 10 === 0) {
				data[i].visible = true;
			} else {
				data[i].visible = false;
				// var tr = table.children.item(i);
				var tr = data[i].ref;
				tr.className = 'visible-off';
			}
		}
	} else if (data.length > 0 && filterOn) {
		filterOn = false;

		for(var i = 0; i < data.length; i++) {
			//update model and view 
			if(data[i].id % 10 !== 0) {
				data[i].visible = true;
				// var tr = table.children.item(i);
				var tr = data[i].ref;
				tr.className = 'visible-on';
			}
		}
	}
}

function filterRows10_2() {
	if(data.length > 0 && !filterOn) {
		filterOn = true;
		// tableWrap.classList.add('visible-off');
		tableWrap.removeChild(table);

		
	} else if (data.length > 0 && filterOn) {
		filterOn = false;
		// tableWrap.classList.remove('visible-off');
		tableWrap.appendChild(table);
	}
}

function updateRows10(col) {
	var colName = 'c' + col;
	if(data.length > 10) {
		for(var i = 0; i < data.length; i += 10) {
			//update model
			data[i][colName] += 'a';
			//update view
			// var tr = table.children.item(i);
			var tr = data[i].ref;
			tr.cells[col].innerText = data[i][colName];
		}
	}
}

function constData(count) {
	var resource = 'data' + count + '.json';
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var newData = JSON.parse(this.responseText);
			clearRows();
			id = count+1;
			addRowsLast(null, newData);
		}
	}

	xhttp.open('GET', resource, true);
	xhttp.send();
}

function addRowsFirst(count, newData) {
	if(!newData) {
		var newData = randomObjects(count);
	}

	//update model
	data = newData.concat(data);

	//update view
	var docFragment = document.createDocumentFragment();
	newData.forEach(item => {
		item.ref = createRow(item);
		docFragment.appendChild(item.ref);
	});
	if(table.children.length > 0) {
		table.insertBefore(docFragment, table.children.item(0));
	} else {
		table.appendChild(docFragment);	
	}
	
}

function addRowsMid(count) {
	var newData = randomObjects(count);

	//update model
	var mid = 0;
	if(data.length > 0) {
		mid = Math.floor(data.length / 2);
		var args = [mid, 0];//position mid, 0 removes - for splice function 
		args = args.concat(newData);//mid, 0 + newData -> args for splice
		Array.prototype.splice.apply(data, args);
	} else {
		data = newData;
	}
	
	//update view
	var docFragment = document.createDocumentFragment();
	newData.forEach(item => {
		item.ref = createRow(item);
		docFragment.appendChild(item.ref);
	});
	if(table.children.length > 0) {
		table.insertBefore(docFragment, table.children.item(mid));
	} else {
		table.appendChild(docFragment);	
	}
}

function addRowsLast(count, newData) {//newData - optional parameter - if it is, randomObjects is not used
	if(!newData) {
		newData = randomObjects(count);
	}

	//update model
	data = data.concat(newData);

	//update view
	var docFragment = document.createDocumentFragment();
	newData.forEach(item => {
		item.ref = createRow(item);
		docFragment.appendChild(item.ref);
	});
	table.appendChild(docFragment);
}

function replaceRowsFirst(count) {
	if(data.length >= count) {
		var newData = randomObjects(count);
		for(var i = 0; i < count; i++) {
			//replace model and view
			// replaceRow2(table.children.item(i), data[i], newData[i]);
			replaceRow(data[i], newData[i]);
		}
	} 
}

function replaceRowsMid(count) {
	if(data.length >= count) {
		var newData = randomObjects(count);
		var start = Math.floor(data.length / 2) - Math.floor(count/2);
		var end = start + count;
		for(var i = start, j = 0; i < end; i++, j++) {
			//replace model and view
			// replaceRow(table.children.item(i), newData[j], data[i]);
			replaceRow(data[i], newData[j]);
		}
	} 
}

function replaceRowsLast(count) {
	if(data.length >= count) {
		var newData = randomObjects(count);
		var start = data.length - count;
		var end = start + count;
		for(var i = start, j = 0; i < end; i++, j++) {
			//replace model and view
			// replaceRow(table.children.item(i), newData[j], data[i]);
			replaceRow(data[i], newData[j]);
		}
	} 
}
var change = true;
function updateColFirst_2(col) {
	if(data.length > 0) {
		var i = 0;
		//update model
		if(change) {
			data[i]['c' + col] = 'Ala has a cat';
			change = false;
		}
		else {
			data[i]['c' + col] = '';
			change = true;
		}
		//update view
		// var tr = table.children.item(i);
		var tr = data[i].ref;
		tr.cells[col].innerText = data[i]['c' + col];
	}
}


function updateColFirst(col) {
	if(data.length > 0) {
		var i = 0;
		//update model
		data[i]['c' + col] += 'a';
		//update view
		// var tr = table.children.item(i);
		var tr = data[i].ref;
		tr.cells[col].innerText = data[i]['c' + col];
	}
}

function updateColMid(col) {
	if(data.length > 0) {
		var i = Math.floor(data.length/2);
		//update model
		data[i]['c' + col] += 'a';
		//update view
		// var tr = table.children.item(i);
		var tr = data[i].ref;
		tr.cells[col].innerText = data[i]['c' + col];
	}
}

function updateColLast(col) {
	if(data.length > 0) {
		var i = data.length - 1;
		//update model
		data[i]['c' + col] += 'a';
		//update view
		// var tr = table.children.item(i);
		var tr = data[i].ref;
		tr.cells[col].innerText = data[i]['c' + col];
	}
}

function swapRowsFirst() {
	if(data.length > 1) {
		var i = 0;
		var j = 1;
		//update model
		var temp = data[i];
		data[i] = data[j];
		data[j] = temp;
		//update view
		swap(data[i], data[j]);
	}
}

function swapRowsMid() {
	if(data.length > 1) {
		var i = Math.floor(data.length / 2) - 1;
		var j = i+1;
		//update model
		var temp = data[i];
		data[i] = data[j];
		data[j] = temp;
		//update view
		swap(data[i], data[j]);
	}
}

function swapRowsLast() {
	if(data.length > 1) {
		var i = data.length-2;
		var j = i+1;
		//update model
		var temp = data[i];
		data[i] = data[j];
		data[j] = temp;
		//update view
		swap(data[i], data[j]);
	}
}



// ------------------- old functions - core of main functions

//non keyed replace
function replaceRows(count = 100) {
	if(table.children.length >= count) {
		data = randomObjects(count);
		for(var i = 0; i < count; i++) {
			// replaceRow(table.children.item(i), data[i]);
			var tr = table.children.item(i);
			// console.log(tr.cells[0].innerText);
			tr.cells[0].innerText = data[i].id;
			tr.cells[1].innerText = data[i].c1;
			tr.cells[2].innerText = data[i].c2;
			tr.cells[3].innerText = data[i].c3;
			tr.cells[4].innerText = data[i].c4;
		}
	} 
}

function clearRows() {
	if(data.length > 0) {
		data = [];
		id = 1;
		table.remove();
		table = create('tbody');
		table.setAttribute('name', 'table');
		tableWrap.appendChild(table);
	} 
}

function addRows(count = 100) {
	//wersja 1
	// var newData = buildData(count);
	// data = data.concat(newData);
	// newData.forEach(item => {
	// 	table.appendChild(createRow(item));
	// });

	//sprawdzic czym sie rozni docFramgment od zwyklego diva, gdydybm do niego dodawal
	var newData = randomObjects(count);
	data = data.concat(newData);
	var docFragment = document.createDocumentFragment();
	newData.forEach(item => {
		docFragment.appendChild(createRow(item));
	});
	table.appendChild(docFragment);
}

//non keyed
function update() {
	// var len = data.length / 10;
	// var newData = buildData(len);
	for( var i = 0; i < data.length; i += 10 ) {
		var tr = table.children.item(i);
		// tr.cells[0].innerText = newData[j].id;
		// tr.cells[1].innerText =  tr.cells[1].innerText + ' !!!';
		var txt = tr.cells[1].firstChild.nodeValue;
		tr.cells[1].firstChild.nodeValue = txt + 'a';
	}
}

function swap(a, b) {

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

	var temp = a.ref;
	a.ref = b.ref;
	b.ref = temp;


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

function refreshRows() {
	if(table.children.length > 0) {
		console.log('refresh');
		table.remove();
		table = create('tbody');
		table.setAttribute('name', 'table');
		tableWrap.appendChild(table);
		data.forEach(item => {
			table.appendChild(createRow(item));
		});
	}
}

function searchFor(txt) {
	var col = ['c1', 'c2', 'c3', 'c4'];

	data.forEach(item => {
		for(var i = 0; i < 4; i++) {
			var prop = item[col[i]] + "";
			if(txt !== "" && prop.indexOf(txt) !== -1) {
				item.ref.cells[i+1].classList.add('search-selected');
				if(!item.search) {
					item.search = [null, null, null, null];
				}
				item.search[i] = txt;
			} else if (item.search && item.search[i]) {
				// if(item.search[i] !== txt) {
					item.search[i] = null;
					item.ref.cells[i+1].classList.remove('search-selected');
				// }
			}
			
		}
	});
}

// ----------- generate data
var id = 1;

function randomObjects(count = 100) {

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

function rand(mod) { //max modulo === 1000
    return Math.floor(Math.random() * 1000 ) % mod;
}


// --------------- util functions
function byName(name) {
	return document.querySelector('[name= ' + name +']');
}

function text(txt) {
	return document.createTextNode(txt);
}

function create(el) {
	return document.createElement(el);
}


// ------------------- 

var trClicked = null;


//sprawdzic zajetosc pamieciowa jesli daje 1 glownego listenera zamiast wielu mniejszych - i jak to zadziala na szybkosci funkcji
function createRow(item) {
	let tr = create('tr');

	tr.addEventListener('click', function() {
		clickRow(tr);
		// console.log('click');
	}, false);

	var td1 = create('td');
	var td2 = create('td');
	var td3 = create('td');
	var td4 = create('td');
	var td5 = create('td');
	var td6 = create('td');
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
	var btn = create('button');
	btn.className = 'btn btn-default';
	var span = create('span');
	span.className = 'glyphicon glyphicon-remove';
	btn.appendChild(span);
	btn.addEventListener('click', function() {
		deleteRow(tr, item);
		// console.log('delete');
	}, false);
	// tr.cells[2].appendChild(btn);
	td6.appendChild(btn);

	return tr;
}

//non-keyed
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

	for(var i = 1; i <= 4; i++) {
		if(tr.cells[i].classList.contains('search-selected')) {
			tr.cells[i].classList.remove('search-selected');
		}
	}

	// item.search = [null, null, null, null];
	// item.visible

	// tr.cells[0].remove();
	// tr.cells[0].remove();
	// tr.insertBefore(create('td'), tr.cells[0]);
	// tr.insertBefore(create('td'), tr.cells[0]);

	// tr.cells[0].appendChild(text(item.id));
	// tr.cells[1].appendChild(text(item.label));
}

function replaceRow2(tr, item, newItem) {
	// console.log('repl2');
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

function clickRow(tr) {
	if(!trClicked) {
		trClicked = tr;
		trClicked.classList.toggle('selected');
	}
	else if(trClicked !== tr) {
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
	var i = data.findIndex(it => it === item);
	if(i > -1) {
		data.splice(i, 1);
	}
}

function getTr(i, item) {
	return table.children.item(i);
}