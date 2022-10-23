const WhoToFollowListItem = (who) => {
    return(`
    <a class="list-group-item" href="#list-profile">
              <div class="row">
                <div class="col-2">
                  <img
                    class="wd-width-40 wd-height-40 rounded-circle"
                    src="${who.avatarIcon}"
                  />
                </div>
                <div class="col-7">
                  <span
                    >${who.userName} <i class="fa-sharp fa-solid fa-circle-check"></i
                  ></span>
                  <span class="wd-suggested-post-color d-block">@${who.handle}</span>
                </div>
                <div class="col-3">
                  <button type="button" class="btn btn-primary rounded-pill">
                    Follow
                  </button>
                </div>
              </div>
            </a>
    `
  );
}
export default WhoToFollowListItem;