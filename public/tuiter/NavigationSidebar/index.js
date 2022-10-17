const NavigationSidebar = () => {
    return (`
        <div class="list-group">
          <a class="list-group-item list-group-item-action" href="#list-home">
            <i class="fa-brands fa-twitter"></i>
         </a>
          <a
            class="list-group-item list-group-item-action"
            href="../home.html"
            ><i class="fa-solid fa-house"></i>
            <span
              class="d-lg-none d-md-none d-sm-none d-xs-none d-xxl-inline d-xl-inline">
              Home
            </span>
         </a>
          <a
            class="list-group-item list-group-item-action active"
            href="./explore.html"
            ><i class="fa-solid fa-hashtag"></i>
            <span
              class="d-lg-none d-md-none d-sm-none d-xs-none d-xxl-inline d-xl-inline">Explore</span>
          </a>
          <a
            class="list-group-item list-group-item-action"
            href="../notifications.html"
            ><i class="fa-solid fa-bell"></i>
            <span
              class="d-lg-none d-md-none d-sm-none d-xs-none d-xxl-inline d-xl-inline"
              >Notifications</span>
          </a>
          <a
            class="list-group-item list-group-item-action"
            href="../messages.html"
            ><i class="fa-solid fa-envelope"></i>
            <span
              class="d-lg-none d-md-none d-sm-none d-xs-none d-xxl-inline d-xl-inline">Messages</span>
          </a>
          <a
            class="list-group-item list-group-item-action"
            href="../bookmarks/index.html"
            ><i class="fa-solid fa-bookmark"></i>
            <span
              class="d-lg-none d-md-none d-sm-none d-xs-none d-xxl-inline d-xl-inline"
              >Bookmarks</span>
          </a>
          <a
            class="list-group-item list-group-item-action"
            href="../lists.html"
            ><i class="fa-solid fa-list"></i>
            <span
              class="d-lg-none d-md-none d-sm-none d-xs-none d-xxl-inline d-xl-inline"
              >Lists</span>
          </a>
          <a
            class="list-group-item list-group-item-action"
            href="../profile.html"
            ><i class="fa-solid fa-user"></i>
            <span
              class="d-lg-none d-md-none d-sm-none d-xs-none d-xxl-inline d-xl-inline">Profile</span>
          </a>
          <a
            class="list-group-item list-group-item-action"
            href="#list-settings"
            ><i class="fa-solid fa-ellipsis"></i>
            <span
              class="d-lg-none d-md-none d-sm-none d-xs-none d-xxl-inline d-xl-inline"
              >More</span>
          </a>
        </div>
        <div class="d-grid col-12 mx-auto pt-1">
          <button type="button" class="btn btn-primary rounded-pill">
            Tuit
          </button>
        </div>
    `);
}
export default NavigationSidebar;