const baseUrl = "https://search.imdbot.workers.dev";

type TRequestType = "fetch" | "search" | "details";

/**
 * API Call
 * @param query {String}
 * @param type {String}
 */
export const api = async (query: string, requestType: TRequestType) => await new Promise((resolve, reject) => {
    const queryString = (requestType === "fetch" || requestType === "search") ? `q=${query}` : `tt=${query}`;
    fetch(`${baseUrl}?${queryString}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.json()).then(data => resolve(data)).catch(error => reject(error));
});