// Q#42
var MagicianNames=["Syed","Ahmed","Ali","Bangash"]
function show_magicians(array){
  for (var i = 0; i < array.length; ++i) {
   console.log(array[i]);}
}
function make_great(array){
  array.forEach((element, i) => {
    array[i] = element + " the Great";
  });
}
make_great(MagicianNames)
show_magicians(MagicianNames)