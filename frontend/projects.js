window.addEventListener("load", () => {
    fetch("http://localhost:5001/projects")
    .then(response => response.json())
    .then(data => {
        console.log('Data Retrieved', data);
        
        // Als de data een array van project is
        const projectsContainer = document.getElementById("projects");
        if (data && Array.isArray(data)) {
            projectsContainer.innerHTML = ''; // Reset eerst de projects container
            data.forEach(project => {
                // Maak een nieuw project element aan
                const projectElement = document.createElement("div");
                projectElement.classList.add("project-item");
                
                const projectTitle = document.createElement("h3");
                projectTitle.innerText = project.naam;
                
                const projectDescription = document.createElement("p");
                projectDescription.innerText = project.projecttext;

                projectElement.appendChild(projectTitle);
                projectElement.appendChild(projectDescription);
                
                projectsContainer.appendChild(projectElement);
            });
        } else {
            projectsContainer.innerText = "Geen project gevonden.";
        }
    })
    .catch(error => {
        console.error("Fout bij ophalen van project data:", error);
        document.getElementById("projects").innerText = "Fout bij laden van projecten.";
    });
});
