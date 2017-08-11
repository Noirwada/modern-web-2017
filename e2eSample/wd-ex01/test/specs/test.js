var assert = require('assert');

describe('第一個前端測試程式', function () {

  /*
  beforeEach(function() {
    browser.pause(8000);
  });
  */

  it('登入失敗', function () {
    // 輸入帳號
    $('[name="email"]').setValue('aaa@bbb.com');
    // 輸入錯誤密碼
    $('[name="password"]').setValue('ddd');
    // 按送出按鈕
    $('[type="submit"]').click();
    // 檢查是否出現警告訊息
    $('[data-alert-type="danger"]').waitForExist();
    // 警告訊息的文字內容，是否如預期
    let s = $('[data-alert-type="danger"]').getText();
    assert.equal(s, 'The email and password you entered are not valid.');
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