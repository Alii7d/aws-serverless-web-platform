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