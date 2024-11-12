import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FaqItem = ({ question, answer, editable = false, onEdit, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(question);

    const handleSaveEdit = () => {
        onEdit(editText);
        setIsEditing(false);
    };

    return (
        <li
            className="w-full p-4 my-4 bg-light border border-solid border-dark rounded-lg"
        >
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
                            <Button onClick={() => setIsEditing(true)} variant="outline">
                                Edit
                            </Button>
                            <Button onClick={onDelete} variant="outline" className="text-red-600">
                                Delete
                            </Button>
                        </>
                    )}
                </div>
            )}
        </li>
    );
};

const Faq = () => {
    const [pendingQuestions, setPendingQuestions] = useState([
        { id: 1, question: "Figure out how to map" },
        { id: 2, question: "Pray for me" },
        { id: 3, question: "How to direct to edit page" },
    ]);
    const [isAsking, setIsAsking] = useState(false);
    const [newQuestion, setNewQuestion] = useState("");

    const handleAsk = () => setIsAsking(!isAsking);

    const handleSubmitQuestion = () => {
        if (newQuestion.trim()) {
            const newQuestionObj = {
                id: Date.now(), // simple unique id for example purposes
                question: newQuestion,
            };
            setPendingQuestions([...pendingQuestions, newQuestionObj]);
            setNewQuestion(""); // Clear the input
            setIsAsking(false); // Hide the input box after submission
        }
    };

    const handleEdit = (id, newQuestion) => {
        setPendingQuestions((prevQuestions) =>
            prevQuestions.map((q) => (q.id === id ? { ...q, question: newQuestion } : q))
        );
    };

    const handleDelete = (id) => {
        setPendingQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
    };

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

                    <h2 className="text-3xl font-bold text-center my-8">
                        Have a Burning Question?
                    </h2>
                    <div className="flex justify-center my-4">
                        <Button onClick={handleAsk} variant="outline">
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

                    <h2 className="text-3xl font-bold text-center mt-12 mb-4">
                        Answered
                    </h2>
                    <ul className="w-full max-w-2xl mx-auto">
                        <FaqItem
                            question="What are the typical working hours?"
                            answer="Our working hours are 9 am to 5 pm, Monday through Friday."
                        />
                        <FaqItem
                            question="What Will My Career Trajectory Look Like?"
                            answer="We provide multiple paths to career advancement. Based on your interests and skills, there are several roles you can grow into."
                        />
                        <FaqItem
                            question="How do I navigate the FAQ section?"
                            answer="Simply click on any question to view the answer. If you don’t find your answer here, feel free to ask!"
                        />
                    </ul>

                    <h2 className="text-3xl font-bold text-center mt-16 mb-4">
                        Pending
                    </h2>
                    <ul className="w-full max-w-2xl mx-auto">
                        {pendingQuestions.map((q) => (
                            <FaqItem
                                key={q.id}
                                question={q.question}
                                answer=""
                                editable
                                onEdit={(newQuestion) => handleEdit(q.id, newQuestion)}
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
