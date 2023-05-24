<template>
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ashkan's Task Manager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <router-link class="nav-link" to="/tasks" >
        Tasks
        </router-link>
      </ul>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
    </div>
</template>

<script >

export default {
    name : 'headerComp' , 
    setup () {

    }
}


</script>
<style>

.router-link-active {
  color: rgba(0,0,0,0.9) !important;
  border-bottom : 2px solid rgba(0 ,0 , 0 ,0.9) !important;
}

</style>

