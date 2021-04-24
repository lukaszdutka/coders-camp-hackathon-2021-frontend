import React, { useContext, useEffect, useState } from "react";
import {
    Typography,
    ListItem,
    ListItemText,
    List,
    IconButton,
    ListItemSecondaryAction,
    CircularProgress,
    Button,
    makeStyles,
    Divider,
} from "@material-ui/core";
import { Collections } from "../../api/collections";
import { AppContext } from "../../Context";
import EditIcon from "@material-ui/icons/Edit";
import AnimatedModal from "../modals/AnimatedModal";
import { QuestionsList } from "./QuestionsList";
import AddIcon from "@material-ui/icons/Add";
import { Popup } from "../modals/Popup";
import { CreateCollection } from "../forms/CreateCollection";

const useStyles = makeStyles(() => ({
    buttonModal: {
        display: "grid",
        justifyItems: "center",
    },
}));

export const CollectionsList = () => {
    const { token } = useContext(AppContext);
    const [collections, setCollections] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [activeCollectionId, setActiveCollectionId] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

    const toggleOpen = () => {
        if (modalOpen) setActiveCollectionId("");
        setModalOpen((previous) => !previous);
    };

    function addCollection(collection) {
        setCollections([...collections, collection]);
    }

    function updateQuestion(question) {
        if (findQuestionInActiveCollection(question._id).new) {
            Collections.addQuestionToCollection(activeCollectionId, mapQuestion(question), token);
        } else {
            //To do update question
            console.log(question);
        }
    }

    function findQuestionInActiveCollection(questionId) {
        return collections
            .find((collection) => collection._id === activeCollectionId)
            .questions.find((question) => question._id === questionId);
    }

    function mapQuestion({ id, text, correctAnswer, timeForAnswer, answer0, answer1, answer2, answer3 }) {
        return {
            _id: id,
            text,
            correctAnswer: --correctAnswer,
            timeForAnswer,
            answers: [answer0, answer1, answer2, answer3],
        };
    }

    async function getCollections(result) {
        const collections = await result;

        if (!collections.error) setCollections(collections.reverse());
    }

    useEffect(() => {
        getCollections(Collections.getAllCollections(token));
    }, [token]);

    function handleEditClick(event) {
        const id = event.currentTarget.value;
        const collection = collections.filter((collection) => collection._id === id)[0];

        setActiveCollectionId(id);
        setQuestions(collection.questions);
        toggleOpen();
    }

    function addQuestionToCollection() {
        const collectionsTemp = [...collections];

        collectionsTemp
            .find((collection) => collection._id === activeCollectionId)
            .questions.push({
                new: true,
                _id: Date.now(),
                text: "",
                correctAnswer: 0,
                timeForAnswer: 60,
                answers: ["", "", "", ""],
            });
        setCollections(collectionsTemp);
    }

    const handleOpenPopup = (e) => {
        console.log(e.currentTarget);
        setAnchorEl(e.currentTarget);
    };

    const handleClosePopup = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AnimatedModal toggleOpen={toggleOpen} open={modalOpen}>
                <QuestionsList
                    updateQuestion={updateQuestion}
                    questionsArray={questions}
                    addQuestion={addQuestionToCollection}
                />
            </AnimatedModal>

            <List>
                <Typography variant="h6">Collections of Questions</Typography>
                <Divider />

                {collections ? (
                    collections.map((collection) => {
                        return (
                            <ListItem key={collection._id}>
                                <ListItemText primary={collection.name} />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        color="primary"
                                        edge="end"
                                        aria-label="edit"
                                        value={collection._id}
                                        onClick={handleEditClick}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );
                    })
                ) : (
                    <CircularProgress />
                )}
                <div className={classes.buttonModal}>
                    <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={handleOpenPopup}>
                        Add new Collection
                    </Button>
                </div>
                <Popup anchorEl={anchorEl} handleClosePopup={handleClosePopup} open={!!anchorEl}>
                    <CreateCollection handleClosePopup={handleClosePopup} addCollection={addCollection} />
                </Popup>
            </List>
        </>
    );
};
