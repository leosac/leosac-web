module.exports.bindComponents = function(browser) {

  browser.components = {};

  browser.components.login = function(baseUrl) {
    return browser
      .url(`${baseUrl}/login`, 950, 969, `Load page... "${baseUrl}/login"`)
      .click(`.form-horizontal > :nth-child(2) .form-control`, `CSS`, `Click element`)
      .changeInput(`.form-horizontal > :nth-child(2) .form-control`, `CSS`, `admin`, `Change input to... "admin"`)
      .click(`.form-horizontal > :nth-child(3) .form-control`, `CSS`, `Click element`)
      .changeInput(`.form-horizontal > :nth-child(3) .form-control`, `CSS`, `admin`, `Change input to... "admin"`)
      .click(`.ember-application .ember-view .btn-primary`, `CSS`, `Click element`)
  };

  browser.components.logout = function(baseUrl) {
    return browser
      .url(`${baseUrl}/`, 950, 969, `Load page... "${baseUrl}/"`)
      .click(`.navbar-top-links > :nth-child(2) .dropdown-toggle`, `CSS`, `Click element`)
      .click(`div:nth-of-type(2) > ul > li:nth-of-type(2) > ul > li:nth-of-type(4) > a`, `CSS`, `Click element`)
  };


}