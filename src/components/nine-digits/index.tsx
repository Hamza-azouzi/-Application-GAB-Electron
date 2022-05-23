import React, { FC } from "react";

type Props = {
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  actionOk: () => void;
}

export const NineDigits:FC<Props> = ({setCardNumber , actionOk}) => {
  return (
    <div className="w-100 h-auto bg-white rounded-2xl  shadow-xl border-4 border-gray-100">
      <div className="w-auto m-1 h-auto mb-2">
        <div className="gap-3 m-2 flex justify-between">
          <div
            onClick={
              // 7 to setCardNumber
              () => setCardNumber((value) => value + "7")
            }
            className="h-20 w-20  rounded-full bg-blue-900 justify-center flex items-center cursor-pointer text-white   shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
          >
            7
          </div>
          <div
            onClick={() => setCardNumber((value) => value + "8")}
            className=" h-20 w-20  rounded-full bg-blue-900 justify-center flex items-center cursor-pointer text-white   shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
          >
            8
          </div>
          <div
            onClick={() => setCardNumber((value) => value + "9")}
            className="h-20 w-20  rounded-full bg-blue-900 justify-center flex items-center cursor-pointer text-white   shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
          >
            9
          </div>
        </div>
        <div className="gap-3 m-2 flex justify-between">
          <div
            onClick={() => setCardNumber((value) => value + "4")}
            className="h-20 w-20  rounded-full bg-blue-900 justify-center flex items-center cursor-pointer text-white   shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
          >
            4
          </div>
          <div
            onClick={() => setCardNumber((value) => value + "5")}
            className="h-20 w-20  rounded-full bg-blue-900 justify-center flex items-center cursor-pointer text-white   shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
          >
            5
          </div>
          <div
            onClick={() => setCardNumber((value) => value + "6")}
            className="h-20 w-20  rounded-full bg-blue-900 justify-center flex items-center cursor-pointer text-white   shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
          >
            6
          </div>
        </div>
        <div className="gap-3 m-2 flex justify-between">
          <div
            onClick={() => setCardNumber((value) => value + "1")}
            className="h-20 w-20  rounded-full bg-blue-900 justify-center flex items-center cursor-pointer text-white   shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
          >
            1
          </div>
          <div
            onClick={() => setCardNumber((value) => value + "2")}
            className="h-20 w-20  rounded-full bg-blue-900 justify-center flex items-center cursor-pointer text-white   shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
          >
            2
          </div>
          <div
            onClick={() => setCardNumber((value) => value + "3")}
            className="h-20 w-20  rounded-full bg-blue-900 justify-center flex items-center cursor-pointer text-white   shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
          >
            3
          </div>
        </div>
        <div className="gap-3 m-2 flex justify-between">
          <div
            onClick={() => setCardNumber((value) => value + "0")}
            className="h-20 w-20  rounded-full bg-blue-900 justify-center flex items-center cursor-pointer text-white   shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
          >
            0
          </div>
          <div
            onClick={
              //clear
              () => setCardNumber("")
            }
            className="bg-amber-300 shadow-md rounded-2xl cursor-pointer w-20 h-10 mt-5 text-yellow-600 font-medium flex justify-center items-center"
          >
            Clear
          </div>
          <button
            onClick={actionOk}
            className="bg-green-400  mt-5 shadow-md rounded-2xl cursor-pointer w-44 h-10 text-green-600 font-medium flex justify-center items-center"
          >
            Entrer
          </button>
        </div>
        <div className="gap-3 m-2 flex justify-between"></div>
        <div className="flex justify-center mt-5">
          <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
        </div>
      </div>
    </div>
  );
};
