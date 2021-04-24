export class Collections {
    static apiUrl = "https://camp-hackathon-2021-backend.herokuapp.com/api/collections";

    static async getAllCollections(token) {
        try {
            const response = await fetch(Collections.apiUrl, {
                method: "GET",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return await response.json();
        } catch (error) {
            Collections.handleError(error);
        }
    }

    static async getCollectionById(id, token) {
        try {
            const response = await fetch(`${Collections.apiUrl}/${id}`, {
                method: "GET",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const collectionBody = await response.json();

            return {
                id: collectionBody._id,
                name: collectionBody.name,
                questions: collectionBody.questions,
            };
        } catch (error) {
            Collections.handleError(error);
        }
    }

    static async createCollection(collectionName, token) {
        // collection = {name: "string"}
        const collection = { name: collectionName };

        try {
            const response = await fetch(Collections.apiUrl, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(collection),
            });
            return await response.json();
        } catch (error) {
            Collections.handleError(error);
        }
    }

    static async updateCollectionName(id, collection, token) {
        // collection = {name: "string"}
        try {
            const response = await fetch(`${Collections.apiUrl}/${id}`, {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(collection),
            });
            return await response.json();
        } catch (error) {
            Collections.handleError(error);
        }
    }

    static async addQuestionToCollection(id, question, token) {
        // question = {text: "string", answers: [...], correctAnswer: 0, timeForAnswer: 60}
        console.log(id, question, token);
        try {
            const response = await fetch(`${Collections.apiUrl}/${id}`, {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ question }),
            });
            return await response.json();
        } catch (error) {
            Collections.handleError(error);
        }
    }

    static handleError(error) {
        console.log(error);
    }
}
