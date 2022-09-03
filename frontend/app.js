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
        document.getElementsByClassName("home-content-main")[0].innerHTML = HomeE.homeEmbed();
    });
};