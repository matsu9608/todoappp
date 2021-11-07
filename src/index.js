import "./styles.css";

//追加ボタンのクリックイベント時の追加機能実装
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//◆追加機能実装
const onClickAdd = () => {
  //完了buttonの生成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";

  //削除buttonの生成
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";

  //戻るボタン作成
  const returnbutton = document.createElement("button");
  returnbutton.innerText = "戻す";

  //入力内容を取得
  const inputtext = document.getElementById("add-text").value;
  document.getElementById("add-text").value = ""; //li要素作成

  const li = document.createElement("li");
  //div要素
  const div = document.createElement("div");
  div.className = "list-row";

  //p要素作成
  const p = document.createElement("p");
  p.innerText = inputtext;

  div.appendChild(p);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  //lタグの子要素に各要素を入れる
  li.appendChild(div);
  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);

  //完了ボタン機能追加
  completebutton.addEventListener("click", () => {
    //完了ボタンのdiv要素取得
    const addtarget = completebutton.parentNode;
    //divの親要素であるliを取得
    const addlist = addtarget.parentNode;
    //押された完了ボタンのTodoレコードを削除
    deleteFromIncompleteList(addtarget.parentNode);

    //divの子要素テキストを取得
    const text = addtarget.firstElementChild.innerText;
    addtarget.textContent = null;

    const p1 = document.createElement("p");
    p1.innerText = text;

    addtarget.appendChild(p1);
    addtarget.appendChild(returnbutton);

    console.log(addlist);
    document.getElementById("complete-list").appendChild(addlist);
  });

  //戻るボタン機能追加
  returnbutton.addEventListener("click", () => {
    const returntarget = returnbutton.parentNode;
    document
      .getElementById("complete-list")
      .removeChild(returntarget.parentNode);
    const returntext = returntarget.firstElementChild.innerText;

    //未完了リストに追加する。
    //完了buttonの生成

    //削除buttonの生成
    //p要素作成
    const p1 = p.innerText;

    const li = document.createElement("li");

    div.appendChild(p1);
    console.log(div);

    // div.appendChild(completebutton);
    // div.appendChild(deletebutton);

    // //lタグの子要素に各要素を入れる
    // li.appendChild(div);
    // //未完了のリストに追加
    // document.getElementById("incomplete-list").appendChild(li);
  });

  //削除ボタンクリックイベント発生時に未完了Todoから削除する機能
  deletebutton.addEventListener("click", () => {
    //完了ボタンのdiv要素取得
    const deletetarget = completebutton.parentNode;
    //divの親要素であるliを取得
    const deletelist = deletetarget.parentNode;
    deleteFromIncompleteList(deletelist);
  });

  //未完了リストから指定の要素を削除(共通部品)
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };
};

// li.innerText = inputtext;
