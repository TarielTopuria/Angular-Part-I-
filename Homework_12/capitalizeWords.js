console.log(`Result: ${capitalizeWords('my name is tato')}`);

function capitalizeWords(words) {
    if(typeof(words) !== 'string'){
        return(`Error -> Input string as a parameter`);
    }
    return words.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');   
}
