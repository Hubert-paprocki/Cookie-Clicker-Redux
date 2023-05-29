import React, { useRef } from "react";
import { firestore } from "../../../../firebase";
import { addDoc, collection } from "@firebase/firestore";
import { useAppSelector } from "../../../../app/hooks";
import Button from "../../../Button/Button";

interface Score {
  username: string;
  score: number;
}

function ScoreboardForm(): JSX.Element {
  const userNameRef = useRef<HTMLInputElement>(null);
  const ref = collection(firestore, "scores");
  const cookieValue = useAppSelector((state) => state.cookie.value);
  const formLanguage = useAppSelector(
    (state) => state.language.selectedLanguage.addToScoreboardForm
  );

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
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col gap-4 items-center justify-center grow mb-4"
    >
      <div className="">
        <label htmlFor="">{formLanguage.yourName}</label>
        <input
          className="bg-transparent border-2 border-yellow-800 border-opacity-20 rounded-md mx-2 px-2 py-0.5 w-36"
          type="text"
          ref={userNameRef}
          placeholder={formLanguage.inputPlaceholder}
        />
      </div>
      <Button primary type="submit">
        {formLanguage.btnText}
      </Button>
    </form>
  );
}

export default ScoreboardForm;
