import express from 'express';
import admin from 'firebase-admin';

const router = express.Router();

router.post('/', async (req, res) => {
  const data = JSON.parse(req.body);

  // Firestoreへの接続
  const db = admin.firestore();

  // データの保存
  await db.collection('tasks').add(data);

  res.redirect('/'); // 作成完了後にトップページへリダイレクト
});

export default router;

//作成したデータを保存するサーバー側のコード