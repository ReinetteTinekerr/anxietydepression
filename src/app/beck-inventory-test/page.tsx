'use client'
import BeckAnxiety from "@/components/BeckAnxiety";
import BeckDepression from "@/components/BeckDepression";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Register from "@/components/Register";
import { useState, useRef, useEffect } from "react";
import { getDoc, doc, addDoc, Timestamp, collection } from "firebase/firestore";
import { db } from "../../utils/firebaseInit";
import CommentBox from "@/components/Comment";
import { useRouter } from 'next/navigation';



export default function Page() {
    const router = useRouter();
    const [renderIndex, setRenderIndex] = useState(0);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const buttonRefNext = useRef<HTMLButtonElement>(null);
    const [registerData, setRegisterData] = useState({ username: "", age: 19, email: "", college: "", course: "", gender: Number.POSITIVE_INFINITY })
    const [bai, setBai] = useState({ total: 0 });
    const [bdi, setBdi] = useState({ total: 0 });
    const [createdAt, setCreatedAt] = useState(null);
    const [comment, setComment] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [submitted, setSubmitted] = useState(false);


    useEffect(() => {
        const id = localStorage.getItem("id");
        if (id !== null) {
            const docRef = doc(db, "responses", id)
            getDoc(docRef).then((ref) => {
                if (ref.exists()) {

                    const data = ref.data();

                    setRegisterData((prev) => ({ ...prev, ...data.user }))
                    setBai((prev) => ({ ...prev, total: data.bai }))
                    setBdi((prev) => ({ ...prev, total: data.bdi }))
                    setComment(data.comment);
                    setCreatedAt(data.createdAt);
                }
            })
        }
    }, []);

    const onClickPopup = () => {
        setShowPopup(false);
    }

    const onClickNext = () => {
        // console.log(registerData);

        if (renderIndex === 0) {
            buttonRef.current?.click();
            return;
        }
        setRenderIndex((index) => Math.min(index + 1, 3));

        // Submit
        if (renderIndex === 3) {
            // console.log(registerData, bai, bdi, comment)
            const data = {
                bai: bai.total,
                bdi: bdi.total,
                user: registerData,
                comment: comment,
                createdAt: Timestamp.now(),
            };
            try {

                addDoc(collection(db, "responses"), data).then((res) => {
                    // console.log(res.id);
                    localStorage.setItem("id", res.id);
                    setShowPopup(true);
                    setSubmitted(true);
                    router.replace('/thank-you')
                })
            } catch (error) {

                console.log(error);
            }
        }
    }
    const onClickPrevious = () => {
        setRenderIndex((index) => Math.max(index - 1, 0));
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();

        setRenderIndex((index) => Math.min(index + 1, 2));
    }
    return <>
        <Navbar />

        <section id="hero-area" className="bg-gray-900 pt-24 pb-5 shadow-md">
            <div className="container">
                <div className="flex justify-between mx-28">
                    <div className="w-screen text-center">
                        <h6 className="w-full text-2xl md:text-4xl font-bold text-white mb-10 " data-wow-delay="1s">Beck&apos;s Anxiety And
                            <br className="block" />Beck&apos;s Depression Test</h6>
                    </div>
                </div>
            </div>
        </section>

        {/* Modal */}
        <section>
            <div id="popup-modal" className={`${showPopup ? "" : "hidden"} fixed top-0 left-1/2 right-1/2 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}>
                <div className="relative w-full h-full max-w-md md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                            {/* <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Thank You for Responding!</h3>
                            <button onClick={onClickPopup} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section >
            <div className="">

                {/* <ol className="flex justify-center m-6">
                    <li className="flex items-center w-1/2 text-blue-600  after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block ">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12  shrink-0">
                            <svg aria-hidden="true" className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </div>
                    </li>
                    <li className="flex items-center w-1/2 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block ">
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path></svg>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12  shrink-0">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        </div>
                    </li>
                </ol> */}

                <div className="border shadow-lg m-5 rounded-lg">

                    {renderIndex == 0 && <Register handleSubmit={handleSubmit} buttonRef={buttonRef} registerData={registerData} setRegisterData={setRegisterData} />}
                    {renderIndex == 1 && <BeckAnxiety bai={bai} setBai={setBai} />}
                    {renderIndex == 2 && <BeckDepression bdi={bdi} setBdi={setBdi} />}
                    {renderIndex == 3 && <CommentBox comment={comment} setComment={setComment} />}
                    <div className="flex justify-end m-4">
                        <button onClick={onClickPrevious} disabled={renderIndex === 0} className="mx-4 text-white disabled:bg-gray-400 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                            Prev
                        </button>

                        <button ref={buttonRefNext} onClick={onClickNext} disabled={(renderIndex == 3 && (Object.values(bdi).length <= 21 || Object.values(bai).length <= 21) || (submitted && renderIndex === 3))} className="text-white disabled:bg-gray-400 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                            {renderIndex === 3 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </>
}