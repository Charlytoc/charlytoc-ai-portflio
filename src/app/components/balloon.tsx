'use client'
import { useEffect } from "react"
export default function Ballon () {

useEffect(()=> {
    // Get microphone input
navigator.mediaDevices.getUserMedia({audio: true})
.then(stream => {
  const audioContext = new AudioContext();
  const microphone = audioContext.createMediaStreamSource(stream);
  const balloon:any = document.querySelector(".balloon")
  // Create analyser node to process audio data
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 2048;
  microphone.connect(analyser);

  // Set up array to hold audio data
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  // Set up loop to process audio data
  const update = () => {
    analyser.getByteFrequencyData(dataArray);

    // Calculate average audio level
    const averageLevel = dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;
    function inflate () {
        const maxBalloonSize = 250;
        const minBalloonSize = 100;
        const balloonSize = minBalloonSize + (maxBalloonSize - minBalloonSize) * averageLevel / 255;
        // balloon.style.width = `${balloonSize}px`;
        // balloon.style.height = `${balloonSize * 1.25}px`;
        balloon.classList.add('inflating');
        balloon.style.animationPlayState = 'running'
    }
    function deinflate () {
        // const maxBalloonSize = 200;
        // const minBalloonSize = 100;
        // const balloonSize = minBalloonSize + (maxBalloonSize - minBalloonSize) * averageLevel / 255;
        // balloon.style.width = `${Number(balloon.style.width) - 1}px`
        // balloon.style.height =`${Number(balloon.style.height) - 1}px`
        balloon.classList.add('inflating');
        balloon.style.animationPlayState = 'paused'
    }
    // Check if audio level is above threshold
    if (averageLevel > 100) {
      inflate()
    }
    else {
        deinflate()
    }

    requestAnimationFrame(update);
  };
  update();
})
.catch(error => {
  console.error(error);
});

})


    return <>
    <div id="balloons-container">
    <div className="balloon">
        <span>About</span>
    </div>
    </div>
    </>
}