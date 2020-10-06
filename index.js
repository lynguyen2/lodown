'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

Below goes into LoDown ::

/**
 * identity: Returns the value unchanged
 * 
 * @param {*} value : The value to be returned from this function
 * (* means can take in any data type)
 * 
 * @returns {*} : The value unchanged
 */
function identity(value){
    return value;
};
module.exports.identity = identity;
  
  
/**
 * typeOf: Returns the Data Type as a String
 * 
 * @param {*} : The value to be returned from this function
 * 
 * @returns {*} : The value as a string. Types are one of: "string", "array", "object", "undefined", "number", "boolean", "null", "function"
 */
function typeOf(value) {
    if (value instanceof Array) {
        return "array";
    } else if (value === null) {
        return "null";
    } else {
        return typeof value;
    }
};
module.exports.typeOf = typeOf;

/**
 * first: Designed to return the first element of an array. It isn't limited to only the first element;
 *        First can return the first two elements or however many you want to return. 
 * 
 * @param {array} collection : The collection over which to iterate.
 * @param {number} : The number to be applied to each value in the array
 * 
 * @returns {array} : Returns an empty [] or the first (or however many you indicate) indexed element of the array.
 */
 function first(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (!Number.isFinite(number)) {
        return array[0]
    } else if (array < number) {
        return array;
    } else {
        return array.slice(0, number)
    }
 };
 module.exports.first = first;

/**
 * last: Designed to return the last elements of an array
 * 
 * @param {array} collection : The collection over which to iterate.
 * @param {number} : The number to be applied to each value in the array.
 * 
 * @returns {array} : Returns an empty [] or the last indexed elment of the array.
 */
 function last(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (!Number.isFinite(number)) {
        return array[array.length - 1];
    } else if (array.length < number) {
        return array;
    } else {
        return array.slice(Math.max(array.length - (number)));
    }
 };
 module.exports.last = last;

/**
 * indexOf: Returns the index of the first occurence of a value
 * 
 * @param {array} collection : The collection over which to iterate.
 * @param {value} : The value which to search for.
 * 
 * @return {index number} : Returns the index number or -1, if no occurence.
 */
 function indexOf(array, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
          let returnValue = i++;
            return returnValue;
        } 
    }
    return -1;
 };
 module.exports.indexOf = indexOf;

/**
 * contains: Returns a boolean to show if a value is present in an array.
 * 
 * @param {array} collection : The collection over which to iterate.
 * @param {value} : This value will be tested to see if it's in the given array.
 * 
 * @returns {boolean} : true or false
 */
 function contains(array, value){
    return array.includes(value) ? true : false;
 };
 module.exports.contains = contains;
 
/**
 * each: Iterates through everything in a collection.
 * 
 * @param {array or object} collection : The collection over which to iterate.
 * @param {function} action: The Function to be applied to each value in the collection.
 * 
 * @returns {}??
 */
 function each(collect, func) {
    if(Array.isArray(collect)) {
        for(var i = 0; i < collect.length; i++){
            func(collect[i], i, collect);
        }
    } else {
        for (var key in collect) {
            func(collect[key], key, collect);
        }
    }
 };
 module.exports.each = each;
 
/**
 * unique: Used to remove all the duplicates in an array.
 * 
 * @param {array} collection : The collection over which to iterate.
 * 
 * @returns {array} : Returns the array with which all the duplicates were removed and stored.
 */
 function unique(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
 };
 module.exports.unique = unique;
 
/**
 * filter: Designed to filter values in a collection based on a test. 
 * 
 * @param {array} collection : The collection over which to iterate.
 * @param {function} action : The Function to be applied to each value in the collection.
 * 
 * @returns {array} : Return a new array of elements for which calling <function> returned true
 */
 function filter(array, func) {
    let newArray = [];
    _.each(array, function(element, index, array) {
        if (func(element, index, array)) {
            newArray.push(element)
        }
    });
    return newArray;
 };
 module.exports.filter = filter;
 
/**
 * reject: Used to give the answer which does not match with the given condition
 * 
 * @param {array} collection : The collection over which to iterate.
 * @param {function} action : The Function to be applied to each value in the collection.
 * 
 * @returns {array} : Return a new array of elements for which calling <function> returned true
 */
function reject(array, func) {
    let newArray = [];
    _.each(array, function(element, index, array) {
        if (!func(element, index, array)) {
            newArray.push(element);
        }
    });
    return newArray;
};
module.exports.reject = reject;

