function sidebarEmbed() {
return `
<link href="./stylesheets/sidebar.css" rel="stylesheet">
<link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
<div class="sidebar close">
    <div class="logo-details">
        <i class='bx bx-code'></i>
        <span class="logo_name">LPUOSS</span>
    </div>
    <ul class="nav-links">
        <li class="actv active" id="home">
            <a href="#">
                <i class='bx bxs-home'></i>
                <span class="link-name">
                    Home
                </span>
            </a>
            <ul class="sub-menu blank">
                <li><a href="#" class="link-name">Home</a></li>
            </ul>
        </li>
        <li class="actv">
            <div class="icon-link">
                <a href="#">
                    <i class='bx bx-git-merge'></i>
                    <span class="link-name">
                        Join
                    </span>
                </a>
                <i class='bx bx-chevron-down arrow'></i>
            </div>
            <ul class="sub-menu">
                <li><a href="#" class="link-name">Join</a></li>
                <li><a href="#" id="login-component">Login</a></li>
                <li><a href="#" id="register-component">Register</a></li>
            </ul>
        </li>
        <li class="actv">
            <a href="#">
                <i class='bx bx-message-square-add'></i>
                <span class="link-name">
                    Create
                </span>
            </a>
            <ul class="sub-menu blank">
                <li><a href="#" class="link-name">Create</a></li>
            </ul>
        </li>

        <li class="actv">
            <a href="#">
                <i class='bx bx-search-alt-2'></i>
                <span class="link-name">
                    Search
                </span>
            </a>
            <ul class="sub-menu blank">
                <li><a href="#" class="link-name">Search</a></li>
            </ul>
        </li>

        <li class="actv" class="actv">
            <a href="#">
                <i class='bx bxs-user-detail'></i>
                <span class="link-name">
                    Members
                </span>
            </a>
            <ul class="sub-menu blank">
                <li><a href="#" class="link-name">Members</a></li>
            </ul>
        </li>
        <li class="actv">
            <a href="#">
                <i class='bx bx-error-alt'></i>
                <span class="link-name">
                    About
                </span>
            </a>
            <ul class="sub-menu blank">
                <li><a href="#" class="link-name">About</a></li>
            </ul>
        </li>

        <li>
            <div class="profile-details">
                <div class="profile-content">
                    <img src="https://www.jea.com/cdn/images/avatar/avatar-alt.svg" alt="profile picture">
                </div>
                <div class="name-job">
                    <div class="profile-name">
                        Guest
                    </div>
                    <div class="job">
                        Unregistered
                    </div>
                </div>
                <i class='bx bx-log-out'></i>
            </div>
        </li>
    </ul>
</div>
<section class="home-section">
    <div class="home-content">
        <i class='bx bx-menu'></i>
        <span class="text page-title">Home</span>
    </div>
    <div class="home-content-main"></div>
</section>
`;
}

export {
sidebarEmbed,
};