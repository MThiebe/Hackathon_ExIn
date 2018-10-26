// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
{

  const $title = document.querySelector('.title');

  const init = () => {
    console.log($title);
    document.addEventListener('keydown', buttons);
  }


  const buttons = e => {
    const keyName = e.key;

    console

    if (keyName === 'c') {
    $title.innerHTML = "Bom"
    return;
    }

    if (keyName === 'v') {
    $title.innerHTML = "Banaan"
    return;
    }

    if (keyName === 'b') {
    $title.innerHTML = "Appelsien"
    return;
    }
  }



  init();


}
