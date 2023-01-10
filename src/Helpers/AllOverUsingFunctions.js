
export const reload=()=>{
    return window.location.reload()
}
export const FullScreenToggler=(FullScreenToggle,setFullScreenToggle)=>{    
        let myDocument = document.querySelector(".pages");
        if (FullScreenToggle) {
          if (myDocument.requestFullscreen) {
            myDocument.requestFullscreen();
          } else if (myDocument.msRequestFullscreen) {
            myDocument.msRequestFullscreen();
          } else if (myDocument.mozRequestFullScreen) {
            myDocument.mozRequestFullScreen();
          } else if (myDocument.webkitRequestFullscreen) {
            myDocument.webkitRequestFullscreen();
          }
          setFullScreenToggle(!FullScreenToggle);
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.msexitFullscreen) {
            document.msexitFullscreen();
          } else if (document.mozexitFullscreen) {
            document.mozexitFullscreen();
          } else if (document.webkitexitFullscreen) {
            document.webkitexitFullscreen();
          }
          setFullScreenToggle(!FullScreenToggle);
        }      
}
