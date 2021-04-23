export class Server {
    static apiUrl = "https://camp-hackathon-2021-backend.herokuapp.com/api";

    static async login(values) {
        try {
            const response = await fetch(Server.apiUrl + "/users/login", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            const loginBody = await response.json();

            if (!response.ok) loginBody.error = true;

            return { accessToken: loginBody.access_token };
        } catch (error) {
            Server.handleError(error);
        }
    }

    static async register(values) {
        try {
            const response = await fetch(Server.apiUrl + "/users/register", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            const result = await response.json();
            if (!response.ok) result.error = true;

            return result;
        } catch (error) {
            Server.handleError(error);
        }
    }

    static handleError(error) {
        console.log(error);
    }
}
