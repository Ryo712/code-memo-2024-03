const onSubmit = handleSubmit(async (data) => {
    signInWithEmail({ email: data.email, password: data.password }).then(
      (res: boolean) => {
        if (res) {
          console.log('ログイン成功');
          setShowPopup(true); // ポップアップを表示
          router.push('/'); // ログイン成功時にトップページにリダイレクト
          //page遷移とポップアップ表示をかく
        } else {
          console.log('ログイン失敗');
          //ポップアップで失敗した時のも出す
        }
      }
    );
  });
  