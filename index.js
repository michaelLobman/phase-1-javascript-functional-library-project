function myEach(collection, callback) {

	function iterate(array){
		for (let i = 0; i < array.length; i++) {
			callback(array[i]);
		}
		return collection;
	}

	if (Array.isArray(collection)) {
		const newArr = collection.slice();
		return iterate(newArr);

	} else {
		const newArr = Object.values(collection)
		return iterate(newArr);
	}
}


function myMap(collection, callback) {

	function iteratePush(array) {
		const newArr = [];
		for (let i = 0; i < array.length; i++) {
			newArr.push(callback(array[i]));
		}
		return newArr;
	}

	if (Array.isArray(collection)) {
		const array = collection.slice();
		return iteratePush(array);

	} else {
		const array = Object.values(collection);
		return iteratePush(array);
	}
}


// function myReduce(collection, callback, acc) {

// 	function reduce(array)



// }


function myReduce(collection, callback, acc) {

	function reduce(array) {
		if (acc === undefined) {
			acc = array[0];
			for(let i = 1; i < array.length; i++){
				acc = callback(acc, array[i], array);
			} 
			return acc;
		}

			else {
				for (let i of array) {

					acc = callback(acc, i, array);
				}

				return acc;
			}
		}

	if (Array.isArray(collection)) {
		const array = collection.slice();
		return reduce(array);

	} else {
		const array = Object.values(collection)
		return reduce(array);
	}

}

const myArr = [1,2,3]


function myFind(collection, predicate) {

	function iterateTruth(array) {
		for (let e of array) {
			if(predicate(e)) {
				return e;
			}
		}

	}

	if (Array.isArray(collection)) {
		const array = collection.slice("");
		return iterateTruth(array);
	} else {
		const array = Object.values(collection);
		return iterateTruth(array);
	}
}

function myFilter(collection, predicate) {

	function filterPush(arr) {

		const predicateArr = [];

		for(let i of arr) {
			if(predicate(i)){
				predicateArr.push(i);
			}
		}

		return predicateArr;
	}

	if (Array.isArray(collection)) {
		const copy = collection.slice();
		return filterPush(copy);
	} else {
		const copy = Object.values(collection);
		return filterPush(copy);
	}
}

function mySize(collection){

	function size(arr){
		return arr.length;
	}

	if (Array.isArray(collection)){
		const copy = collection.slice();
		return size(copy);
	} else {
		const copy = Object.keys(collection)
		return size(copy);
	}
}

function myFirst(array, n){

	if(n === undefined) {
		return array[0];
	} else {
		return array.slice(0, n)
	}
}

function myLast(array, n){
	if(n === undefined) {
		return array[array.length - 1]
	} else {
		return array.slice(array.length - n)
	}

}

function myKeys(object){
	return Object.keys(object);
}

function myValues(object){
	return Object.values(object);
}