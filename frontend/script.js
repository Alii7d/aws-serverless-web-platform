let visitorid = localStorage.getItem("visitorid");

if (!visitorid) {
    visitorid = crypto.randomUUID();
    localStorage.setItem("visitorid", visitorid);
}



function sayHello() {
    alert("Hello :)");
}

async function getVisitorCount() {
    const response = await fetch(
        "https://a9jxr6f5z0.execute-api.us-east-1.amazonaws.com/count",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                visitorId: visitorid
            })
        }
    );

    const data = await response.json();

    document.getElementById("visitor-count").textContent = data.visits;
}

getVisitorCount();



const form = document.getElementById("contact-form");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = await fetch(
        "https://a9jxr6f5z0.execute-api.us-east-1.amazonaws.com/contact",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        }
    );

    const data = await response.json();

const status = document.getElementById("contact-status");

status.textContent = data.message;

if (response.ok) {
    status.style.color = "#3fb950";
} else {
    status.style.color = "#ff6b6b";
}

});