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
            const roomsResponse = await response.json();

            if (!response.ok) roomsResponse.error = true;

            return roomsResponse;
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static async createRoom(room, token) {
        // room = {name: "string", "questionsCollectionId": "2039ir23f023f9023" } //questionsCollection to id
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
            const roomResponse = await response.json();

            if (!response.ok) roomResponse.error = true;

            return roomResponse;
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static async editRoom(id, room, token) {
        // room = {name: "room name", collectionId: "2039ir23f023f9023"}
        try {
            const response = await fetch(`${Rooms.apiUrl}/${id}`, {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const editRoomResponse = await response.json();

            if (!response.ok) editRoomResponse.error = true;

            return editRoomResponse;
        } catch (error) {
            Rooms.handleError(error);
        }
    }

    static handleError(error) {
        console.log(error);
    }
}
