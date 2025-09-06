const { PublicKey } = require('@solana/web3.js');

const [pda, bump] = PublicKey.findProgramAddressSync(
    [
        Buffer.from("balances"),
        Buffer.from("PENGU"),
        new PublicKey("CtyuPd1SGqXbhQ2ocBDL5aC9Phs8aAsrjUjWWRkWUIrt").toBuffer(),
    ],
    new PublicKey("2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv")
);

console.log("PDA:", pda.toBase58());
console.log("Bump:", bump);