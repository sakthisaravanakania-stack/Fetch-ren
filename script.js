const container = document.getElementById("usercontainer");
const loader = document.getElementById("loader");

async function getUsers() {
    try {
        loader.style.display = "block";
        const respone = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await respone.json();
        console.log(users);
        displayDetails(users);
    } catch (error) {
        container.innerHTML = "<p>Data Disconnected...</p>"
        console.log(error);
    }
    finally {
        loader.style.display = "none";
    }
}

getUsers();

function displayDetails(users){
    users.forEach((user) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<h3>${user.name}</h3>
        <p><strong>Email:</strong>${user.email}</p>
        <p><strong>Phone:</strong>${user.phone}</p>
        <p><strong>City:</strong>${user.address.city}</p>
        <p><strong>Company:</strong>${user.company.name}</p>`
        console.log(user);
        
        container.appendChild(card);
    })
}