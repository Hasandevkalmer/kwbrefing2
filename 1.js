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

  for (let i = 0; i < num.length; i++) {
    
    const dicNumber = '1234567890'
    // console.log(dicNumber[i], 'angka');
    num = dicNumber || 'Error';
  
    for (let j = 0; j < dicNumber.length; j++) {
      if (dicNumber[j] === num[i]) {
        console.log(num[i], 'merupakan palindrome');
        break;
        
      }
    }
  
    for (let j = 0; j < dicNumber.length; j++) {
      if (dicNumber[j] === num[i]) {
        console.log(num[i], 'bukan merupakan palindrome');
        break;
        
      }
    }
  
  
  }
}
console.log(checkPalindrome(555));




  //  your code here
  // for( var i = num.length; i > 0; i-- )
  

  //   {
  //     const dicNumber = '1234567890'
  //       if( num[i] = num.charAt(num.length)-1 )
  //       {
  //           console.log('the Word is palindrome.');
  //       }else{
  //           console.log('the Word is not palindrome!');
  //       }
  //   }



 

//  console.log(checkPalindrome());

 

