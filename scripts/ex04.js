/*function soma (n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(100))*/

function fatorial(n) {
    let fat = 1
    for ( c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(10))
/*

5! = 5 x 4 x 3 x 2 x 1

*/