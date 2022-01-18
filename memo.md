# Bitcoin in 100 seconds // Build my own Blockchain

前提知識

- node.js
- typescript
- cryptography
  - encription
  - signing
  - hash functions
    - sha256
    - rsa
    - md5

node.js を使用して独自のブロックチェーンをフルスクラッチする(勉強のため)

- wallet
- transaction
  - transction が block に追加されるたびに、 block がPoWでマイニングされる

# 4つのクラス
この基本的な4つのクラスを実装すればブロックチェーンを作れる
- Transaction
- Block
  - Transaction の Container
- Chain
- Wallet


## hash or hash_digest
データ(Object, Array, String, 何でも)を押しつぶして任意のサイズのハッシュ文字列を取得する。元には戻せない
ハッシュと元のデータを比較して同一であることを検証することはできる

# SHA256
Secure Hash Algorithm
256bit

元に戻せない系のハッシュ関数
一方向暗号化関数と言われる

16進数文字列にハッシュする

# RSA

Rivest-Shamir-Adleman
リベスト & シャミア & エーデルマン

こちらのハッシュ関数は、発明者**たち**の頭文字を取った名前になっている
https://wa3.i-3-i.info/word17438.html

復号化ができるの双方向暗号化関数

キーペアを生み出す
片方の鍵でしか暗号化できず、片方の鍵でしか復号化できない
非対称暗号化関数

キーペアのどちらを公開してどちらを秘密にするかは使い方による

- JWT, 証明書
  - 作成鍵を秘密に、検証鍵を公開に
  - 内容が改ざんされてないことを証明したい
- メール暗号化
  - 送る側の暗号鍵を公開、受け取る側の復号鍵を秘密に
  - 内容を見せたくない

暗号資産の受け渡しには前者を使う
なぜなら、暗号資産の中身には興味がなく、量(amount)がある wallet から別の wallet へ移動したということを保証したいから
というか、Transactionがあるのみで暗号資産の実体というものは無いというのが正しそう

## create degital signature with RSA keypair

- private key でメッセージを sign した hash を作成
- 元メッセージ と hash を同時に送る
- 公開鍵で検証して、元メッセージと同一か確認
- 同じなら正しいことを保証できる



# PEM ファイル
Privacy-Enhanced Mail

複数の証明書や秘密鍵を入れるファイルフォーマット
BEGIN ~ END の間に入れる

RSA の鍵を入れるのに使う


# Blockchain とは
分散台帳みたいなもの
沢山の人がChainを持ってる

要するに、Block <- Block <- Block みたいな単方向連結リストの Database
履歴を遡ることができる

git commit に似ているが、違うのは reset や rebase ができないこと
append only


# payer, payee

Blockchain の世界では、送金元/先は wallet の publicKey で表す
つまり、wallet.publicKey がアカウントみたいなもの


# Mining とは

同時に Transaction を行おうとした場合、Wallet に入っている量を超えて送れてしまう危険性がある。
そのため、Chain に Block を追加する前に PoW による信用フローを実施する

新しいブロックごとに実行されるプロセスをマイニングという
マイニングは、参加者から選んで難しい計算(答え合わせは簡単)を実行させ、完了したらブロックを追加
報酬でビットコインを少し渡す

マイニングは、コンピューティングリソースを投資する宝くじみたいなもの

PoW により、コインを得られるのでコンピューティングを価格に変換していると考え値段が上がる？

# MD5

Message Digest Algorithm

ハッシュ関数
暗号化関数のアルゴリズムの1種

sha256 に似ているが、 128 bit で速度が速い

