import { appState } from '../AppState.js';

export class ActiveCryptid {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.imgUrl = data.imgUrl;
    this.location = data.location;
    this.description = data.description;
    this.agent = data.agent.name
    this.agentImg = data.agent.picture
    this.date = data.createdAt.substring(0, 10)
  }

  get CommentsModalTemplate() {
    return /*html*/ `
    <div class="row ">
    <div class="col-md-12 d-flex mb-2  justify-content-center  text-dark rounded p-2 ">
    <p class = " mt-2 me-md-5">
    Posted by :
    </p>
     <img
                  src="${this.agentImg}"
                  alt="" class="rounded img-fluid selectable" style="width:3rem;"/>
                <div class="d-flex align-items-center  mx-2">
                
          <h2>  ${this.agent}  </h2>
                </div>
    </div>
              <div class="col-md-6 ">
                <img 
                  src="${this.imgUrl}"
                  alt="" class="rounded activePolaroid elevation-3 border border-dark d-flex img-fluid" />
                  <div class="mt-3 p-md-5">
                  <h2>
                    ${this.name}
                  </h2>
                  <p class = "fw-bold  border-bottom border-dark ">
                  Last Seen:
                  <span class= "ms-2">
                  ${this.location}
                  ${this.date}
                  </p>
                  </span>
                  <p class = "">
                  ${this.description}
                  </p>
                  </div>
                  
              </div>
              <div class="col-md-6 ">
                <div class=" justify-content-end d-flex ">
               
                  <button type="button" class="btn-close fs-2" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex justify-content-center mt-2">
                  <div>
                    <span>
                    
                     <form onsubmit="app.commentsController.addComment()">
    <div class="d-flex ">
    <div class="form-floating mb-3">
    <input type="text" class="form-control" id="body" name="body" placeholder="">
    <label for="body" class= "">Comment if you dare</label>
    </div>
    <div class="d-flex align-items-center">
    <small>
    <button type="submit" class="btn btn-sm btn-outline-dark ms-4">Submit</button>
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
                <div class="d-flex justify-content-center " >
                  <div class="card mb-5 mt-2 mx-2 p-4  scrollable-y headerbg active-cryptid border border-dark text-break" id="active-comments" style= "height: 27rem">
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
