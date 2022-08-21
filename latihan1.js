// // Buatlah Program Untuk Menjalankan Skema Berikut

// /**
//  * Function [checkPalindrome] menerima satu buah parameter [num].
//  * Function ini bertujuan untuk mem-validasi apakah parameter yang di input merupakan bilangan palindrome (dapat dibaca sama secara terbalik).
//  * eg. 555, 55, dan 5 merupakan palindrome.
//  * eg. 512 bukan merupakan palindrome karena menjadi 215 jika dibaca secara terbalik.
//  *
//  * Case:
//  * 1. Jika parameter yang diterima bersifat falsy, maka mengembalikan ["Error"].
//  * 2. Jika parameter yang diterima bukan bertipe number, maka mengembalikan ["Error"].
//  * 3. Jika parameter yang diterima merupakan sebuah bilangan palindrome, maka mengembalikan [true].
//  * 4. Jika parameter yang diterima bukan merupakan sebuah bilangan palindrome, maka mengembalikan [false].
//  */

function checkPalindrome(num) {
    if(!num || typeof num !=='number'){
        console.log('Error');
    }
const str = String(num);
let reverseStr = ''
//case
// fauziah
//index=0123456
//length=7

for(let i = str.length -1; i >= 0; i--){
    reverseStr += str[i]; //menambahkan karakter jadi terbalik
    
} 
console.log(str);
console.log(reverseStr);
// }
    if(str===reverseStr){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkPalindrome(555));


