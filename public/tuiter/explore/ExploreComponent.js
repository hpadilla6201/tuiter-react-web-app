import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
    <div class="row">
    <div class="col-10">
      <div class="input-group">
        <span class="bg-white wd-rounded-bottom-left-1 wd-rounded-top-left-1 input-group-addon transparent border-start border-top border-bottom p-2" id="basic-addon1">
          <i class="fa-solid fa-magnifying-glass" style="color:gray"></i>
        </span>
        <input type="text" class="form-control border-start-0 wd-rounded-bottom-right-1 wd-rounded-top-right-1" placeholder="Search Tuiter"/>
      </div>
    </div>
    <div class="col-2">
      <i class="fa-solid fa-gear fa-xl align-middle mt-2"></i>
    </div>
  </div>
  <!-- Tabs -->
  <div class="mt-2">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"
          >For You</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
      <li
        class="nav-item d-block d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block"
      >
        <a class="nav-link" href="#">Sports</a>
      </li>
      <li
        class="nav-item d-block d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block"
      >
        <a class="nav-link" href="#">Entertainment</a>
      </li>
    </ul>
  </div>
  <!-- Image -->
  <div class="mt-2 position-relative">
    <img class="w-100" src="../../images/CristianoRonaldo.jpeg" />
    <h2
      class="overlay-text position-absolute fixed-bottom margin-left-10 text-white"
    >
      Cristiano Ronaldo
    </h2>
  </div>
  ${PostSummaryList()}
    `);
}
export default ExploreComponent;
