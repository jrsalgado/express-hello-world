
const SWAPI ={
    "user_url": "https://api.github.com/users/",
  }

async function fetchPeople(user){
    const response = await fetch(`${SWAPI.user_url}${user}`);

    console.log(response.json())
    
}

fetchPeople('axelmonroyx')

