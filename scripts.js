console.log("JS is connected");

let profileDiv = document.querySelector("#profile");

fetch("https://api.github.com/users/imsreish", {
  method: "GET",
  headers: {},
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.avatar_url);
    console.log(data.name);
    console.log("Location:", data.location);
    console.log("GitHub URL:", data.html_url);
    console.log("GitHub username:", data.login);
    console.log("GitHub Repos:", data.public_repos);

    let nameDiv = document.createElement("p");
    nameDiv.classList.add("name");
    nameDiv.innerText = data.name;
    profileDiv.appendChild(nameDiv);
  });

fetch("https://api.github.com/users/imsreish/repos", {
  method: "GET",
  headers: {},
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("The repos contain:", data);
  });
