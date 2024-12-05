fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => {
    json.forEach(user => {
        $("#users-container").append(`
            <div id="user" user-id=${user.id}>
                <div id="name-info">
                    <h1 id="name">${user.name}</h1>
                    <h5 id="username">@${user.username}</h3>
                </div>
            </div>`)
    });
    
    console.log(json)
})