export class Questions {
    static apiUrl = "https://camp-hackathon-2021-backend.herokuapp.com/api/questions";

    static async getQuestionById(id, token) {
        try {
            const response = await fetch(`${Questions.apiUrl}/${id}`, {
                method: "GET",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return await response.json();
        } catch (error) {
            Questions.handleError(error);
        }
    }

    static handleError(error) {
        console.log(error);
    }
}
