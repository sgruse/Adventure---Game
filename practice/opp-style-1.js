function PrintStuff(myDocuments) {
  this.documents = myDocuments
}

PrintStuff.prototype.print = function () {
  // console.log(this.documents);
}


var newObj = new PrintStuff('I can print')


var myObj = new Object()

// console.log(myObj.constructor);


function Account() {

}

Account.prototype.findMe = function (name) {
// console.log(name + 'me has been called');
}

var userAccount = new Account()



var userAccount = new Object()

var userAccount = {name: 'Mike'}
//
// console.log(userAccount.name);

var myArray = new Array()

Array.prototype.grossBeat = function (){
  console.log('Gross beat');
}

// console.log(myArray.grossBeat);


// INHERITANCE DEMONSTRATION

function Plant() {
  this.country = 'Mexico';
  this.isOrganic = true;
};

Plant.prototype.showNameAndColor = function () {
  console.log('I am a ' + this.name + ' and my color is ' + this.color);
}

Plant.prototype.amIOrganic = function () {
  if(this.isOrganic) {
    console.log('I am organic Baby!');
  }
}

function Fruit(fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

Fruit.prototype = new Plant();

var aBanana = new Fruit('Banana', 'Yellow');

// console.log(aBanana.name);
// console.log(aBanana.showNameAndColor());

// console.log(Fruit.prototype);


var myFriends = {name: 'Pete'}

// console.log(myFriends.toString());
console.log(myFriends.toString());
