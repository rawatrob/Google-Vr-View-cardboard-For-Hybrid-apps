var vrView;


window.addEventListener('load', onLoad);
function onLoad() {
  vrView = new VRView.Player('#vrview', {
    image: '360-view.jpeg',
    preview: '360-view.jpeg',
   // is_stereo: true,
   // is_autopan_off: true
  });

 //vrView.on('ready', onVRViewReady);
  //vrView.on('modechange', onModeChange);
  //vrView.on('click', onHotspotClick);
  //vrView.on('error', onVRViewError);
}


