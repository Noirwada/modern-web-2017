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
    $('input[name="email"]').setValue('demo@keystonejs.com');
    // 輸入錯誤密碼
    $('input[name="password"]').setValue('1111');
    // 按送出按鈕
    browser.click('button[type="submit"]');
    // 檢查是否出現警告訊息
    browser.waitForExist('[data-alert-type=danger]');
    // 警告訊息的文字內容，是否如預期
    const message = browser.getText('[data-alert-type=danger]');
    assert.equal(message,
      'The email and password you entered are not valid.');
  });

  it('登入成功', function() {
    browser.url('http://demo.keystonejs.com/keystone/signin');
    browser.element('[name=email]').setValue('demo@keystonejs.com');
    browser.element('[name=password]').setValue('demo');
    browser.click('button[type=submit]');
    browser.waitForExist('[href="/keystone/signout"]');
  });

  it('登出', function() {
    browser.click('[href="/keystone/signout"]');
    browser.waitForExist('[data-alert-type=info]');
    const message = browser.getText('[data-alert-type=info]');
    assert.equal(message, 'You have been signed out.');
  });

});