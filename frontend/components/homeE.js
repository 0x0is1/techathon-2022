function articleEmbed(rawData) {
    data = `
        <div class="container article" id="${rawData.guid}">
            <div class="ar-title">
                ${decodeURIComponent(rawData.title)}
            </div>
            <div class="ar-metadata">
                <div class="post-author">Author Name: ${decodeURIComponent(rawData.author)}</div>
                <div class="post-date">Date: ${rawData.postDate}</div>
            </div>
            <div class="ar-content">
                ${decodeURIComponent(rawData.content)}
            </div>
            <div class="ar-buttons">
                <div class="ar-like corner-but" id="arlike" onclick="window.like(this)">
                    <i class='bx bx-like'></i>(${rawData.likes})
                </div>
                <div class="ar-share corner-but" id="arshare">
                    <i class='bx bx-share'></i>Share
                </div>
            </div>
        </div>
    `;
    return `
        <link rel="stylesheet" href="./stylesheets/login.css">
        <link rel="stylesheet" href="./stylesheets/home.css">
        <div class="containerss">
            ${data}
        </div>
    `;
    }
function homeEmbed(rawData) {
    var data = ``;
    for(let i of rawData){
    data += `
        <div class="container article" id="${i.guid}">
            <div class="ar-title">
                ${decodeURIComponent(i.title.substr(0, 50))}
            </div>
            <div class="ar-metadata">
                <div class="post-author">Author Name: ${decodeURIComponent(i.author)}</div>
                <div class="post-date">Date: ${i.postDate}</div>
            </div>
            <div class="ar-content">
                ${decodeURIComponent(i.content.substr(0, 500))}
            </div>
            <div class="ar-buttons">
                <div class="ar-like corner-but" id="arlike" onclick="window.like(this)">
                    <i class='bx bx-like'></i>(${i.likes})
                </div>
                <div class="ar-share corner-but" id="arshare">
                    <i class='bx bx-share'></i>Share
                </div>
            </div>
        </div>
    `;
    }
    return `
    <link rel="stylesheet" href="./stylesheets/login.css">
    <link rel="stylesheet" href="./stylesheets/home.css">
    <div class="containerss">
        ${data}
    </div>
`;
}

export { homeEmbed, articleEmbed };