import { appState } from '../AppState.js';

export class ActiveCryptid {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.imgUrl = data.imgUrl;
    this.location = data.location;
    this.description = data.description;
    this.agent= data.agent.name
    this.agentImg = data.agent.picture
  }

  get CommentsModalTemplate() {
    return /*html*/ `
    <div class="row ">
    <div class="col-md-12 d-flex mb-2  justify-content-center bg-dark text-light rounded p-2">
    
     <img
                  src="${this.agentImg}"
                  alt="" class="rounded img-fluid selectable" style="width:3rem;"/>
                <div class="d-flex align-items-center  ms-3">
                
          <h2>  ${this.agent}  </h2>
                </div>
    </div>
              <div class="col-md-6 ">
                <img
                  src="${this.imgUrl}"
                  alt="" class="rounded activePolaroid img-fluid elevation-3" />
              </div>
              <div class="col-md-6">
                <div class=" justify-content-between d-flex ">
               
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div>
                    <span>
                      <i class="mdi mdi-plus-box fs-3  selectable" onclick="app.commentsController.drawCommentForm()"></i></span>
                  </div>
                  <div>
                    <span>
                      <i class="mdi mdi-arrow-up-box fs-5 selectable"></i>
                      <small>14</small></span>
                    <span>
                      <i class="mdi mdi-arrow-down-box fs-5 selectable"></i><small>5</small></span>
                  </div>
                </div>
                <div class="d-flex justify-content-center" >
                  <div class="card commentbg mb-5 mt-2 mx-2 p-4  scrollable-y" id="active-comments">
                  ${this.Comments}
                    
                  </div>
                </div>
              </div>
            </div>
    
    `;
  }

  get Comments() {
    let template = '';
    let comments = appState.comments.filter((c) => c.cryptidId == this.id);
    comments.forEach((c) => (template += c.CommentTemplate));
    return template;
  }
}
