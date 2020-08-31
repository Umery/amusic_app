const audio = () => {

  const fakeBtn1 = document.getElementById("fake_btn1");

  fakeBtn1.addEventListener('click', function(){
    rand = Math.floor( Math.random() * 2 ) ;
    console.log(rand)

    if (rand==0){
      console.log(rand)
    };
    if (rand==1){
      document.getElementById("audio_btn1").play();
    };
  });
}

window.addEventListener("load",audio)