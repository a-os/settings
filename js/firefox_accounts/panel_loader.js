/* global FxaPanel, FxAccountsIACHelper, LazyLoader */

'use strict';

navigator.mozL10n.once(function onL10nReady() {
  function onPanelReady(evt) {
    if (evt.detail.current !== '#fxa') {
      return;
    }
    window.removeEventListener('panelready', onPanelReady);
    LazyLoader.load([
      '/shared/fxa_iac_client/fxa_iac_client.js',
      '/shared/text_normalizer/text_normalizer.js',
      'js/firefox_accounts/panel.js'
    ], function fxa_panel_loaded() {
      FxaPanel.init(FxAccountsIACHelper);
    });
  }
  window.addEventListener('panelready', onPanelReady);
});
