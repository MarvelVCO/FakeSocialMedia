fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => {
    json.forEach(user => {
        $("#users-container").append(`
            <div id="user" user-id=${user.id}>
                <div id="name-info">
                    <h3 id="name">${user.name}</h3>
                    <button id="user-link" onclick="openUser(${user.id})">@${user.username}</button>
                </div>
            </div>`)
    });
})

async function openUser(userId) {
    $("#selected-user-container").html(`        
        <div id="selected-user-container">
            <div id="selected-user-posts"></div>
        </div>`)
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(json => {
         $("#selected-user-info").append(`
             <div id="selected-user">
                <h1 id="selected-name">${json.name}</h1>
                <h3 id="selected-username">@${json.username}</h3>
             </div>`)
    });
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(json => {
        json.filter(a => a.userId == userId).forEach(post => 
            $("#selected-user-posts")
            .append(`<h1 id="selected-post-title">${post.title}</h1>
                   <h3 id="selected-post-body">@${post.body}</h3>
                `)
    )});
}
