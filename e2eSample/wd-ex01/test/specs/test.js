var assert = require('assert');

describe('第一個前端測試程式', function () {

  /*
  beforeEach(function() {
    browser.pause(8000);
  });
  */

  it('登入失敗', function () {
    browser.url('http://demo.keystonejs.com/keystone/signin');
    browser.element('[type=email]').setValue('demo@keystonejs.com');
    browser.element('[type=password]').setValue('123');
    browser.click('[type=submit]');

    browser.waitForExist('[data-alert-type=danger]');

    let txtVal = browser.getText('[data-alert-type=danger]');
    
    assert.equal(txtVal, 'The email and password you entered are not valid.');
    
    // 輸入帳號s
    // 輸入錯誤密碼
    // 按送出按鈕
    // 檢查是否出現警告訊息
    // 警告訊息的文字內容，是否如預期
  });

  it('登入成功', function () {
    
    browser.url('http://demo.keystonejs.com/keystone/signin');
    browser.element('[type=email]').setValue('demo@keystonejs.com');
    browser.element('[type=password]').setValue('demo');
    browser.click('[type=submit]');

    browser.waitForExist('[title="Sign Out"]');

    
    // 輸入帳號
    // 輸入正確密碼
    // 按送出按鈕
    // 檢查是否存在登出連結
  });

  it('登出', function () {

   browser.click('[title="Sign Out"]');
     browser.waitForExist('[data-alert-type="info"]');

    let txtVal = browser.getText('[data-alert-type="info"]');
    
    assert.equal(txtVal, 'You have been signed out.');
    
    //You have been signed out.
    // 點選登出
    // 檢查是否出現登出成功的訊息
  });

});