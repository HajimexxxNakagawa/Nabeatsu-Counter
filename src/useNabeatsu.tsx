import { useCallback, useState } from "react";

export function useNabeatsu(): [number, () => void, boolean] {
  const [count, setCount] = useState(0);

  const countUp = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  //   初期状態
  const initial = count === 0;
  // 3の倍数かどうかを判定
  const isMultipleThree = count % 3 === 0;
  //  3がつく数字かどうかを判定
  const isNumberWithThree = Boolean(count.toString().match(/3/));
  //   0を除き、3の倍数か3のつく数字であればtrueを返す
  const isAho = !initial && (isMultipleThree || isNumberWithThree);

  return [count, countUp, isAho];
}
