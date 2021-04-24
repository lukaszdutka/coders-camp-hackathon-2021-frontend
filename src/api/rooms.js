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

    static async getRoomById(id, token) {
        try {
            const response = await fetch(`${Rooms.apiUrl}/${id}`, {
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

    static async updateGuests(id, guest, token) {
        // guest = {email: "test@test.com", name: "Albus Dumbledore"}
        try {
            const response = await fetch(`${Rooms.apiUrl}/${id}`, {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(guest),
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
