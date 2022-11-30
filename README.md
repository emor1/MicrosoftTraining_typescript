# TypeScript勉強

参考：[TypeScript を使用して JavaScript アプリケーションをビルドする](https://docs.microsoft.com/ja-jp/learn/paths/build-javascript-applications-typescript/)

## 実行
1. `$ tsc`でプロジェクト内のtsファイルをビルドして、buildフォルダに
2. `$ node <実行ファイル.js>`でbuild内のjsファイルを実行


## メモ

### module5：クラス
* アクセサリー
  * TypeScriptではプロパティのアクセスを傍受する方法として、getterとsetterをサポートしている。これにより各オブジェクトのメンバーを細かく制御できる
  * getとsetを使って、データを検証したり、制約をつけるなどの操作をしてからプログラムに戻せる
* 静的プロパティ
  * クラスの全てのインスタンスで共有されるプロパティやメソッド
  * `static`を付けることで静的にできる

続き：https://learn.microsoft.com/ja-jp/training/modules/typescript-generics/