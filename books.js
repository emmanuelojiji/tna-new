
    const scrollLeft = document.getElementsByClassName("scroll-left");
    const main = document.querySelector("#books-films-wrap");
    const scrollRight = document.getElementsByClassName("scroll-right");

    for (let index = 0; index < scrollRight.length; index++) {

    scrollRight[index].onclick = () => {
            main.style.transform = "translateX(-100%)"
            console.log("hey")

           /* main.style.height = "100vh";*/
    }

}


for (let index = 0; index < scrollLeft.length; index++) {
    scrollLeft[index].onclick = () => {
        main.style.transform = "translateX(0%)"
        main.style.height = "auto";
    }
}
    
