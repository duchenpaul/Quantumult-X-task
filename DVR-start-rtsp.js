const url =
  "http://192.168.1.254/?custom=1&cmd=8099&str=5671cb009711411ac1f9b0ab33874fd3";
const method = "GET";
const headers = {
  "User-Agent": `Quantumult%20X/1.1.0 (iPhone12,5; iOS 16.0.3)`,
  Host: `192.168.1.254`,
  Connection: `keep-alive`,
  "Accept-Language": `zh-CN,zh-Hans;q=0.9`,
  "Accept-Encoding": `gzip, deflate`,
  Accept: `*/*`
};
const body = ``;

const myRequest = {
  url: url,
  method: method,
  headers: headers,
  body: body
};

$task.fetch(myRequest).then(
  response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", response.statusCode, response.body); // Success!
    $done();
  },
  reason => {
    // reason.error
    $notify("Title", response.statusCode, reason.error); // Error!
    $done();
  }
);
