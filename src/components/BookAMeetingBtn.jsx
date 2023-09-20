'use client'
import { BsArrowRightShort } from "react-icons/bs";
import { IconContext } from "react-icons";
import Link from "next/link";
const BookAMeeting = (props) => {
    return (
        <Link
            href="/contact"
            rel="noopener"
            className="px-5 py-2 text-regular font-normal text-center text-white bg-indigo-600 rounded-md w-auto">
            <div className="flex justify-between items-center">
                {props.title}
                <IconContext.Provider value={{ size: "30px" }}>
                    <div>
                        <BsArrowRightShort />
                    </div>
                </IconContext.Provider>
            </div>

        </Link>
    );
}

export default BookAMeeting;