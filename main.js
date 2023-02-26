const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const userInfo = document.getElementById("user-info");
const userNameChange = document.getElementById("username-Change");
const imageChange = document.getElementById("images-change");
const idChange = document.getElementById("userID-change");
const bioChange = document.getElementById("userBio-change");
const dateChange = document.getElementById("dataLogin-change");
const reposChange = document.getElementById("repos-change")
const followersChange = document.getElementById("followers-change");
const followingChange = document.getElementById("following-change");
const locationChange = document.getElementById("location-change");
const twitterChange = document.getElementById("twitter-change");
const pageChange = document.getElementById("page-change");

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    const username = searchInput.value;
    getUserInfo(username);
  });

function getUserInfo(username){
    const url= "https://api.github.com/users/" + username;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            const user = {
            name: data.name,
            login: data.login,
            avatar_url: data.avatar_url,
            bio: data.bio,
            created_at: data.created,
            followers: data.followers,
            following: data.following,
            public_repos: data.public_repos,
            html_url: data.blog,
            location: data.location,
            twitter: data.twitter_username,
        };
        console.log(user)
        displayUserInfoDos(user);
        displayUserInfoTres(user);
        displayUserInfoCuatro(user);
        displayUserInfoCinco(user);
        displayUserInfoSeis(user);
        displayUserInfoSiete(user);
        displayUserInfoOcho(user);
        displayUserInfoNueve(user);
        displayUserInfoDiez(user);
        displayUserInfoOnce(user);
        displayUserInfoDoce(user);
        })
    .catch(error => {
      console.error(error);
      userInfo.innerHTML = "We cannot find the user.";
    });
}

function displayUserInfo(user) {
  // const userHtml = `
  //   <h2>${user.name} (${user.login})</h2>
  //   <img src="${user.avatar_url}" alt="${user.login}"/>
  //   <p>${user.bio}</p>
  //   <p>${data.login}</p>
  //   <ul>
  //     <li>Seguidores: ${user.followers}</li>
  //     <li>Siguiendo: ${user.following}</li>
  //     <li>Repositorios públicos: ${user.public_repos}</li>
  //   </ul>
  //   <a href="${user.html_url}" target="_blank">Ver perfil en GitHub</a>
  //   `;
  // userInfo.innerHTML = userHtml;
}

function displayUserInfoDos(user){
  const userHtmlName = `
  <p>${user.name}</p>`;
  userNameChange.innerHTML = userHtmlName;
}

function displayUserInfoTres(user){
  imageChange.setAttribute("src", `${user.avatar_url}` )
}

function displayUserInfoCuatro(user){
  const userHtmlID = `
  <p>${user.login}</p> 
  `
  idChange.innerHTML = userHtmlID;
}

function displayUserInfoCinco(user){
  const userHtmlBio = `
  <p>${user.bio}</p> 
  `
  if ( userHtmlBio == ""){
    bioChange.innerHTML= "User has no bio"
  }
  else{
    bioChange.innerHTML = userHtmlBio;
  }
}

function displayUserInfoSeis(user){
  const userHtmlDate = `
  <p>${user.created_at}</p> 
  `
  dateChange.innerHTML ="Date: " + userHtmlDate;
}

function displayUserInfoSiete(user){
  const userHtmlRepos = `
  <p>${user.public_repos}</p> 
  `
  reposChange.innerHTML = userHtmlRepos;
}

function displayUserInfoOcho(user){
  const userHtmlFollow = `
  <p>${user.followers}</p> 
  `
  followersChange.innerHTML = userHtmlFollow;
}

function displayUserInfoNueve(user){
  const userHtmlFollowing = `
  <p>${user.following}</p> 
  `
  followingChange.innerHTML = userHtmlFollowing;
}
function displayUserInfoDiez(user){
  const userHtmlLocation = `
  <p>${user.location}</p> 
  `
  locationChange.innerHTML = userHtmlLocation;
}

function displayUserInfoOnce(user){
  const userHtmlTwitter = `
  <p>${user.twitter}</p> 
  `

  if (userHtmlTwitter == null){
    twitterChange.innerHTML = "No twitter added"
  }
  else{
    twitterChange.innerHTML = userHtmlTwitter;
  }

}

function displayUserInfoDoce(user){
  const userHtmlPage = `
  <p>${user.html_url}</p> 
  `
  pageChange.innerHTML = userHtmlPage;
}