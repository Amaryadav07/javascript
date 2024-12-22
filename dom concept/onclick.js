let changeImage=(imageSrc) =>{
    const displayDiv = document.getElementById('displayDiv');
    displayDiv.innerHTML = `<img src="${imageSrc}" style="max-width: 100%; max-height: 100%;">`;
  }