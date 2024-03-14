import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { auth } from '../lib/firebase/config'; // Firebaseの設定ファイルからauthオブジェクトをインポート
import { signUpWithEmail } from '../lib/firebase/apis/auth';
import { useRouter } from 'next/router';

/** サインアップ画面
 * @screenname SignUpScreen
 * @description ユーザの新規登録を行う画面
 */
export default function SignUpScreen() {
  const { handleSubmit, register } = useForm();

  const [password, setPassword] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    signUpWithEmail({ email: data.email, password: data.password }, auth).then( // Firebaseのauthオブジェクトを引数として渡す
      (res: boolean) => {
        if (res) {
          console.log('新規登録成功');
          router.push('/');
          //登録成功したときにポップアップ表示を出す
        } else {
          console.log('新規登録失敗');
          //失敗した時もポップアップ表示
        }
      }
    );
  });

  const passwordClick = () => setPassword(!password);
  const confirmClick = () => setConfirm(!confirm);

  return (
    <form onSubmit={onSubmit}>
      <label>
        Email:
        <input type="text" {...register('email')} />
      </label>
      <label>
        Password:
        <input type={password ? 'text' : 'password'} {...register('password')} />
        <button type="button" onClick={passwordClick}>{password ? 'Hide' : 'Show'}</button>
      </label>
      <label>
        Confirm Password:
        <input type={confirm ? 'text' : 'password'} />
        <button type="button" onClick={confirmClick}>{confirm ? 'Hide' : 'Show'}</button>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
//passwordClickとconfirmClick 関数は、パスワード入力フィールドと確認用パスワード入力フィールドの表示・非表示を切り替えるために使用。
//return以下で関数がJSXを返すことができるようになります。つまり、コンポーネントのレンダリングに使用されるUI要素を定義することができます。