/**
 * partition: Used to get an array as input and returns two arrays. The first array containing those 
 * elements that satisfy the condition and the second array contains the remaining elements
 * 
 * @param {array} collection : The collection over which to iterate.
 * @param {function} action : The Function to be applied to each value in the collection.
 * 
 * @returns {array} : Returns an array of arrays.
 */
 function partition(array, func){
    var truthy = [];
    var falsy = [];
    _.each(array, function(element, index, array) {
        let collect = func(element, index, array);
        if (collect) {
            truthy.push(element);
        } else if (!collect) {
         falsy.push(element);
        }
    });
    return [truthy, falsy];
 };
 module.exports.partition = partition;
 
/**
 * map: Creates a new array with the results of calling a callback function on every element in an array.
 * Map doesn't filter out values that don't meet the criteria; the returns will be hold a place as undefined
 * 
 * @param {array or object} collection : The collection over which to iterate.
 * @param {function} action : The Function to be applied to each value in the collection.
 * 
 * @returns : Returns a new array.
 */ 
 function map(collection, func){
    let newArray = []; 
    _.each(collection, function(thing, i, array){ 
        newArray.push(func(thing, i, array));
    });
    return newArray;
 };
 module.exports.map = map;
 
/**
 * pluck: Used to extract a list of a given property values into a new array.
 * Using map will produce a new array of values.
 * 
 * @param {array) collection : The collection over which to iterate.
 * @param {key} value : The values to which the values will be extracted.
 * 
 * @returns {array} :  A new array with all the values plucked 
 */
 function pluck(array, key){
    return array.map(function(obj) {
        return obj[key];
    });
 };
 module.exports.pluck = pluck;
 
/**
 * every: Tests whether ALL elements in the array pass the given test function.
 * 
 * @param {array or object} collection : The collection over which to iterate.
 * @param {function} action : the Function to be applied to each value in the collection. The test Function
 * must return a Boolean based on some logic which tests the value given to it.
 * 
 * @returns {boolean} : true or false
 */
 function every(collection, func) {
    var check = func || _.identity;
    for (var i = 0;i < collection.length;i++) {
        if (! check(collection[i])) {
            return false;
        }
    }
    return true;
};
module.exports.every = every;
 
/**
 * some: used to find whether any value in the given list matches the given condition or not. It returns true
 * if ANY of the array elements pass the test function. 
 * 
 * @param {array or object} collection : the collection to iterate through.
 * @param {function} action : the Function to be applied to each value in the collection. The test Function
 * must return a Boolean based on some logic which tests the value given to it.
 * 
 * returns {boolean} : true or false
 */
 function some(collection, func) {
    let result = false;
    _.each(collection, function(element, index, collection){
        if (typeof func !== 'function'){
            if (element){
            result = true;    
            }
        }
        else if (func(element, index, collection)){
            result = true;
        }
    });
    return result;
 };
 module.exports.some = some;
 
/**
 * reduce: Takes in a bunch of values from collections, transforms them and reduces them to a single value. 
 * 
 * @param {array} collection : The collection over which to iterate.
 * @param {function} callback action : The Function to be applied to each value in the collection.
 * @param {seed} optional : initial value, tells where to start the iteration.
 * 
 * @returns {value} : one single value
 */
 function reduce(array, callbackFunction, initialValue){
    if (initialValue !== undefined) {
        var result = initialValue;
        _.each(array, function(element, index, array) {
            result = callbackFunction(result, element, index, array)
        })
        return result;
    } else {
    var result = array[0];
    _.each(array, function(element, index, array) {
        if (index !== 0) {
            result = callbackFunction(result, element, index, array);
        }
    })
    return result;
    }
 };
 module.exports.reduce = reduce;

/**
 * extend: It is used to create a copy of all of the properties of the input objects over to the destination
 * object and return the destination object. Any nested objects or arrays will be copied by reference, not 
 * duplicated. It's in-order, so the last source will override properties of the same name in previous arguments.
 * 
 * @param {objects...} collection : unknown amount of objects being passed into the function
 * 
 * @return {object} : Returns the target/destination object. will return new values added or updated.
 */
 function extend(...obj){
    var finalTarget = {};
    finalTarget = Object.assign(...obj);
    return finalTarget;
 };
 module.exports.extend = extend;
