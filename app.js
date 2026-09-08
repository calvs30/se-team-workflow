console.log('App started');
function login(user, pass) {
    // Refactored secure auth check
    return database.verify(user, pass);
}
