import React from "react";

export const Practice2 = (): JSX.Element => {
  const getTotalFee = (price: number, tax: number):number => {
    return price * tax;
  };

  const onClickPractice = () => console.log(getTotalFee(100, 1.1));

  return (
    <div>
      <p>練習問題:返却値の型指定</p>
      <button
        onClick={() => {
          onClickPractice();
        }}
      >
        練習問題2
      </button>
    </div>
  );
};
