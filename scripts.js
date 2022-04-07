console.log("JS is connected");

let profileDiv = document.querySelector("#profile");
let repoDiv = document.querySelector("#repos");

fetch("https://api.github.com/users/imsreish", {
  method: "GET",
  headers: {},
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.avatar_url);
    console.log(data.name);
    console.log("Location:", data.location);
    console.log("GitHub URL:", data.html_url);
    console.log("GitHub username:", data.login);
    console.log("GitHub Repos:", data.public_repos);

    let aviDisplay = document.createElement("img");
    aviDisplay.classList.add("avi");
    aviDisplay.src = data.avatar_url;
    profileDiv.appendChild(aviDisplay);

    let nameDisplay = document.createElement("h1");
    nameDisplay.classList.add("name");
    nameDisplay.innerText = data.name;
    profileDiv.appendChild(nameDisplay);

    // let isHireable = document.createElement("h4");
    // isHireable.classList.add("hireable");
    // isHireable.innerText = data.hireable;
    // profileDiv.appendChild(isHireable);

    let usernameDisplay = document.createElement("a");
    usernameDisplay.classList.add("username");
    usernameDisplay.innerText = data.login;
    usernameDisplay.href = "https://github.com/" + data.login;
    profileDiv.appendChild(usernameDisplay);

    let locationDisplay = document.createElement("h2");
    locationDisplay.classList.add("location");
    locationDisplay.innerText = data.location;
    profileDiv.appendChild(locationDisplay);

    let twitterDisplay = document.createElement("a");
    twitterDisplay.classList.add("twitter");
    twitterDisplay.innerText = `@${data.twitter_username}`;
    twitterDisplay.href = "https://twitter.com/" + data.twitter_username;
    profileDiv.appendChild(twitterDisplay);

    let bioDisplay = document.createElement("p");
    bioDisplay.classList.add("bio");
    bioDisplay.innerText = data.bio;
    profileDiv.appendChild(bioDisplay);
  });

fetch("https://api.github.com/users/imsreish/repos", {
  method: "GET",
  headers: {},
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const publicRepos = data;

    let keys = Object.keys(data);
    for (let key of keys) {
      data[0][key];
    }
    console.log(data[0]);

    for (let publicRepo of publicRepos) {
      console.log(publicRepo);
      let oneRepo = document.createElement("div");
      oneRepo.classList.add("repo");
      oneRepo.innerText = publicRepos;
      repoDiv.appendChild(oneRepo);
    }
  });
