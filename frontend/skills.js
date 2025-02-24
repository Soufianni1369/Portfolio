window.addEventListener("load", () => {
    fetch("http://localhost:5001/skills")
        .then(response => response.json())
        .then(data => {
            console.log('Data Retrieved', data);
            
            // Als de data een array van skills is
            const skillsContainer = document.getElementById("skills");
            if (data && Array.isArray(data)) {
                skillsContainer.innerHTML = ''; // Reset eerst de skills container
                data.forEach(skill => {
                    // Maak een nieuw skill element aan
                    const skillElement = document.createElement("div");
                    skillElement.classList.add("skill-item");

                    const skillName = document.createElement("h4");
                    skillName.innerText = `Skill: ${skill.naam}`;
                    
                    const skillLevel = document.createElement("p");
                    skillLevel.innerText = `Level: ${skill.level}`;
                    
                    const skillCategory = document.createElement("p");
                    skillCategory.innerText = `Category: ${skill.category}`;

                    skillElement.appendChild(skillName);
                    skillElement.appendChild(skillLevel);
                    skillElement.appendChild(skillCategory);
                    
                    skillsContainer.appendChild(skillElement);
                });
            } else {
                skillsContainer.innerText = "Geen skills gevonden.";
            }
        })
        .catch(error => {
            console.error("Fout bij ophalen van skill data:", error);
            document.getElementById("skills").innerText = "Fout bij laden van skills.";
        });
});
