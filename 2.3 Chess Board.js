//  Chess Board

var size=8;
var string="";
  for (var i = 0; i<size; i++) {
   for (var j = 0; j<size; j++) {
 	string += (i+j)%2==0 ? " " : "#";
   }
  string+="\n";
  }
console.log(string);
