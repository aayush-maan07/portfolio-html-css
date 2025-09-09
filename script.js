
    const sidebarBtn = document.querySelector(".sidebar-btn");
    const navLinks = document.querySelector(".navbar ul");

    sidebarBtn.addEventListener("click", () => {
        navLinks.style.display =
            navLinks.style.display === "flex" ? "none" : "flex";
        navLinks.style.flexDirection = "column"; 
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#1f242d";
        navLinks.style.padding = "15px";
        navLinks.style.borderRadius = "10px";
        navLinks.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    });

