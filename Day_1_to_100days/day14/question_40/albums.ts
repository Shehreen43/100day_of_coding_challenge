//                     QUESTION:40
/*
 Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.

Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.
*/
//define interface 
interface Album{
    artist:string,
    title:string,
    tracks?:number | undefined
};
//define function
function make_album(artist:string, title:string, tracks?:number|undefined ):Album {
    const album:Album ={
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
};

// Making three dictionaries representing different albums
console.log(make_album('Atif Aslam', 'Meri Kahani'));
console.log(make_album('Rahat Fateh Ali Khan', 'Mere Dil Mein Ishq E Rasool'));
console.log(make_album('Ali Zafar', ' Quaid E Azam Zindabad', 4));
