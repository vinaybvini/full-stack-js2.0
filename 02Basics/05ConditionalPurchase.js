// user is only allowed to make a purchase when he is:
// logged in 
// email verified
// cardInfo-Valid
// if any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

if (isLoggedIn) {
    console.log("logged in success");
    if (isEmailVerified){
        console.log("Email is verified");
        if (cardInfo){
            console.log("logged in success");
        }
    }
}
if (isLoggedIn && isEmailVerified && cardInfo){
    console.log("Allow user to make a purchase");
} else {
    console.log("You are NOT allowed to do that");
}