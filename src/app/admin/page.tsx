'use client'
import AdminNavbar from "@/components/AdminNavbar";
import { useQuery } from "react-query";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../utils/firebaseInit";
import { IResponse } from "./IResponse";
import PaginatedTable from "@/components/PaginatedTable";

async function getResponsesAsync() {
    const q = query(collection(db, "responses"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data() as IResponse);
}

export default function Page() {
    const { data: responses, isLoading, error } = useQuery({ queryKey: ['responses'], queryFn: getResponsesAsync })

    if (isLoading) {
        return <div className="h-screen flex justify-center items-center"><svg version="1.1" className='w-32 h-32' id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
            <path fill="#13397f" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="1s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite" />
            </path>
        </svg>
        </div>
    }

    if (error) {
        return <p>Error </p>;
    }

    console.log(responses);

    return (
        <>
            <AdminNavbar />
            <div className="h-5"></div>
            <div className="flex justify-center">
                <PaginatedTable responses={responses!} />
            </div>
        </>
    )
}