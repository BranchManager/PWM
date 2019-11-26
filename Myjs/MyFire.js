myFireInit = function(){
    var firebase = require('firebase/app')
    //require('firebase/firestore')
    require('firebase/database')
    require('firebase/auth')
    if(firebase.apps.length ===0){
        const firebaseConfig = {
            apiKey: "AIzaSyBdmw_pfSSCFKGg62jOAuSeXwxaKtPKqQo",
            authDomain: "branchmanager-32699.firebaseapp.com",
            databaseURL: "https://branchmanager-32699.firebaseio.com",
            projectId: "branchmanager-32699",
            storageBucket: "branchmanager-32699.appspot.com",
            messagingSenderId: "961498729983",
            appId: "1:961498729983:web:a99c9bb4ca2104abfeebca",
            measurementId: "G-GKECG4FGJW"
          };
            // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
        console.log("testing exports")
}
module.exports={myFireInit}