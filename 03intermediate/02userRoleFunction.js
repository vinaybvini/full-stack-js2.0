/*
Define a funtion that can answer the role of user.
A user can be on following roles:
admin - with all access.
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user,

input: getUserRole(name, role)
*/
var getUserRole = function (name, role) {

    switch (role) {
        case "admin":
        return `${name} is admin with all access`;
        case "subadmin":
        return `${name} is sub-admin with access to create/delete courses`;
        case "testprep":
        return `${name} is a test prep with access to create/delete tests`;
        case "user":
        return `${name} consume all content`;
        default:
        return `${name} trial user`;
    
}
}
console.log(getUserRole("vinay", "testprep"));
var getRole = getUserRole("sammy","user");

console.log(getRole);

