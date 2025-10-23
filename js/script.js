//Direct links to the page of the team selected, the variables take the value of the link to add them in the html as an id
const CLUB_LINKS = {
    rmd: "https://www.realmadrid.com/",
    psg: "https://en.psg.fr/",
    mutd: "https://www.manutd.com/",
    mcity: "https://www.mancity.com/",
    arsenal: "https://www.arsenal.com/",
    fcb: "https://www.fcbarcelona.com/",
    atm: "https://en.atleticodemadrid.com/",
    liverpool: "https://www.liverpoolfc.com/",
    marseille:"https://www.om.fr/en",
    lyon:"https://www.ol.fr/en",
    atm:"https://www.atleticodemadrid.com/"
};

//Checks the links and looks for an image in the page with the same id, when you pass the cursor over an image that has a valid id it will change the cursor to a pointer
//and when u click on them you will get redirected to the page of destination.
for (const [id, url] of Object.entries(CLUB_LINKS)) {
    const img = document.getElementById(id);
    if (img) {
        img.style.cursor = "pointer"; 
        img.addEventListener("click", () => {
            window.location.href = url;
        });
    }
}


