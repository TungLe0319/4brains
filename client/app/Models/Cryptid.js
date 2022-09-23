export class Cryptid {


  constructor(data) {
this.name = data.name
this.imgUrl = data.imUrl
this.location = data.location
this.description = data.location

  }

  get CryptidTemplate() {
    return /*html */ `
      <div class="card elevation-3 mx-4 my-2" style="width: 17.5rem">
              <div class="d-flex justify-content-center">
                <img
                  src="https://d2ph5fj80uercy.cloudfront.net/04/cat3676.jpg"
                  alt=""
                  class="img-fluid rounded mt-2 elevation-4 polaroid"
                />
              </div>
              <div class="card-body">
                <div class="border-bottom border-dark border-3">
                  <span> <i class="mdi mdi-comment fs-2 selectable"  data-bs-toggle="modal"
              data-bs-target="#postModal"></i></span>
                  <span class="mx-3">
                    <i class="mdi mdi-arrow-up-box fs-2 selectable"></i>14</span
                  >
                  <span>
                    <i class="mdi mdi-arrow-down-box fs-2 selectable"></i
                    >5</span
                  >
                </div>
                <div class="d-flex justify-content-end text-shadow mt-2">
                  <h6>PlaceHolder Text</h6>
                </div>
              </div>
            </div>

   
    `;
  }
}