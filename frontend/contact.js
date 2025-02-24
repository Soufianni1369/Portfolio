fetch("http://localhost:5001/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      reviewtext: "Dit is een geweldige review!"
    })
  })
    .then(response => response.json())
    .then(data => console.log("✅ Succes:", data))
    .catch(error => console.error("❌ Fout:", error));
  