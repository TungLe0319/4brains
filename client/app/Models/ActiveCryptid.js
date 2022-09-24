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
                <div class=" justify-content-end d-flex ">
               
                  <button type="button" class="btn-close fs-2" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div>
                    <span>
                    
                     <form onsubmit="app.commentsController.addComment()">
    <div class="d-flex ">
    <div class="form-floating mb-3">
    <input type="text" class="form-control" id="body" name="body" placeholder="">
    <label for="body">Comment</label>
    </div>
    <div class="d-flex align-items-center">
    <small>
    <button type="submit" class="btn btn-sm">Submit</button>
    </small>
    
    </div>
    </div>
    </form>
                  </div>
                 
                </div>
                <div>
                 <div id="commentForm">
                      
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
