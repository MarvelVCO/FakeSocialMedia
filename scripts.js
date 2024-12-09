fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => {
    json.forEach(user => {
        $("#users-container").append(`
            <div id="user" user-id=${user.id}>
                <div id="name-info">
                    <h3 id="name">${user.name}</h1>
                    <a id="username" href="user/${user.username}">@${user.username}</a>
                </div>
            </div>`)
    });
    
    console.log(json)
})