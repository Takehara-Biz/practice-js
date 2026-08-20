const http = require("http");

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // もしくは特定のオリジンを指定
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log("begin, " + url.pathname);

  // 第2引数にダミーのベースURLを指定して、req.url（相対パス）を解析します

  // クエリパラメータの取得
  const sleep = Number(url.searchParams.get('sleep'));
  const error = url.searchParams.get('error').toLowerCase() === "true";
  console.log(`sleep:${sleep}, error:${error}`);

  // Define a reusable sleep function
  const sleepFunc = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  console.log('[BEGIN] sleep');
  await sleepFunc(sleep);
  console.log('[  END] sleep');


  if (error) {
    // ステータスコードを 400 (Bad Request) にし、正しいJSONを返す
    res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ status: "error", message: "不正なリクエストです" }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ aa: 12, bb: 'cc', sleep: sleep }));
  return;

})

server.listen(3000, () => {
  console.log("サーバーがポート3000で起動しました")
})
