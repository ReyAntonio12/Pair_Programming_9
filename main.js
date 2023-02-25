const token = "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";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const userInfo = document.getElementById("user-info");

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    const username = searchInput.value;
    getUserInfo(username);
  });

function getUserInfo(username){
    const url= "https://api.github.com";

        fetch(url)
        .then(response => response.json())
        .then(data => {
            const user = {
            name: data.name,
            login: data.login,
            avatar_url: data.avatar_url,
            bio: data.bio,
            followers: data.followers,
            following: data.following,
            public_repos: data.public_repos,
            html_url: data.html_url,
        };
        displayUserInfo(user);
        })
    .catch(error => {
      console.error(error);
      userInfo.innerHTML = "We cannot find the user.";
    });
}

function displayUserInfo(user) {
    const userHtml = `
      <h2>${user.name} (${user.login})</h2>
      <img src="${user.avatar_url}" alt="${user.login}"/>
      <p>${user.bio}</p>
      <ul>
        <li>Seguidores: ${user.followers}</li>
        <li>Siguiendo: ${user.following}</li>
        <li>Repositorios públicos: ${user.public_repos}</li>
      </ul>
      <a href="${user.html_url}" target="_blank">Ver perfil en GitHub</a>
    `;
    userInfo.innerHTML = userHtml;
  }