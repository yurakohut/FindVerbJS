export class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl;
    };

    getVerbDataApi() {
        return fetch(this.url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": "f37aaf1abemshaa93fd2feddd38fp18575ajsne98b99519219"
            }
        });
    };

    getPhotoDataApi() {
        return fetch(this.url, {
            "method": "GET"
        });
    };


    checkResponseStatus(response) {
        if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText));
        }
        return Promise.resolve(response);
    };

    responseJson(response) {
        return response.json();
    };
}