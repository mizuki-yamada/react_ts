import React from "react";

export const Practice1 = (): JSX.Element => {
  const calcTotalFee = (price: number, tax: number) => {
    console.log(price * tax);
  };

  const onClickPractice = () => calcTotalFee(100, 1.1);

  return (
    <div>
      <p>練習問題:引数の型指定</p>
      <button
        onClick={() => {
          onClickPractice();
        }}
      >
        練習問題1
      </button>
    </div>
  );
};
