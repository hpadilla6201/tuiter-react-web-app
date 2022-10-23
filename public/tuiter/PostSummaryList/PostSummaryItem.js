const PostSummaryList = (post) => {
    return(`
    <div class="row border ms-1 me-1">
            <div class="col-10 mt-2">
              <span class="wd-suggested-post-color d-block"
                >${post.topic}</span
              >
              <span
                >${post.userName} <i class="fa-sharp fa-solid fa-circle-check"></i
              ></span>
              <span class="wd-suggested-post-color">- ${post.time}</span>
              <p class="fw-bold">
                ${post.title}
              </p>
            </div>
            <div class="col-2 mt-2">
              <img
                class="w-100"
                src="${post.image}"/>
            </div>
          </div>
    `);
}
export default PostSummaryList;