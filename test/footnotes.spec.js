/* eslint-disable no-unused-vars */
var should = require('chai').should();
/* eslint-enable no-unused-vars */
var footnotes = require('./../src/footnotes');

describe('footnotes', function() {
  it('render (with markdown content)', function() {
    var content = footnotes('hey buddy[^13], it\'s a test [^13]: basic footnote [content](http://example.com)');
    console.log(content);
    content.should.equal('hey buddy' +
        '<sup id="fnref:13">' +
        '<a href="#fn:13" rel="footnote">' +
        '<span class="hint--top hint--error hint--medium hint--rounded hint--bounce" aria-label="basic footnote [content](http:&#x2F;&#x2F;example.com)">[13]</span>' +
        '</a>' +
        '</sup>' +
        ', it\'s a test ' +
        '<div id="footnotes">' +
        '<hr>' +
        '<div id="footnotelist">' +
        '<ol style="padding-left: 0; margin-left: 20px">' +
        '<li id="fn:13"><span style="display: inline-block; vertical-align: top; margin-left: 10px;">' +
        'basic footnote ' +
        '<a href="http://example.com">' +
        'content' +
        '</a>' +
        '<a href="#fnref:13" rev="footnote"> ↩</a>' +
        '</span>' +
        '</li>' +
        '</ol>' +
        '</div>' +
        '</div>' +
        '');
  });

  it('render (bug fix 001)', function() {
    var content = footnotes('[^4]: TRANSFORMATIONS AND ACTIONS - databricks[EB/OL]. [2020-01-09]. <https://training.databricks.com/visualapi.pdf>.');
    content.should.equal('<div id="footnotes"><hr><div id="footnotelist"><ol style="padding-left: 0; margin-left: 20px"><li id="fn:4"><span style="display: inline-block; vertical-align: top; margin-left: 10px;">TRANSFORMATIONS AND ACTIONS - databricks[EB/OL]. [2020-01-09]. <a href="https://training.databricks.com/visualapi.pdf">https://training.databricks.com/visualapi.pdf</a>.<a href="#fnref:4" rev="footnote"> ↩</a></span></li></ol></div></div>');
  });

  it('render (bug fix 002)', function() {
    var content = footnotes('hey buddy[^5], it\'s a test [^5]: 【Spark】Spark 基本概念、模块和架构[EB/OL]. 简书, [2020-01-09]. <https://www.jianshu.com/p/bd53509dc237>.');
    console.log(content);
    content.should.equal('<div id="footnotes"><hr><div id="footnotelist"><ol style="padding-left: 0; margin-left: 20px"><li id="fn:4"><span style="display: inline-block; vertical-align: top; margin-left: 10px;">TRANSFORMATIONS AND ACTIONS - databricks[EB/OL]. [2020-01-09]. <a href="https://training.databricks.com/visualapi.pdf">https://training.databricks.com/visualapi.pdf</a>.<a href="#fnref:4" rev="footnote"> ↩</a></span></li></ol></div></div>');
  });


});
