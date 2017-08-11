var assert = require('assert');

describe('第一個前端測試程式', function () {

  /*
  beforeEach(function() {
    browser.pause(8000);
  });
  */

  it('登入失敗', function () {
    browser.url('http://demo.keystonejs.com/keystone/signin');
    // 輸入帳號
    $('input[type=email]').setValue('QQQ');
    $('input[type=password]').setValue('123');
    $('button').click();
    $('[data-alert-type=danger]').waitForExist();
    var danger_txt = $('[data-alert-type=danger]').getText();
    assert.equal(danger_txt, 'The email and password you entered are not valid.');
    

  });

  it('登入成功', function () {
    // 輸入帳號
    // 輸入正確密碼
    // 按送出按鈕
    // 檢查是否存在登出連結
  });

  it('登出', function () {
    // 點選登出
    // 檢查是否出現登出成功的訊息
  });

});