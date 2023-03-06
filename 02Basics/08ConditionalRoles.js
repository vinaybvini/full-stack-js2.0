// Ceate an application with following roles:
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets accesss to consume content

var user = "admin";
switch (user) {
    case "admin":
        console.log("u get full access");
         //break;
         case "admin":
            console.log("gets access to create/delete course");
             //break;
             case "testprep":
            console.log("gets access to create/delete tests");
             //break;
             case "Subadmin":
            console.log("gets access to create/delete course");
             //break;
             case "User":
            console.log("gets accesss to consume content");
             //break;
             

    default:
        console.log("Trial User");
        break;
}
