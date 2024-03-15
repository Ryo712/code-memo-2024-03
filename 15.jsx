// 親コンポーネント
/**Reactコンポーネントにデータを渡すためのメカニズム。親コンポーネントから子コンポーネントに情報を渡すために使用される */
function ParentComponent() {
    return <ChildComponent name="John" age={30} />;
  }
  
  // 子コンポーネント
  function ChildComponent(props) {
    return (
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
      </div>
    );
  }
/*ParentComponent から ChildComponent に name と age のプロップスが渡されています。
ChildComponent はこれらのプロップスを受け取り、props オブジェクト内でそれらにアクセスする*/ 
/**
Name: John
Age: 30
 *  */  