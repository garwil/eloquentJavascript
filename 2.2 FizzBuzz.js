// FizzBuzz

var string="";

for (var i = 1; i <=100; i++) {
string = "";
  if (i%3 == 0) {
      string+="Fizz";
    }
  if (i%5 == 0) {
    string+="Buzz";
  	}
 console.log(string || i);
}
