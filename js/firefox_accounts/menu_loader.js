/* global FxAccountsIACHelper, FxaMenu */

'use strict';

require(['shared/lazy_loader'], function(LazyLoader) {
  navigator.mozL10n.once(function loadWhenIdle() {
    var idleObserver = {
      time: 4,
      onidle: function() {
        navigator.removeIdleObserver(idleObserver);
        LazyLoader.load([
          '/shared/fxa_iac_client/fxa_iac_client.js',
          '/shared/text_normalizer/text_normalizer.js',
          'js/firefox_accounts/menu.js'
        ], function fxa_menu_loaded() {
          FxaMenu.init(FxAccountsIACHelper);
        });
      }
    };
    navigator.addIdleObserver(idleObserver);
  });
});
