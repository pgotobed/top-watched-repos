/**
 * parses the raw JSON into displayable repos
 * @param data
 * @returns the top 5 watched repos parsed to display
 */
export default function parseRepos(data){
    let parsedData = [];
    data.sort((a,b) => b.watchers_count - a.watchers_count );//sorts by watcher_count
    for(let i = 0 ; i < 5 ; i ++){//for the first 5 repos
        const curRepo = data[i];
        //push into an array the needed info if the repo exists
        if(curRepo) {
            parsedData.push({
                name: curRepo.name,
                description: curRepo.description,
                watchers_count: curRepo.watchers_count,
                html_url: curRepo.html_url,
                key: i,
            })
        } else { //if too few repos break the loop
            break;
        }
    }
    return parsedData
}