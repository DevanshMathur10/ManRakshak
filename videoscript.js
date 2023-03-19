const video = document.querySelector("#c-stream"); 

const endCall = document.querySelector('.c-control--end-call');
endCall.addEventListener('click',function() {
  if(video.srcObject === null) {
    requestVideo();
  } else {
  video.srcObject = null; 
    endCall.classList.add('c-join');
  }
}); 

function requestVideo() {
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
      endCall.classList.remove('c-join');
    })
    .catch(function (error) {
      console.log(error);
    });
}
}
requestVideo();