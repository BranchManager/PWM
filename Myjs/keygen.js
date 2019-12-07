var crypto = require('crypto')
var fs = require('fs')

const KEYSIZE = 32
const ALG = 'aes-256-cbc';


Account={
    title:"Netflix",
    user:"delrita@hotmail.com",
    username:"",
    password:"123456"
}

password = "123456"

text = JSON.stringify(Account)
console.log(typeof texr)


//var salt = crypto.randomBytes(16)
Write_file = function(psswrd){
    fs.writeFile("youknow.txt",psswrd,()=>{
        console.log('written')
    })
}

Create_key = function(user_password, salt=undefined){

    if(salt === undefined){
        var salt = crypto.randomBytes(16)
        //console.log('testvar salt = crypto.randomBytes(16)')
    }else{
        console.log("it wasnt created")
        var salt = Buffer.from(salt, 'hex')
    }
    console.log(typeof user_password)
    console.log(user_password)   
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

encrypt = function(key,Plaintext){

    console.log(key)
    console.log(Plaintext)
    
    iv = crypto.randomBytes(16)
    let cipher = crypto.createCipheriv(ALG, Buffer.from(key, 'hex'), iv);
    let encrypted = cipher.update(Plaintext);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    
}
decrypt = function(key, cipher_text){
    let iv = Buffer.from(cipher_text.iv, 'hex');
    let encryptedText = Buffer.from(cipher_text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
Read_file = function(){
    password = fs.readFileSync('youknow.txt','utf8')
    fs.unlinkSync('youknow.txt')
    console.log(password)
    return password
}



module.exports = {Create_key,encrypt,decrypt,Write_file,Read_file}


Key = Create_key(password)

console.log(Key)
 cipher = encrypt(Key['Master_key'],text)
 Plaintext = decrypt(Key['Master_key'],cipher)

 console.log(cipher['encryptedData'])
 console.log(Plaintext)

    