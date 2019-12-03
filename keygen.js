var textEncoding = require('text-encoding')
Account={
    title:"Netflix",
    user:"delrita@hotmail.com",
    username:"",
    password:"123456"
}

text = JSON.stringify(Account)
console.log(typeof texr)

var crypto = require('crypto')

const KEYSIZE = 32
const ALG = 'aes-256-cbc';

Create_key(Account['password'])

function Create_key(user_password){

    var salt = crypto.randomBytes(16)
    let key = crypto.scryptSync(user_password,salt2,KEYSIZE)
   

   return key
}

function encrypt(key,Plaintext){
    
}

    

    // console.log(key)
    // console.log(new Uint8Array(key))
    // str = key.toString('utf8')
    // console.log(str)
    // console.log('this the key')
    // console.log(Buffer.from(str,'utf8'))

    // salt_buffer = Buffer.from(salt)
    // Key_buffer = Buffer.from(key)

    // salty_key = Buffer.concat([Key_buffer,salt_buffer])

    


}





// const key = crypto.scryptSync(password, 'salt', 32);
// console.log(key)

// const iv = Buffer.alloc(16, 0); // Initialization vector.

// const cipher = crypto.createCipheriv(algorithm, key, iv);
// console.log(cipher)




// var scrypt = require("scrypt-js")

// pssd = Buffer.from("mystring".normalize('NFKC'),'utf8')
// salt = Buffer.from("mysalt".normalize('NFKC'),'utf8')

// const N = 1024, r = 8, p = 1;
// const dkLen = 32;

// const key = scrypt.syncScrypt(pssd, salt, N, r, p, dkLen);
// console.log(key)
// console.log(key.length)

