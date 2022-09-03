function analyticsEmbed() {
    return `
    <link href="./stylesheets/analytics.css" rel="stylesheet">
        <!-- cards -->
        <div class="cardbox">
            <div class="card">
                <div>
                    <div class="numbers">
                        1,504
                    </div>
                    <div class="cardname">Commits</div>
                </div>
                <div class="iconbox">
                    <i class='bx bx-git-commit'></i>
                </div>
            </div>
            <div class="card">
                <div>
                    <div class="numbers">
                        80
                    </div>
                    <div class="cardname">Pull Requests</div>
                </div>
                <div class="iconbox">
                    <i class='bx bx-git-pull-request'></i>
                </div>
            </div>
            <div class="card">
                <div>
                    <div class="numbers">
                        284
                    </div>
                    <div class="cardname">Stars</div>
                </div>
                <div class="iconbox">
                    <i class='bx bxs-star'></i>
                </div>
            </div><div class="card">
                <div>
                    <div class="numbers">
                        842
                    </div>
                    <div class="cardname">Forks</div>
                </div>
                <div class="iconbox">
                    <i class='bx bx-git-repo-forked'></i>
                </div>
            </div>
        </div>
        <!-- data-list -->
        <div class="details">
            <div class="recentorders">
                <div class="cardheader">
                    <h2>Recent Order</h2>
                    <a href="#" class="btn">View All</a>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Payment</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Star Refrigerator</td>
                            <td>$1200</td>
                            <td>Paid</td>
                            <td><span class="status delivered">Delivered</span></td>
                        </tr>
                        <tr>
                            <td>Star Tv</td>
                            <td>$2000</td>
                            <td>Paid</td>
                            <td><span class="status return">Return</span></td>
                        </tr>
                        <tr>
                            <td>Star SmartTV</td>
                            <td>$2200</td>
                            <td>Paid</td>
                            <td><span class="status pending">Pending</span></td>
                        </tr>
                        <tr>
                            <td>Star Fan</td>
                            <td>$800</td>
                            <td>Due</td>
                            <td><span class="status inprogress">In Progress</span></td>
                        </tr>
                        <tr>
                            <td>Star Washing Machine</td>
                            <td>$3200</td>
                            <td>Paid</td>
                            <td><span class="status delivered">Delivered</span></td>
                        </tr>
                        <tr>
                            <td>Star Iron</td>
                            <td>$200</td>
                            <td>Due</td>
                            <td><span class="status pending">Pending</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="recentcustomers">
                <div class="cardheader">
                    <h2>Recent Customers</h2>
                </div>
                <table>
                    <tr>
                        <td width="60px">
                            <div class="imgbx">
                                <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                                    alt="customer-pic">
                            </div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgbx">
                                <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                                    alt="customer-pic">
                            </div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgbx">
                                <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                                    alt="customer-pic">
                            </div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgbx">
                                <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                                    alt="customer-pic">
                            </div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgbx">
                                <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                                    alt="customer-pic">
                            </div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgbx">
                                <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                                    alt="customer-pic">
                            </div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgbx">
                                <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                                    alt="customer-pic">
                            </div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        `;
}

export {
    analyticsEmbed,
};