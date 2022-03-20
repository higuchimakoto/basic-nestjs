// データベースの接続情報
module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  autoLoadEntities: true,

  // マイグレーションファイルを実行する時にどのファイルを読み込むか。
  // コンパイル済みのdistディレクトリを参照するようにする。
  entities: ['dist/entities/*.entity.js'],
  // どのファイルをマイグレーションで使用するか。
  migrations: ['dist/migrations/*.js'],

  // 出力先を指定する
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
};
