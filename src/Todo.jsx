import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const Todo = () => {
  // 追加テキスト
  const [todoText, setTodoText] = useState("");

  // 未完了リスト
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 完了リスト
  const [completeTodos, setCompleteTodos] = useState([]);

  // テキスト入力時
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタン押下時
  const onClickAdd = () => {
    // テキスト入力なしの場合、何もしない
    if (todoText === "") return;

    // 未完了リストにテキスト入力を追加する
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);

    // テキスト入力を初期化する
    setTodoText("");
  };

  // 完了ボタン押下時
  const onClickComplete = (index) => {
    // 未完了リストから対象を削除する
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    // 完了リストに対象を追加する
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  // 削除ボタン押下時
  const onClickDelete = (index) => {
    // 未完了リストから対象を削除する
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 戻すボタン押下時
  const onClickBack = (index) => {
    // 完了リストから対象を削除する
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    // 未完了リストに対象を追加する
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* 入力エリア */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      {/* 未完了エリア */}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      {/* 完了エリア */}
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
