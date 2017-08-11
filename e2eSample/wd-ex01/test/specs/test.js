var assert = require('assert');

describe('第一個前端測試程式', function () {

  /*
  beforeEach(function() {
    browser.pause(8000);
  });
  */

  it('登入失敗', function () {
    browser.url('http://demo.keystonejs.com/keystone/signin');
    browser.element('[name=email]').setValue('demo@keystonejs.com');
    browser.element('[name=password]').setValue('1111');
    browser.click('button[type=submit]');
    browser.waitForExist('[data-alert-type=danger]');
    const message = browser.getText('[data-alert-type=danger]');
    assert.equal(message,
      'The email and password you entered are not valid.');
  });

  it('登入成功', function () {
    browser.url('http://demo.keystonejs.com/keystone/signin');
    browser.element('[name=email]').setValue('demo@keystonejs.com');
    browser.element('[name=password]').setValue('demo');
    browser.click('button[type=submit]');
    browser.waitForExist('.dashboard-header');
    const dashboardText = browser.getText('.dashboard-header');
    assert.equal(dashboardText,
      'Demo');
  });

  it('登出', function () {
    // 點選登出
    browser.click('[title="Sign Out"]');
    // 檢查是否出現登出成功的訊息
    browser.waitForExist('[data-alert-type=info]');
    const message = browser.getText('[data-alert-type=info]');
    assert.equal(message, 'You have been signed out.');
  });

});