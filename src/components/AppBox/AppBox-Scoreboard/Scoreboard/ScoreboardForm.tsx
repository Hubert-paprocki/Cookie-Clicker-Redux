import React, { useRef } from "react";
import { firestore } from "../../../../firebase";
import { addDoc, collection } from "@firebase/firestore";
import { useAppSelector } from "../../../../app/hooks";

interface Score {
  username: string;
  score: number;
}

function ScoreboardForm(): JSX.Element {
  const userNameRef = useRef<HTMLInputElement>(null);
  const ref = collection(firestore, "scores");
  const cookieValue = useAppSelector((state) => state.cookie.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userName = userNameRef.current?.value;
    let data: Score = { username: userName || "Anonymous", score: cookieValue };
    console.log(userName);
    try {
      await addDoc(ref, data);
    } catch (error) {
      console.log(error);
    }

    if (userNameRef.current) {
      userNameRef.current.value = "";
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="m-4 flex flex-col items-center justify-center"
      >
        <div className="">
          <label htmlFor="">Your name:</label>
          <input
            className="bg-transparent border-2 border-stone-400 rounded-md mx-2 px-2 py-0.5 w-36"
            type="text"
            ref={userNameRef}
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-yellow-800 bg-opacity-20 rounded-bl-lg rounded-tl-lg rounded-br-lg rounded-tr-lg duration-200 border-r-4 border-l-4 border-stone-800 text-stone-300 hover:text-stone-50 md:min-w-[217px] hover:min-w-[250px] uppercase tracking-wider"
        >
          Add your score
        </button>
      </form>
    </div>
  );
}

export default ScoreboardForm;
