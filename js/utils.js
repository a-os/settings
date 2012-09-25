/* -*- Mode: js; js-indent-level: 2; indent-tabs-mode: nil -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

/**
 * These so-called "dialog boxes" are just standard Settings panels (<section
 * role="region" />) with reset/submit buttons: these buttons both return to the
 * previous panel when clicked, and each button has its own (optional) callback.
 */

function openDialog(dialogID, onSubmit, onReset) {
  var origin = document.location.hash;
  var dialog = document.getElementById(dialogID);

  var submit = dialog.querySelector('[type=submit]');
  if (submit) {
    submit.onclick = function onsubmit() {
      if (onSubmit)
        onSubmit();
      document.location.hash = origin; // hide dialog box
    };
  }

  var reset = dialog.querySelector('[type=reset]');
  if (reset) {
    reset.onclick = function onreset() {
      if (onReset)
        onReset();
      document.location.hash = origin; // hide dialog box
    };
  }

  document.location.hash = dialogID; // show dialog box
}

/**
 * Audio Preview
 * First click = play, second click = pause.
 */

function audioPreview(element) {
  var audio = document.querySelector('#sounds audio');
  var source = audio.src;
  var playing = !audio.paused;

  audio.src = 'style/ringtones/' + element.querySelector('input').value;
  if (source == audio.src && playing) {
    audio.stop();
  } else {
    audio.play();
  }
}

