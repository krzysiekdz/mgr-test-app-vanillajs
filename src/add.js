

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


// function updateView(newData, insertBeforePos, last) {
// 	var docFragment = document.createDocumentFragment();
// 	newData.forEach(item => {
// 		item.ref = createRow(item);
// 		docFragment.appendChild(item.ref);
// 	});
// 	if(last) {
// 		table.appendChild(docFragment);	
// 	}
// 	else if(table.children.length > 0) {
// 		table.insertBefore(docFragment, table.children.item(insertBeforePos));
// 	} else {
// 		table.appendChild(docFragment);	
// 	}
// }