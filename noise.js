const play = function play(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}

$(document).ready( function() {

  $('.instrument').on('click', 'button', function() {
    let audioID = this.innerHTML + 'Audio';
    let audioFile = $(`#${audioID}`)[0];
    play(audioFile);
  });

  $('body').keydown((event) => {
    const notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

    if (notes.indexOf(event.key) > -1) {
      let audioID = event.key + 'Audio';
      let audioFile = $(`#${audioID}`)[0];
      play(audioFile);
    }
  });
});
