const sum = (a, b) => {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('a and b must be numbers');
    }
    return a + b;
}