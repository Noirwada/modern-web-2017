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
    //browser.element('[name=email]').setValue('demo@keystonejs.com');
    // 輸入錯誤密碼
    //browser.element('[name=password]').setValue('1111');
    // 按送出按鈕
    //browser.click('#signin-view > div > div.auth-box > div > div:nth-child(2) > form > button')
    // 檢查是否出現警告訊息
    //.waitForExist('#signin-view > div > div.alert_1wamaxc-o_O-danger_i8m9rb')
    //const msg = browser.getText('#signin-view > div > div.alert_1wamaxc-o_O-danger_i8m9rb')
    // 警告訊息的文字內容，是否如預期
    //assert(msg, 'The email and password you entered are not valid.')
  });

  it('登入成功', function () {
    /// 輸入帳號
    browser.element('[name=email]').setValue('demo@keystonejs.com');
    // 輸入錯誤密碼
    browser.element('[name=password]').setValue('demo');
    // 按送出按鈕
    browser.click('#signin-view > div > div.auth-box > div > div:nth-child(2) > form > button')
    // 檢查是否存在登出連結
    browser.waitForExist('#react-root > div > header > nav > div > ul.app-nav.app-nav--primary.app-nav--right > li:nth-child(2) > a')
  });

  it('登出', function () {
    // 點選登出
    // 檢查是否出現登出成功的訊息
  });

});