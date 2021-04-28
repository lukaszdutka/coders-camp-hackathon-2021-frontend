export class Rooms {
    static apiUrl = "https://camp-hackathon-2021-backend.herokuapp.com/api/rooms";

    static async getRooms(token) {
        try {
            const response = await fetch(Rooms.apiUrl, {
                method: "GET",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return await response.json();
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static async getRoomById(id) {
        try {
            const response = await fetch(`${Rooms.apiUrl}/${id}`, {
                method: "GET",
                mode: "cors",
            });
            return await response.json();
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static async createRoom(room, token) {
        // room = {name: "string", "questionsCollectionId": "2039ir23f023f9023" }
        try {
            const response = await fetch(Rooms.apiUrl, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(room),
            });
            return await response.json();
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static async changeRoomCollection(id, room, token) {
        // room = { collectionId: "2039ir23f023f9023"}
        try {
            const response = await fetch(`${Rooms.apiUrl}/${id}`, {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(room),
            });
            return await response.json();
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static async changeRoomName(id, room, token) {
        // room = {name: "room name"}
        try {
            const response = await fetch(`${Rooms.apiUrl}/${id}`, {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(room),
            });
            return await response.json();
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static async pushActiveQuestion(id, room, token) {
        // room = {selectedQuestionId: "2302340293r590"}
        try {
            const response = await fetch(`${Rooms.apiUrl}/${id}`, {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(room),
            });
            return await response.json();
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static async updateGuests(id, guest) {
        // guest = {email: "test@test.com", name: "Albus Dumbledore"}
        try {
            const response = await fetch(`${Rooms.apiUrl}/${id}/guests`, {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(guest),
            });
            return await response.json();
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static async getActiveQuestion(roomId, email) {
        try {
            const response = await fetch(`${Rooms.apiUrl}/${roomId}/activequestion?email=${email}`, {
                method: "GET",
                mode: "cors", // no auth is ok
            });
            return await response.json();
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static async postAnswer(roomId, questionId, answerIndex, email) {
        try {
            const response = await fetch(`${Rooms.apiUrl}/${roomId}/answers`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    questionId: questionId,
                    answer: answerIndex,
                    email: email,
                }),
            });
            return await response.json();
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static async getGuestSummary(roomId, email) {
        try {
            const response = await fetch(`${Rooms.apiUrl}/${roomId}/answers?email=${email}`, {
                method: "GET",
                mode: "cors", //no auth needed
            });

            return await response.json();
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static async getMentorSummary(roomId, token) {
        try {
            const response = await fetch(`${Rooms.apiUrl}/${roomId}/summary`, {
                method: "GET",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return await response.json();
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static async closeRoom(roomId, token) {
        try {
            const response = await fetch(`${Rooms.apiUrl}/${roomId}/close`, {
                method: "PATCH",
                mode: "cors", //no auth needed
                Authorization: `Bearer ${token}`,
            });
            return await response.json();
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static handleError(error) {
        console.log(error);
    }
}
