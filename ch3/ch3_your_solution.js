//Question 3.5


var Stack = function() {
 this.storage = {};
 this.top = -1;
}

Stack.prototype.push = function(val){
  this.top++;
  this.storage[this.top] = val;
}

Stack.prototype.pop = function(){
  var temp = null;
  if(this.top >= 0){
  	temp = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
	}
  return temp;
}

Stack.prototype.peek = function(){
  return this.storage[this.top];
}

Stack.prototype.isEmpty = function(){
  return this.top === -1;
}
Stack.prototype.length = function(){
  return this.top+1;
}

//define sortStack
const sortStack = (original) => {
  //create temporary stack
  var temp = new Stack();
  //loop through swap logic while original stack is not empty
  while( !original.isEmpty() ){
    //pop out top item from original
    var newVal = original.pop();
    //create counter
    var count = 1;
    //as long as the temp is not empty and new value is smaller than top value
    while(!temp.isEmpty() && newVal < temp.peek()){
      //move the top value from temp to original
      original.push( temp.pop() );
      //increment a count of pieces moved
      count++;
    }
    //place new value in temp stack
    temp.push(newVal);
    //move all pieces back from original to temp
    while(--count){
      temp.push( original.pop() )
    }
  }
  //loop through temporary and move each item to original stack
  while( !temp.isEmpty() ){
    original.push( temp.pop() );
  }
  //return original stack
  return original;
}





/*******************

STACK CONSTRUCTOR AND METHODS

*******************



var Stack = function() {
  this._storage = [];
  this.length = 0;
};

Stack.prototype.push = function(value) {
  this._storage.push(value);
  this.length++;
};

Stack.prototype.pop = function(value) {
  if (this.length >= 1) this.length--;
  return this._storage.pop();
};

Stack.prototype.peek = function() {
  return this._storage[this._storage.length - 1];
};

Stack.prototype.isEmpty = function(value) {
  return this._storage.length === 0;
};


*******************/
