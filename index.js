let doglink=document.querySelector('.doglink');
function fetchdog(){
    let url="https://dog.ceo/api/breeds/image/random";
    fetch(url).then(response=>{
        return response.json();
    }).then(data=>{
       let dogimage=document.querySelector('.dogimage');
    dogimage.src=data.message;
    breedlink=data.message;
    console.log(doglink);
    doglink.innerHTML=`<div class="input-group mb-3 container" style="margin-top:20px;width:51%">
    <span class="input-group-text" id="inputGroup-sizing-default">Image link</span>
     <a class="link" style="margin:5px;" href="${data.message}" target="_blank">${data.message}</a>
  </div>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
   You can see the dog-breed from the link !!The name of the breed is just after the 'breeds/' in the link
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
    })
}