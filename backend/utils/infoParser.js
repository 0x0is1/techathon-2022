function parseLlive(data) {
    return {
        username: data.user_info.username,
        full_name: data.user_info.full_name.split(" : ")[0],
        access_token: data.user_info.access_token,
        lpu_access_token: data.user_info.lpu_access_token,
        user_image: data.user_info.user_image,
        original_image: data.user_info.original_image,
        timezone: data.user_info.timezone,
        // department: data.workspaces_info[0].department | null
    };
}

function parseGHP(data) {
    return {
        username: data.login,
        name: data.name,
        avatar: data.avatar_url,
        profile_url: data.html_url,
        bio: data.bio,
        company: data.company,
        repos_count: data.public_repos
    };
}

async function parseRepo(data, api, base) {
    var star_count = 0, fork_count = 0, commits_count = 0;
    for (let i = 0; i < data.length; i++) {
        star_count += data[i].stargazers_count;
        fork_count += data[i].forks;
        await api.GHPAPIFetch(`${base}/${data[i].name}/stats/commit_activity?per_page=100`)
            .then((json) => {
                try {
                    commits_count += json[0].total;
                }
                catch (e) { }
            });
    }
    return {
        repo_count: data.length,
        star_count: star_count,
        fork_count: fork_count,
        commits_count: commits_count
    };
}

function parseOrg(data) {
    var orgs = [];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        orgs.push({
            orgname: element.login,
            url: element.url.replace("api.", ""),
            image: element.avatar_url
        });
    }
    return orgs;
}
module.exports = {
    parseLlive,
    parseGHP,
    parseRepo,
    parseOrg
};