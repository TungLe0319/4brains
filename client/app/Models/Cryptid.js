export class Cryptid {


  constructor(data) {

    this.id = data.id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.location = data.location
    this.description = data.description
    this.likes = data.likes || 0
    this.dislikes = data.dislikes || 0

  }

  get CryptidTemplate() {
    return /*html */ `
      <div class="card postCard elevation-3 mx-4 my-2 border border-dark bg-light" style="width: 17.5rem">
              <div class="d-flex justify-content-center">
                <img
                  src="${this.imgUrl}"
                  
                  alt="${this.name}"
                  class="img-fluid rounded mt-2 elevation-4 polaroid border border-dark"
                  onclick="app.cryptidsController.activeCryptid('${this.id}')"
                   data-bs-toggle="modal"
              data-bs-target="#postModal"
                />
              </div>
              <div class="card-body">
                <div class="border-bottom d-flex justify-content-between border-dark border-1">
                  <span> <i class="mdi mdi-comment fs-2 selectable"  data-bs-toggle="modal"
              data-bs-target="#postModal" onclick="app.cryptidsController.activeCryptid('${this.id}')"></i><small></small></span>
                  <span class="mx-3">
                    <i class="mdi mdi-arrow-up-box text-success fs-4 selectable" onclick="app.cryptidsController.likePost('${this.id}')"></i></span>
                    <div class ="bg-dark text-danger text-center 
                    w-25 border border-light rounded opacity-75 fs-3">${this.likes - this.dislikes}
                    </div>

                    <span>
                    <i class="mdi mdi-arrow-down-box text-danger fs-4 selectable" onclick="app.cryptidsController.dislikePost('${this.id}')"></i></span>
                </div>
                <div class="text-shadow mt-2">
                <div>
                </div>
          <div class="p-1">

          <h5 class="text-decoration-underline">${this.name}</h5>
          <small>location:</small>
          <p>${this.location}</p>
                  </div>

                  </div>
                  <div class ="description">
                  <small>${this.description}</small>
                  </div>
                </div>
                <div>
                <i class="mdi mdi-cancel text-danger selectable fs-3" onclick = "app.cryptidsController.removeCryptid('${this.id}')"></i>
                </div>
            </div>

   
    `
  }




}