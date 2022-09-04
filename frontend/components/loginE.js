function loginEmbed(signType) {
    return `
        <link rel="stylesheet" href="./stylesheets/login.css">
        <div class="container disclaimer">
            <h3>Disclaimer</h3>
            <span>Credentials Harvesting</span>
            <label>
                GODSPEED do not support any kind of credential theft.
                Neither our API does such thing. GODSPEED login API completely
                based on take-and-pass concept. In which it forwards credentials
                received from user to LPU-Live API and recieves user data and
                direcly forwards it to user computer where data is intepreted.
            </label>
            <span>Support by university</span>
            <label>
                We have not be yet registered or acknowledged by the
                University but surely after the summer vacation we will try
                to present in front of university authority to consider it.
            </label>
            <span>Data Authenticity</span>
            <label>
                We are proud to say that the data we are getting from sources are
                cent percent authetic and are either provided by LPU Live or by Github and other
                verfied sources.
            </label>
        </div>
        <div class="container">
            <form onsubmit="return false">
                <h3>${signType}</h3>
                <div class="inputBox">
                    <span>Username</span>
                    <div class="box">
                        <div class="icon">
                            <i class='bx bxs-user'></i>
                        </div>
                        <input placeholder="Registration No." type="number" name="username" id="userid">
                    </div>
                </div>
                <div class="inputBox">
                    <span>Password</span>
                    <div class="box">
                        <div class="icon">
                            <i class='bx bxs-lock'></i>
                        </div>
                        <input placeholder="UMS Password" type="password" name="username" id="passid">
                    </div>
                </div>
                <label>
                    <input type="checkbox" name="Remember" id="remember">
                    Remember me
                </label>
                <div class="inputBox">
                    <div class="box">
                        <span onclick="login_(this)">
                        <input type="submit" value="${signType}" id="loginbtn disabled">
                        </span>
                    </div>
                </div>
                <a href="#" class="forgot"">Forgot Password</a>
            </form>
        </div>
    `;
}

export {
    loginEmbed,
}