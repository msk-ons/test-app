import { useState } from "react";

export default function InputForm() {
  // フォームとして扱う値をStateとして宣言

  const defaultValues = {
    name: "お名前",
    email: "admin@example.com",
    comment: "お問い合わせ",
  };

  // フォーム要素の変更をStateに反映
  const {
    setForm,
    handleForm,
    formState: { errors },
  } = useState({
    defaultValues,
  });

  const onsubmit = (data) => console.log(data);
  const onerror = (err) => console.log(err);

  return (
    <form onSubmit={handleForm(onsubmit, onerror)} noValidate>
      <div>
        <label htmlFor="name">お名前：</label>
        <input
          id="name"
          type="text"
          {...setForm("name", {
            required: "名前は必須です。",
            maxLength: {
              value: 30,
              message: "名前は30字文字以内にしてください。",
            },
          })}
        />
        <div>{errors.name?.message}</div>
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <input
          id="email"
          name="email"
          type="number"
          {...setForm("email", {
            required: "メールアドレスは必須です。",
            maxLength: {
              value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
              message: "メールアドレスの形式が不正です。",
            },
          })}
        />
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="comment">本文：</label>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="7"
          {...setForm("memo", {
            required: "本文は必須です。",
            maxLength: {
              value: 500,
              message: "本文は500文字以内にしてください。",
            },
          })}
        />
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <button type="submit">送信</button>
        <button>クリア</button>
      </div>
    </form>
  );
}
