import * as AnalyticsE from "./components/analyticsE.js";
import * as SidebarE from "./components/sidebarE.js";
import * as LoginE from "./components/loginE.js"
import * as Sidebar from "./utils/sidebar.js";
import * as ProfileE from "./components/profileE.js"
import * as HomeE from "./components/homeE.js"



window.onload = () => {
    // embed sidebar
    document.getElementsByTagName("body")[0].innerHTML = SidebarE.sidebarEmbed();
    // enabling sidbar aftereffects
    Sidebar.performPostLoading();
    document.getElementById("home").addEventListener("click", () => {
        const url = new URL("http://127.0.0.1:3000/article-previews?sortby=popular");
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                document.getElementsByClassName("home-content-main")[0].innerHTML = HomeE.homeEmbed(data);
            });
    });
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }
    if (localStorage["lact"] == undefined || localStorage["act"] == undefined) {
        return;
    }
    let bodyContent = JSON.stringify({
        "lact": localStorage["lact"],
        "act": localStorage["act"],
        "tz": 330
    });
    var url = new URL("http://127.0.0.1:3000/loginvat");

    let response = fetch(url, {
        method: "POST",
        body: bodyContent,
        headers: headersList
    }).then(resp => resp.json()).then(json => {
        localStorage["lact"] = json.lact;
        localStorage["act"] = json.act;
        document.getElementsByClassName("profile-name")[0].innerText = json.full_name;
        document.getElementsByClassName("job")[0].innerText = json.username;
        document.getElementsByClassName("profile-content")[0].innerHTML = `<img src="${json.user_image}"
            alt="profile picture">`
        alert("logged in successfully");
    });
    

    document.getElementById("login-component").addEventListener("click", () => {
        // embed login component
        document.getElementsByClassName("home-content-main")[0].innerHTML = LoginE.loginEmbed("login");
    });

    document.getElementById("register-component").addEventListener("click", () => {
        // embed login component
        document.getElementsByClassName("home-content-main")[0].innerHTML = LoginE.loginEmbed("register");
    });
    document.getElementsByClassName("profile-details")[0].addEventListener("click", () => {
        document.getElementsByClassName("home-content-main")[0].innerHTML = ProfileE.profileEmbed();
    });
    document.getElementById("home").addEventListener("click", () => {
        const url = new URL("http://127.0.0.1:3000/article-previews?sortby=latest");
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                document.getElementsByClassName("home-content-main")[0].innerHTML = HomeE.homeEmbed(data);
            });
    });
    document.getElementById("home").click();
    window.change = async (e) => {
        const url = new URL("http://127.0.0.1:3000/article-previews?sortby="+e.value);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(1)
                document.getElementsByClassName("home-content-main")[0].innerHTML = HomeE.homeEmbed(data);
            });
    };
    window.like = async (el) => {
        const url = new URL("http://127.0.0.1:3000/like-article/" + el.parentElement.parentElement.id);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                window.location.reload(true);
            });
    };
    var el = document.getElementById("searchbox");
    el.addEventListener("input", () => {
        const url = new URL("http://127.0.0.1:3000/search/" + el.value);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                document.getElementsByClassName("home-content-main")[0].innerHTML = HomeE.homeEmbed(data);
            });
    });
    window.logout = () => {
        localStorage["lact"] = null;
        localStorage["act"] = null;
        window.location.reload(true);
    }
    window.login_ = () => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
        const user = document.getElementById("userid").value;
        const pass = document.getElementById("passid").value;
        let bodyContent = JSON.stringify({
            "username": user,
            "password": pass,
            "tz": 330
        });
        var url = new URL("http://127.0.0.1:3000/login");

        fetch(url, {
            method: "POST",
            body: bodyContent,
            headers: headersList
        }).then(resp => resp.json()).then(async json => {
            if (json.statusCode >= 400) {       
                alert("Wrong username/password");
            }
            else {
                localStorage["lact"] = json.lact;
                localStorage["act"] = json.act;
                document.getElementsByClassName("profile-name")[0].innerText = json.full_name;
                document.getElementsByClassName("job")[0].innerText = json.username;
                document.getElementsByClassName("profile-content")[0].innerHTML = `<img src="${json.user_image}" alt="profile picture">`
                alert("logged in successfully");
            }
        });
    }
};
