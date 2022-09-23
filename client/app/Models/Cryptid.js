export class Cryptid {


  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.location = data.location
    this.description = data.description
    this.likers = data.likes || 0

  }

  get CryptidTemplate() {
    return /*html */ `
      <div class="card elevation-3 mx-4 my-2" style="width: 17.5rem">
              <div class="d-flex justify-content-center">
                <img
                  src="${this.imgUrl}"
                  alt=""
                  class="img-fluid rounded mt-2 elevation-4 polaroid"
                />
              </div>
              <div class="card-body">
                <div class="border-bottom border-dark border-1">
                  <span> <i class="mdi mdi-comment fs-2 selectable"  data-bs-toggle="modal"
              data-bs-target="#postModal" onclick=""></i><small>6</small></span>
                  <span class="mx-3">
                    <i class="mdi mdi-arrow-up-box text-success fs-4 selectable"></i><small>${this.likers}</small></span
                  >
                  <span>
                    <i class="mdi mdi-arrow-down-box text-danger fs-4 selectable"></i
                    ><small>5</small></span
                  >
                </div>
                <div class="text-shadow mt-2">
                <div>
                </div>
                  <h5 class="text-decoration-underline">${this.name}</h5>
                  <p>${this.location}</p>
                  <small>${this.description}</small>
                </div>
                </div>
                <div>
                <i class="mdi mdi-cancel text-danger selectable" onclick = "app.cryptidsController.removeCryptid('${this.id}')"></i>
                </div>
            </div>

   
    `;
  }


}