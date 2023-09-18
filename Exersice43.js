// Q#42
var MagicianNames=["Syed","Ahmed","Ali","Bangash"]
var GreatMagician=[...MagicianNames];
function show_magicians(array){
  for (var i = 0; i < array.length; ++i) {
   console.log(array[i]);}
}
function make_great(array){
  array.forEach((element, i) => {
    array[i] = element + " the Great";
  });
}
make_great(GreatMagician)
show_magicians(MagicianNames)
show_magicians(GreatMagician)