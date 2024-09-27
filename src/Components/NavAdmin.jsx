import React from 'react'

const NavAdmin = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <a class="navbar-brand" href="#">ELDEREASE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/caretaker">Caretaker <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/driver">Transportation</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Educational support</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Profile details</a>
      </li>
    </ul>
  </div>
</nav>

    </div>
  )
}

export default NavAdmin