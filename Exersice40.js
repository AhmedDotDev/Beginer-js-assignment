// Q#40
function make_album(ArtistName,AlbumTittle,NoOfTracks)
{ if(NoOfTracks === undefined){
   return console.log({"ArtistName":ArtistName , "AlbumTittle":AlbumTittle})}
   else{
    return console.log({"ArtistName":ArtistName , "AlbumTittle":AlbumTittle , "NoOfTracks":NoOfTracks})
   }
}

make_album("Atif Aslam" , "Tera Hone Laga Ho")
make_album("Ali Zafar" , "Mene Tujhe Dekha")
make_album("Asim Azhar" , "Habibi" , 50)