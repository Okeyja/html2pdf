import { readFileSync } from 'fs';
import moment from 'moment'; // moment.js
var html = readFileSync('./invoice.html', 'utf8'); // 引入html模板


import { createPDFProtocolFile } from './create.js'; // 引入写好的函数
var options = {
    "format": 'A3',
    "header": {
    "height": "0mm",
    "contents": ''
}}; // 一些配置
var name = '张三';
// 匹配规则
var reg = [
  {
    relus: /__name__/g,
    match: name
  },
  {
    relus: /__date__/g,
    match: moment().format('YYYY年MM月DD日')
  }
];
createPDFProtocolFile(html, options, reg, './test.pdf'); // 传入参数 生成pdf
