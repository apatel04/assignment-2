const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const restaurant = [];

fetch(endpoint).then(blob => blob.json()).then(data => restaurant.push(...data));

function findMatches(wordToMatch, restaurant) {
    return restaurant.filter(establishments => {
        const regex = new RegExp(wordToMatch, 'gi');
        return establishments.name.match(regex) || establishments.category.match(regex)
    });
}
 