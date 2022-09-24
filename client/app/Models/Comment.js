export class Comment {
  constructor(data) {
    
    this.body = data.body;
   
    this.id = data.id;
    this.cryptidId = data.cryptidId;
    this.agentName=data.agent.name
    this.agentPicture= data.agent.picture
    
  }

  get CommentTemplate() {
    return /*html*/ `
   <div class="border border-dark d-flex mb-3 rotated cardcomment">
                      <span class="ms-2"><i class="mdi mdi-human fs-3"></i></span>
                      <div class="p-2 ">
                      <h5>
                      <img src=" ${this.agentPicture}" alt="" style="width:2rem;">
                     
                      
                      ${this.agentName}</h5>
                        <small>${this.body}</small>
                      </div>
                    </div>
    
    `;
  }


//   get CommentFormTemplate() {
//     return /*html*/ `
 
//     <form onsubmit="app.commentsController.addComment('${this.cryptidId}')">
//     <div class="form-floating mb-3">
//   <input type="email" class="form-control" id="body" name="body" placeholder="name@example.com">
//   <label for="body">Comment</label>
// </div>

//     </form>
    
//     `;
//   }
}
