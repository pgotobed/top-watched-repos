import parseRepos from "./parseRepos"
import {message} from "antd";

/**
 * Alert that no repos found
 */
const reposNotFound = () => {
    message.warning("No Repos found for the user!");
};

const userNotFound = (userName) => {
    message.warning(userName+" not found!");
};

const errorPopUp = (userName) => {
    message.error("Error finding " + userName + ", try again.");
};

const apiUrl = "https://api.github.com/users/";

export default async function getRepos(userName, onComplete) {
    const url = apiUrl + userName + "/repos?per_page=100&page=";
    try {
        let jsonResponse = [];
        let page = 1;
        //while not receiceved all data make calls
        while (true) {
            const finalUrl = url + page;//append page number
            let response = await fetch(finalUrl);//fetch the page
            if (response.ok) {//if the response is good parse data
                const responsePageData = await response.json();
                if (responsePageData.length > 0) {//if there is data for the page
                    jsonResponse = jsonResponse.concat(responsePageData);
                    if(responsePageData.length < 100){//no need to make more calls if there is no more data
                        break;
                    }
                } else if(page === 1){//if the first page has no data report that no repos found
                    reposNotFound();
                    break;
                }else {
                    break;
                }
                page++;
            } else {//break if no an error
                userNotFound(userName);
                break;
            }
        }
        onComplete(parseRepos(jsonResponse));//when don call the callback function
    }
    catch (error) {
        errorPopUp(userName);
        console.log("An error occurred when getting repos for "+userName+". The error is:\n" + error);
    }
}
