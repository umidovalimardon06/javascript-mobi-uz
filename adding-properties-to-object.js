let user = {};

/* Using 'dot': */
user.name = 'Alimardon';
user.age = 18;
/* Using square brackets: */
user["email"] = "alice@example.com";
user["phoneNumber"] = "77-023-23-10";
user["addressLineOne"] = "Street-10, California";
/* Using Objects class's method: */
Object.assign(user, {city : 'New York', country : 'USA'})

console.log(user);