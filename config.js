// Firebase の設定値です。Firebase コンソールの「プロジェクトの設定」→「マイアプリ」に表示される
// firebaseConfig の中身をそのまま貼り付けてください。
// これらの値は秘密情報ではなく、公開しても問題ありません（データはセキュリティルールで守っています）。
window.HAISHA_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  // ログインIDをメール形式に変換するためのダミーのドメイン（メールは送信されません）
  loginDomain: "haisha.example.com",
  teamName: "時津サンダース"
};
