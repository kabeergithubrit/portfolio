// function toggleMenu(){
//     const menu=document.querySelector(".menu-links");
//     const icon=document.querySelector(".hamburger-icon");
//     console.log("Mnenu:",menu);
//     console.log("Icon:",icon)
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");

// }



function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu && icon) {
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    } else {
        console.error("Menu or Icon not found. Check your HTML structure.");
    }
}



function downloadResume(){
  
        const link = document.createElement("a");
        link.href = "kabeerinterview.pdf";
        link.download = "Kabeer Resume"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
}

