<template>
  <div class="home">
    <div class="wrapper">
      <div class="Container">
        <div class="header">
        <img src="../assets/hynari-logo.png" alt="" width="300">
          <h1>HYNARI BIKE</h1>
          <p>Site de vélos en libre service</p>
          <a class="button-home rounded-2" href="https://hynari.fr/" target="__blank">Découvrir</a>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.wrapper {
  width: auto;
  height: 99.99vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: opacity(60%);
}
.Container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  text-align: center;
}
.header h1 {
  font-family: 'Raleway', sans-serif;
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  color: #000;
  padding: 20px 8px;
}
.header p {
  font-family: 'Raleway', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  color: #000;
  padding: 10px 15px;
  margin: 0px 5px 50px 0px !important;
}
.button-home {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.15rem;
  color: white;
  background-color: #ff364f;
  padding: 20px 30px !important;
  border: none;
  cursor: pointer;
}

</style>
