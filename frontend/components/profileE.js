function profileEmbed() {
    return `
        <link rel="stylesheet" href="./stylesheets/profile.css">
        <div class="profile">
            <section class="user-background-container">
                <i class='bx bx-plus'></i>
                <p>Upload Background Image</p>
            </section>
            <div class="profile-pic-container">
                <img src="https://www.jea.com/cdn/images/avatar/avatar-alt.svg" alt="profile picture">
            </div>
            <div class="profile-details">
                <span class="display-name">
                    Display Name
                </span>
                <span class="username">
                    @username
                </span>
                <span class="department">
                    <i class='bx bxs-briefcase'></i>
                    Department
                </span>
                <span class="school">
                    <i class='bx bxs-school'></i>
                    Lovely Professional University
                </span>
                <span class="role">
                    <i class='bx bx-power-off'></i>
                    Member
                </span>
                <span class="follow">
                    <i class='bx bx-plus'></i>
                    follow
                </span>
            </div>
        </div>
        <div class="profile github-profile">
            <section class="user-background-container">
                <i class='bx bx-plus'></i>
                <p>Upload Background Image</p>
            </section>
            <div class="profile-pic-container">
                <img src="https://www.jea.com/cdn/images/avatar/avatar-alt.svg" alt="profile picture">
            </div>
            <div class="profile-details">
                <span class="display-name">
                    Display Name
                </span>
                <span class="username">
                    @username
                </span>
                <span class="bio">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <span class="department work">
                    <i class='bx bxs-briefcase'></i>Company
                </span>
                <span class="role repo-count">
                    <i class='bx bxs-book'></i>
                    Repo count
                </span>
                <span class="follow visit">
                    Visit
                    <i class='bx bxs-right-top-arrow-circle'></i>
                </span>
            </div>
        </div>
        <div class="profile orgs">
            <p>Organisations</p>
            <div class="orgs">
                <i></i><i></i><i></i>
            </div>
        </div>
        <div class="profile orgs stats">
            <p>Statistics</p>
            <div class="orgs">
                <i></i><i></i><i></i>
            </div>
        </div>
  `;
}

export { profileEmbed };