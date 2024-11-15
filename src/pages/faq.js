import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {useEffect, useState} from "react";
import {createQuestion, deleteQuestion, getAllQuestions, updateQuestion} from "./api/faqClient.js"
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'; // Import icons

const FaqItem = ({ question, answer, editable = false, onEdit, onDelete }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(question);

    const handleSaveEdit = () => {
        onEdit(editText);
        setIsEditing(false);
    };

    return (
        <li className="w-full p-4 my-4 bg-light border border-solid border-dark rounded-lg">
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => !isEditing && setIsOpen(!isOpen)}
            >
                {!isEditing ? (
                    <h3 className="text-lg font-semibold">{question}</h3>
                ) : (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="text-lg font-semibold p-2 w-full border border-dark rounded"
                    />
                )}
                <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? "-" : "+"}
                </motion.span>
            </div>
            {isOpen && (
                <p className="mt-2 text-dark leading-relaxed">
                    {answer}
                </p>
            )}
            {editable && (
                <div className="mt-2 flex space-x-2">
                    {isEditing ? (
                        <>
                            <Button onClick={handleSaveEdit} variant="outline">
                                Save
                            </Button>
                            <Button onClick={() => setIsEditing(false)} variant="outline">
                                Cancel
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={() => setIsEditing(true)} variant="outline" className="bg-transparent border-none p-0">
                                <PencilIcon className="h-5 w-5 text-gray-500" />
                            </Button>
                            <Button onClick={onDelete} variant="outline" className="bg-transparent border-none p-0 text-red-600">
                                <TrashIcon className="h-5 w-5 text-red-600" />
                            </Button>
                        </>
                    )}
                </div>
            )}
        </li>
    );
};

const Faq = () => {

    const [isAsking, setIsAsking] = useState(false);
    const [newQuestion, setNewQuestion] = useState("");
    const [pendingQuestions, setPendingQuestions] = useState([])

    const handleAsk = () => setIsAsking(!isAsking);

    const handleSubmitQuestion = (e) => {
        e.preventDefault();

        const faqQuestion = {question : newQuestion};

        createQuestion(faqQuestion)
            .then((res) => {
                setPendingQuestions((prevQuestions) => [
                    ...prevQuestions,
                    res.data,
                ])
                setNewQuestion("");
                setIsAsking(false);
            }).catch((err) => {
                console.log(err);
        })
    };

    const handleDelete = (id) => {
        deleteQuestion(id)
            .then(() => {
                listAllQuestions();
            }).catch((err) => {
            console.log(err);
        })
    };

    const handleEdit = (updatedQuestion, id) => {
        const updatedData = { question: updatedQuestion };

        updateQuestion(id, updatedData)
            .then((response) => {
                setPendingQuestions((prevQuestions) =>
                    prevQuestions.map((q) => (q.id === id ? { ...q, question: updatedQuestion } : q))
                );
            })
            .catch((err) => console.log("Error updating question", err));
    };

    const listAllQuestions = async () => {
        getAllQuestions()
            .then((response) => {
                setPendingQuestions(response.data)
            }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        listAllQuestions()
    }, [])


    return (
        <>
            <Head>
                <title>FAQs</title>
                <meta name="description" content="Frequently Asked Questions" />
            </Head>

            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">

                <Layout className="pt-16">

                    <AnimatedText
                        text="Frequently Asked Questions"
                        className="mb-12 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />


                    {/*QUESTION CREATION SECTION*/}
                    <h2 className="text-3xl font-bold text-center my-8">Confused? Curious? ChatGPT down? </h2>
                    <h2 className="text-1xl font-light text-center my-8">Post your question and I’ll be happy to help!</h2>
                    <div className="flex justify-center my-4">
                        <Button onClick={handleAsk} variant="outline"
                                className="bg-blue-200 hover:bg-blue-300 text-blue-800">
                            {isAsking ? "Cancel" : "Ask away"}
                        </Button>


                    </div>

                    {isAsking && (
                        <div className="w-full max-w-2xl mx-auto my-4">
                            <input
                                type="text"
                                value={newQuestion}
                                onChange={(e) => setNewQuestion(e.target.value)}
                                placeholder="Type your question here..."
                                className="w-full p-2 border border-dark rounded mb-2"
                            />
                            <Button onClick={handleSubmitQuestion} className="w-full">
                                Submit Question
                            </Button>
                        </div>
                    )}

                    {/*ANSWERED QUESTIONS SECTION // HARD CODED*/}
                    <h2 className="text-3xl font-bold text-center mt-12 mb-4">Answered</h2>
                    <ul className="w-full max-w-2xl mx-auto">
                        <FaqItem
                            question="What are the typical working hours?"
                            answer="0830 to whenever Curt decides to have mercy on us (around 1700)"
                        />
                        <FaqItem
                            question="Do you go on field trips or work remote?"
                            answer="No"
                        />
                        <FaqItem
                            question="How can I make it to lunch time?"
                            answer="Take initiative of your own learning"
                        />
                    </ul>

                    {/*PENDING QUESTIONS SECTION*/}
                    <h2 className="text-3xl font-bold text-center mt-16 mb-4">Pending</h2>
                    <ul className="w-full max-w-2xl mx-auto">
                        {pendingQuestions.map((q) => (
                            <FaqItem
                                key={q.id}
                                question={q.question}
                                answer=""
                                editable
                                onEdit={(updatedQuestion) => handleEdit(updatedQuestion, q.id)}
                                onDelete={() => handleDelete(q.id)}
                            />
                        ))}
                    </ul>

                </Layout>
            </main>

        </>
    );
};

export default Faq;
