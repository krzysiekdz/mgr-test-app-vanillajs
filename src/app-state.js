import Bindings from './bind.js';
import u from './util.js';

var model = {
	data: [],
	prev: [],
	rows: [],
};

var trClicked = null;

function setModel(newModel) {
	model.data = newModel;
}

function getModel() {
	return model.data;
}

function getRows() {
	return model.rows;
}

function updateView() {
	var prevState = model.prev, nextState = model.data, rows = model.rows;

	if(prevState.length >= nextState.length) { //there is enough DOM elements (maybe deletes needed)
		for(var i = 0; i < nextState.length; i++) {
			if(prevState[i] !== nextState[i]) {
				updateRow(rows[i], nextState[i]);
				//slow access
				// updateRow(Bindings.table.children[i], nextState[i]);
				prevState[i] = nextState[i];
			}
		}

		//removing rest dom elements
		for(; i < prevState.length; i++) {
			rows[i].remove();
			rows[i] = null;
			prevState[i] = null;
		}
		for(i = prevState.length-1; i >= 0; i--) {
			if(prevState[i] === null) {
				prevState.splice(i, 1);
			}
		}
	
	} else { //new DOM elements needed
		for(var i = 0; i < prevState.length; i++) {
			if(prevState[i] !== nextState[i]) {
				updateRow(rows[i], nextState[i]);
				//slow access
				// updateRow(Bindings.table.children[i], nextState[i]);
				prevState[i] = nextState[i];
			}
		}

		//creating new elements
		var docFragment = document.createDocumentFragment();
		var table = Bindings.table;
		for(; i < nextState.length; i++) {
			rows[i] = createRow(nextState[i], i); //i - row number - for deleteRow function to know what row is clicked and remove proper model.data obj (because model.data[i] is in rows[i])
			docFragment.appendChild(rows[i]);
			prevState[i] = nextState[i];
		}
		table.appendChild(docFragment);	
	}

	// console.log(prevState);
}

function updateRow(tr, item) {
	tr.cells[0].innerText = item.id;
	tr.cells[1].innerText = item.c1;
	tr.cells[2].innerText = item.c2;
	tr.cells[3].innerText = item.c3;
	tr.cells[4].innerText = item.c4;
}

function createRow(item, rowNumber) {
	let tr = u.create('tr');

	tr.addEventListener('click', function() {
		clickRow(tr);
	}, false);

	var td1 = u.create('td');
	var td2 = u.create('td');
	var td3 = u.create('td');
	var td4 = u.create('td');
	var td5 = u.create('td');
	var td6 = u.create('td');
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
	var btn = u.create('button');
	btn.className = 'btn btn-default';
	var span = u.create('span');
	span.className = 'glyphicon glyphicon-remove';
	btn.appendChild(span);
	btn.addEventListener('click', function(e) {
		deleteRow(rowNumber);
		e.stopPropagation();
	}, false);
	td6.appendChild(btn);

	return tr;
}

//tworzenie wielu listenerow vs 1 wiekszy - wydajnosc pamieciowa oraz szybkosc dzialania - mozna zmirzyc
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

//delete row - dom row has always the same listener! - we must look what row number is and remove this object from model.data
function deleteRow(rowNumber) {
	var data = model.data;
	var id = data[rowNumber].id;
	var idx = data.findIndex(item => item.id === id);
	// console.log(id, idx);
	if(idx < 0)
		return;
	data.splice(idx, 1);
	// console.log(data);
	updateView();
}


function paintModel() {
	var data = model.data;
	if(data.length > 0) {
		console.log('paint model');
		Bindings.table.remove();
		var table = Bindings.table = u.create('tbody');
		table.setAttribute('name', 'table');
		Bindings.tableWrap.appendChild(table);
		data.forEach((item, i) => {
			model.rows[i] = createRow(item);
			table.appendChild(model.rows[i]);
		});
		model.prev = model.data;
	}
}

module.exports = {
	updateView: updateView, 
	setModel: setModel,
	getModel: getModel,
	getRows: getRows,
	paintModel: paintModel,
};

