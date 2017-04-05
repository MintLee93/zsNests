const request = require('superagent');
const cheerio = require('cheerio');

function start() {

    request.get('https://www.baidu.com/')
        .end(function (err, sres) {
            // 常规的错误处理
            if (err) {
                console.log(err);
            }
            // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
            // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
            // 剩下就都是 jquery 的内容了
            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });
            });

        });
}

start();