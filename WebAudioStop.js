  function WebAudioStop() {
  var ctx = new AudioContext();
  var osc1 = ctx.createOscillator();
  osc1.connect(ctx.destination);
  osc1.stop();
  }
