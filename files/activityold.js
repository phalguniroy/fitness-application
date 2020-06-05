var quotes=["You can do anything, but not everything.",
"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
"The richest man is not he who has the most, but he who needs the least.",
"You miss 100 percent of the shots you never take.",
"Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
"You must be the change you wish to see in the world.",
"When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.",
"To the man who only has a hammer, everything he encounters begins to look like a nail.",
"We are what we repeatedly do; excellence, then, is not an act but a habit.",
"A wise man gets more use from his enemies than a fool from his friends.",
"Do not seek to follow in the footsteps of the men of old; seek what they sought.",
"Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.",
"What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.",
"The real voyage of discovery consists not in seeking new lands but seeing with new eyes.",
"Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching",
"Even if you’re on the right track, you’ll get run over if you just sit there.",
"People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.",
"Before I got married I had six theories about bringing up children; now I have six children and no theories.",
"What the world needs is more geniuses with humility, there are so few of us left.",
"Always forgive your enemies; nothing annoys them so much.",
"Those who believe in telekinetics, raise my hand.",
"My pessimism extends to the point of even suspecting the sincerity of the pessimists.",
"Sometimes I worry about being a success in a mediocre world.",
"I quit therapy because my analyst was trying to help me behind my back.",
"If the lessons of history teach us anything it is that nobody learns the lessons that history teaches us.",
"When I was a boy I was told that anybody could become President. Now I’m beginning to believe it.",
"Laughing at our mistakes can lengthen our own life. Laughing at someone else’s can shorten it.",
"There are many who dare not kill themselves for fear of what the neighbors will say.",
"There’s so much comedy on television. Does that cause comedy in the streets?",
"All men are frauds. The only difference between them is that some admit it. I myself deny it.",
"I don’t mind what Congress does, as long as they don’t do it in the streets and frighten the horses.",
"I took a speed reading course and read ‘War and Peace’ in twenty minutes. It involves Russia.",
"The person who reads too much and uses his brain too little will fall into lazy habits of thinking.",
"Believe those who are seeking the truth. Doubt those who find it.",
"It is the mark of an educated mind to be able to entertain a thought without accepting it.",
"I’d rather live with a good question than a bad answer.",
"We learn something every day, and lots of times it’s that what we learned the day before was wrong.",
"I have made this letter longer than usual because I lack the time to make it shorter.",
"Don’t ever wrestle with a pig. You’ll both get dirty, but the pig will enjoy it.",
"An inventor is simply a fellow who doesn’t take his education too seriously.",
"Asking a working writer what he thinks about critics is like asking a lamppost how it feels about dogs.",
"Better to write for yourself and have no public, than to write for the public and have no self.",
"Never be afraid to laugh at yourself, after all, you could be missing out on the joke of the century.",
"I am patient with stupidity but not with those who are proud of it.",
"The cure for boredom is curiosity. There is no cure for curiosity.",
"Advice is what we ask for when we already know the answer but wish we didn’t.",
"Some people like my advice so much that they frame it upon the wall instead of using it.",
"The trouble with the rat race is that even if you win, you’re still a rat.",
"Never ascribe to malice, that which can be explained by incompetence.",
"When a person can no longer laugh at himself, it is time for others to laugh at him.",
"Those who believe in telekinetics, raise my hand.",
"My pessimism extends to the point of even suspecting the sincerity of the pessimists.",
"Sometimes I worry about being a success in a mediocre world.",
"I quit therapy because my analyst was trying to help me behind my back.",
"If the lessons of history teach us anything it is that nobody learns the lessons that history teaches us.",
"When I was a boy I was told that anybody could become President. Now I’m beginning to believe it.",
"Laughing at our mistakes can lengthen our own life. Laughing at someone else’s can shorten it.",
"There are many who dare not kill themselves for fear of what the neighbors will say.",
"There’s so much comedy on television. Does that cause comedy in the streets?",
"All men are frauds. The only difference between them is that some admit it. I myself deny it."];


var d = new Date();
document.getElementById("showQuotes").innerHTML = quotes[d.getSeconds()];

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByClassName("todo");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Create a "Add" button and append it to each list item
var myNodelist1 = document.getElementsByClassName("todo");
var j;
for (j = 0; j < myNodelist1.length; j++) {
  var span1 = document.createElement("SPAN");
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "ADD ME";
  btn.style = " border-radius: 12px; background-color: #76C54F; color: #46494c;";
  span1.className = "addme";
  span1.appendChild(btn);
  myNodelist[j].appendChild(span1);
}



//Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.className = "todo"
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("mytodolist").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var span1 = document.createElement("SPAN");
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "ADD ME";
  btn.style = " border-radius: 12px; background-color: #76C54F; color: #46494c;";
  span1.className = "addme";
  span1.appendChild(btn);
  li.appendChild(btn);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}