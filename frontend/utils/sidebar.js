function performPostLoading() {
    let arrow = document.getElementsByClassName("arrow");
    for (let index = 0; index < arrow.length; index++) {
        arrow[index].addEventListener("click", (e) => {
            let arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle("showMenu");
        });
    
        let sidebar = document.getElementsByClassName("sidebar")[0];
        let sidebar_btn = document.getElementsByClassName("bx-menu")[0];
        
        sidebar_btn.addEventListener("click", () => {
            sidebar.classList.toggle("close")
            sidebar_btn.classList.toggle("bx-menu-alt-left");
        });
    }
    let sidebar_items = document.getElementsByClassName("actv");
    for (let i = 0; i < sidebar_items.length; i++) {
        const item = sidebar_items[i];
        item.addEventListener("click", () => {
            document.getElementsByClassName("active")[0].classList.toggle("active");
            item.classList.toggle("active");
            document.getElementsByClassName("page-title")[0].innerText = item.getElementsByClassName("link-name")[0].innerText;
        });
    }
}

export {
    performPostLoading
};