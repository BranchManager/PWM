//var textEncoding = require('text-encoding')
Account={
    title:"Netflix",
    user:"delrita@hotmail.com",
    username:"",
    password:"123456"
}

password = "123456"

text = JSON.stringify(Account)
console.log(typeof texr)

var crypto = require('crypto')

const KEYSIZE = 32
const ALG = 'aes-256-cbc';

//var salt = crypto.randomBytes(16)
Key = Create_key(password)
cipher = encrypt(Key['Master_key'],text)
Plaintext = decrypt(Key['Master_key'],cipher)

console.log(cipher['encryptedData'])
console.log(Plaintext)
function Create_key(user_password, salt=undefined){

    if(salt === undefined){
        var salt = crypto.randomBytes(16)
        //console.log('testvar salt = crypto.randomBytes(16)')
    }
        
    let key = crypto.scryptSync(user_password,salt,KEYSIZE)
    
   
     console.log( key)
    // keys = key.toString('hex')
    // console.log(key)
    // console.log(keys)
    // console.log(Buffer.from(keys, 'hex'))


    keys_ingeridients = {Master_key: key.toString('hex'), Salt: salt.toString('hex')}

    // key_string = JSON.stringify(keys);
    // console.log(key_string)
    // key_obj = JSON.parse(key_string)

    // console.log(key_obj)

   return keys_ingeridients
}

function encrypt(key,Plaintext){

    console.log(key)
    console.log(Plaintext)
    
    iv = crypto.randomBytes(16)
    let cipher = crypto.createCipheriv(ALG, Buffer.from(key, 'hex'), iv);
    let encrypted = cipher.update(Plaintext);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    
}
function decrypt(key, cipher_text){
    let iv = Buffer.from(cipher_text.iv, 'hex');
    let encryptedText = Buffer.from(cipher_text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();

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

