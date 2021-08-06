function main(){
alert ('hello');

  class journalEntriesClass{
    createMyJournal(creationDate, journalEntry, confidenceLevel){
      this.creationDate = creationDate;
      this.journalEntry =  journalEntry;
      this.confidenceLevel = confidenceLevel;
    }
  }
}

const journalists = [];

let mainContainer = document.getElementById('container');
document.body.appendChild(mainContainer);
let unorderedList = document.createElement('ul');

let listItem = document.createElement('li');

listItem.classList.add('listed');
let listText = document.createTextNode('list item');
listItem.appendChild(listText);
unorderedList.appendChild(listItem);
mainContainer.appendChild(unorderedList);

let h1 = document.createElement('h1');
h1.classList.add('headers');
let h1Text = document.createTextNode('hi Im carl');
h1.appendChild(h1Text);
document.body.appendChild(h1);

unorderedList.appendChild(listItem);
container.appendChild(unorderedList);

let reflections = prompt('yo how ya doin?');

let confidence = prompt('Rate your confidence, Low');

let strength = prompt('How strong are you sonny boy?');

if(confidence == 'low'){
  console.log('low');
}

else if (confidence == 'medium'){
  console.log('medium');
}

else if (confidence == 'high'){
  console.log('high');
};

let form = document.createElement('form');
form.setAttribute('method', 'post');
form.setAttribute('action', 'submit');
var i = document.createElement("input"; //input the element text);
i.setAttribute('type', 'text');
i.setAttribute('name','username')
form.appendChild(i);
container.appendChild(form);

var myform = document.createElement("form");
myform.action = "myForm.aspx";
myform.method = "post";


product = document.createElement("input");
product.value = "value";
product.name = "name";

myform.appendChild(product);
myform.submit();

main();