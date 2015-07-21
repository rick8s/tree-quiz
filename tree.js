/*1. Create a constructor function called Tree. It should take 4 arguments that correspond to attributes on the objects it creates. Two attributes should be 'name' and 'leaf shape'. Pick the other two.*/ 
function Tree(name, leafShape, barkColor, fullHeight) {
  this.name = name;
  this.leafShape = leafShape;
  this.barkColor = barkColor;
  this.fullHeight = fullHeight;
    
}

/*2. Create 4 tree objects using your Tree function.*/
var riverBirch = new Tree("River Birch", "teardrop", "white", "40 ft");

var maple = new Tree("Maple", "five lobed", "brown-grey", "60 ft");

var japaneseDwarf = new Tree("Japanese Dwarf Cherry", "teardrop", "reddish-brown", "5 ft");

var sweetGum = new Tree("Sweet Gum", "five lobed", "grey", "85 ft");



/*3. Put those objects into an array called tree_array.*/ 

var tree_array = [];
tree_array.push(riverBirch, maple, japaneseDwarf, sweetGum);



/*4. for each tree in tree_array, add a block element to the tree-holder div that displays the tree's attributes*/

/*for (var i = 0; i < tree_array.length; i++) {
	
var temp =  Tree[i];
   Tree[i] = "<div>" + temp + "</div>";
}*/

for (var i = 0; i < tree_array.length; i++) {
  document.getElementById("tree-holder").innerHTML += 
    "<div class='tree'><table>" +
    "<tr><th>Name:</th><td>" + tree_array[i].name + "</td></tr>" +
    "<tr><th>Leaf Shape:</th><td>" + tree_array[i].leafShape + "</td></tr>" +
    "<tr><th>Bark Color:</th><td>" + tree_array[i].barkColor + "</td></tr>" +
    "<tr><th>Full Height:</th><td>" + tree_array[i].fullHeight + "</td></tr>" +
    "</table></div>"
}


/*var treeDom = document.getElementById("tree-holder");*/

treeDom.innerHTML = JSON.stringify(tree_array);


