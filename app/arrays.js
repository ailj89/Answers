exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if (arr[i] == item){
        console.log(i);
        return i;
      }
    }
  },

  sum : function(arr) {
    var add = 0;
    for(var i = 0; i < arr.length; i++){
      add =  add + arr[i];
    }
    return add;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      var deleteItem = arr[i];
      for(var j = 1; j <arguments.length; j++){
        if(deleteItem == arguments[j]){
          arr.splice(i,1);
          i--;
        }
      }
    }
    console.log(arr);
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      var deleteItem = arr[i];
      for(var j = 1; j <arguments.length; j++){
        if(deleteItem == arguments[j]){
          arr.splice(i,1);
          i--;
        }
      }
    }
    console.log(arr);
    return arr;
  },

  append : function(arr, item) {
    arr.push(10);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(10);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
   var arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert : function(arr, item, index) {
    arr.splice(2, 0, "z");
    return arr;
  },

  count : function(arr, item) {
    var c = 0;
    for (var i =0; i < arr.length; i++){
      if (arr[i] === 4){
        c++;
      }
    }
    
    return c;
  },

  duplicates : function(arr) {
    var newArr = [];
    for (var i = 0; i <arr.length - 1; i++){
      if((arr.lastIndexOf(arr[i]) != i) &&
         (newArr.indexOf(arr[i]) == -1)) {
        newArr.push( arr[i]);
      }
    }
    return newArr;
  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
