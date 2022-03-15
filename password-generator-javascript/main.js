


function generate() {
    let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@%$*&!~+';
    let password = "";
    for (let p = 0; p < 10; p++){
        let random = character[ Math.floor(Math.random() * 72)];
        password += random
    }
    
    let characterTwo = 'abcdefghijklmnopqrstuvwxyz0123456789#@%$*&!~+ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let passwordTwo = "";
    for (let i = 0; i < 10; i++){
        let randomTwo = characterTwo[ Math.floor(Math.random() * 72)];
        passwordTwo += randomTwo
    }
    
     let characterThree = '0123456789#@%$*&!~+abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let passwordThree = "";
    for (let i = 0; i < 10; i++){
        let randomThree = characterThree[ Math.floor(Math.random() * 72)];
        passwordThree += randomThree
    }
    
     let characterFour = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@%$*&!~+';
    let passwordFour = "";
    for (let i = 0; i < 10; i++){
        let randomFour = characterFour[ Math.floor(Math.random() * 72)];
        passwordFour += randomFour
    }
    let parent = document.getElementById("password-one").innerHTML = password;
  let parentTwo =  document.getElementById("password-two").innerHTML = passwordTwo;
   let parentThree =   document.getElementById("password-three").innerHTML = passwordThree;
   let parentFour =   document.getElementById("password-four").innerHTML = passwordFour;
}
 generate()
