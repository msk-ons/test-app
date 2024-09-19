import React, { useState } from "react";
import { API_BASE_URL } from "../../constance";
import { Label } from "./Label";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Error } from "./Error";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  //  バリデーション
  const valid = () => {
    let Valid = true;
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!name) {
      nameError = "お名前は必須です。";
      Valid = false;
    } else if (name.length > 30) {
      nameError = "お名前は30文字以内で入力してください。";
      Valid = false;
    }

    if (!email) {
      emailError = "メールアドレスは必須です。";
      Valid = false;
    } else if (!email.match(/.+@.+\..+/)) {
      emailError = "メールアドレスの形式が正しくありません。";
      Valid = false;
    }

    if (!message) {
      messageError = "本文は必須です。";
      Valid = false;
    } else if (message.length > 500) {
      messageError = "本文は500文字以内で入力してください。";
      Valid = false;
    }

    setNameError(nameError);
    setEmailError(emailError);
    setMessageError(messageError);

    return Valid;
  };

  // フォームの送信
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!valid()) return;

    await fetch(`${API_BASE_URL}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    alert("送信しました。");

    handleClear();
  };

  // クリア
  const handleClear = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <div className="max-w-[800px] mx-auto py-10">
        <h1 className="text-xl font-bold mb-10">問合わせフォーム</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-6">
            <Label text="お名前" htmlFor="name" />
            <div className="w-full">
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(value) => setName(value)}
              />
              <Error message={nameError} />
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <Label text="メールアドレス" htmlFor="email" />
            <div className="w-full">
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(value) => setEmail(value)}
              />
              <Error message={emailError} />
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <Label text="本文" htmlFor="message" />
            <div className="w-full">
              <Textarea
                id="message"
                value={message}
                onChange={(value) => setMessage(value)}
              />
              <Error message={messageError} />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg mr-4"
            >
              送信
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-gray-200 font-bold py-2 px-4 rounded-lg"
            >
              クリア
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
