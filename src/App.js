import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function Hello(){
  // function byFn(){
  //   console.log("Bye");
  // }
  // function hiFn(){
  //   console.log("Hi");
  //   return byFn;  // cleanup
  // }

  // UI가 보여지는 순간을 마운트, 사라지는 순간을 언마운트 라고 하는데 경우에 따라 useEffect를 사용하여 함수를 실행할 수 있다.
  // 1. 위에서 만든 함수를 useEffect 파라미터로 넣는 방법
  // useEffect(hiFn, []);

  // 2. 파라미터 자리에 바로 함수를 적는 방법
  useEffect(() => {
    console.log("Hi");
    return () => console.log("Bye");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  // const [counter, setCounter] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const onClick = () => setCounter((prev) => prev + 1);
  // const onChange = (e) => setKeyword(e.target.value);
  // console.log("I run all the time");
  // const iRunOnlyOnce = () => {
  //   console.log("I run only once");
  // }

  // userEffect의 첫번째 파라미터는 한번만 실행하고 싶은 함수를 넣고 두번째는 어레이를 넣는다.
  // useMemo의 경우 "생성"함수에 관련된 기능입니다. 
  // 생성자 함수가 고비용(처리 시간이 오래 걸리는 등)인 경우 렌더링마다 계산하는 것은 처리 시간이 오래 걸리므로 
  // 값을 기억해놓고 의존성이 변경되었을 경우에만 다시 계산해주는 기능입니다.
  // useEffect의 경우는 api 호출, 타이머 등 렌더링 과정에서 니코쌤이 설명해준 것처럼 한 번만 호출해도 될 기능이 렌더링마다 실행되거나, 
  // 호출과정에서 렌더링에 영향을 끼칠 수 있는 것을 모아서 따로 처리하기 위한 기능입니다.
  // 둘의 결정적인 차이는 useEffect는 해당 컴포넌트의 렌더링이 완료된 후에 실행되지만, useMemo는 렌더링 중에 실행되는 차이가 있다고 합니다.
  //참고 사이트
  //https://ko.reactjs.org/docs/hooks-reference.html#useeffect
  //https://ko.reactjs.org/docs/hooks-reference.html#usememo
  // useEffect(() => {
  //   console.log("I run only once.");
  // }, []);

  // keyword의 상태가 변경될때만 실행
  // useEffect(() => {
  //   if(keyword !== "" && keyword.length > 5){
  //     console.log("I run when 'keyword' changes.");
  //   }
  // }, [keyword]);

  // counter의 상태가 변경될때만 실행
  // useEffect(() => {
  //   console.log("I run when 'counter' changes.");
  // }, [counter]);

   // 상태가 변하는 모든 것들을 한번에 기재하고 싶을 땐 배열에 나열
  // useEffect(() => {
  //   console.log("I run when 'keyword, counter' changes.");
  // }, [keyword, counter]);

  // return (
  //   <div>
  //     <input type="text" placeholder="Search here" value={keyword} onChange={onChange} />
  //     <h1 className={styles.title}>{counter}</h1>
  //     <Button text={"Click Me"} onClick={onClick} />
  //   </div>
  // );






  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return(
    <div>
      {showing ? <Hello /> : null}
      <button type="button" onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
