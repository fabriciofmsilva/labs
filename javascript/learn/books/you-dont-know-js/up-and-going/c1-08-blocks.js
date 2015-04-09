var amount = 99.99;

// a general block
{
    amount = amount * 2;
    console.log( amount );  // 199.98
}

var amount = 99.99;

// is amount big enough?
if (amount > 10) {          // <-- block attached to `if`
    amount = amount * 2;
    console.log( amount );  // 199.98
}
