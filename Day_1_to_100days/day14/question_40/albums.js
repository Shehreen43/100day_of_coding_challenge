;
//define function
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
;
// Making three dictionaries representing different albums
console.log(make_album('Atif Aslam', 'Meri Kahani'));
console.log(make_album('Rahat Fateh Ali Khan', 'Mere Dil Mein Ishq E Rasool'));
console.log(make_album('Ali Zafar', ' Quaid E Azam Zindabad', 4));
export {};
