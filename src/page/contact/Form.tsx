import React, { useState } from "react";
import { API_BASE_URL } from "../../constance";
import { Label } from "./Label";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { ErrorMessage } from "./ErrorMessage";

export const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  // バリデーション
  const valid = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";
    if (!name) {
      nameError = "お名前は必須です。";
    } else if (name.length > 30) {
      nameError = "お名前は30字以内で入力してください。";
    }
    if (!email) {
      emailError = "メールアドレスは必須です。";
    } else if (!email.match(/.+@.+\..+/)) {
      emailError = "メールアドレスの形式が正しくありません。";
    }
    if (!message) {
      messageError = "本文は必須です。";
    } else if (message.length > 500) {
      messageError = "本文は500字以内で入力してください。";
    }
    setNameError(nameError);
    setEmailError(emailError);
    setMessageError(messageError);
    return !nameError && !emailError && !messageError;
  };
  // フォームの送信
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valid()) return;

    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("送信しました。");
      handleClear();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("送信に失敗しました。");
    }
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
        <h1 className="text-xl font-bold mb-10">お問合わせフォーム</h1>
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
              <ErrorMessage message={nameError} />
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
              <ErrorMessage message={emailError} />
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
              <ErrorMessage message={messageError} />
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
