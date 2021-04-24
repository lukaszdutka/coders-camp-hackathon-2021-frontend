export class Collections {
    static apiUrl = "https://camp-hackathon-2021-backend.herokuapp.com/api/collections";

    /*
    GET: /:id
    {
        "_id": "60834db9f9441030c8bff2dd",
        "name": "To jest kolekcja moich pytań!",
        "questions": [
            {
                "text": "Jaki jest sens życia?",
                "answers": [
                    "Robienie Hackathonu do 3 w nocy",
                    "Miłość",
                    "Praca",
                    "Imprezowanie"
                ],
                "timeForAnswer": 60,
                "_id": "6083628fef90f94610428e42",
                "correctAnswer": 0, //index
                "createdAt": "2021-04-24T00:13:03.671Z",
                "updatedAt": "2021-04-24T00:13:03.671Z",
                "__v": 0
            }
        ]
    }
    */

    static async getCollectionById(id) {
        try {
            const response = await fetch(`${Collections.apiUrl}/${id}`, {
                method: "GET",
                mode: "cors",
            });
            const collectionBody = await response.json();

            if (!response.ok) collectionBody.error = true;

            return {
                id: collectionBody._id,
                name: collectionBody.name,
                questions: collectionBody.questions,
            };
        } catch (error) {
            Collections.handleError(error);
        }
    }

    static handleError(error) {
        console.log(error);
    }
}
