export class Server {
    static apiUrl = "https://camp-hackathon-2021-backend.herokuapp.com/api/users";

    static async login(values) {
        try {
            const response = await fetch(Server.apiUrl + "/login", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            const loginBody = await response.json();

            if (!response.ok) return null;
            return { token: loginBody.token, profile: loginBody.user };
        } catch (error) {
            Server.handleError(error);
        }
    }

    static async register(values) {
        try {
            const response = await fetch(Server.apiUrl + "/register", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            return await response.json();
        } catch (error) {
            Server.handleError(error);
        }
    }

    static handleError(error) {
        console.log(error);
    }
}
