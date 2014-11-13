  var ctx = new AudioContext();
  var osc1 = ctx.createOscillator();
  osc1.connect(ctx.destination);
  
  function WebAudioStart() {
  osc1.start();
  }

  function WebAudioStop() {
  osc1.stop();
  }
