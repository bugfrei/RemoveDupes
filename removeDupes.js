function removeDupes() {
    return this.filter( (item, index) => this.indexOf(item) === index);
}

Array.prototype.removeDupes = removeDupes;

/* Samples
var ar = [ 100, 200, 300, 200, 100, 400, 200, 500, 300, 100 ];
ar = ar.removeDupes();
*/

