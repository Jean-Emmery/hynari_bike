<template>
    <div>
        <form class="form-material">
  <div class="grix xs1 sm2">
    <div class="form-field">
      <input type="text" id="name" class="form-control rounded-1" />
      <label for="name">Name</label>
    </div>
    <div class="form-field">
      <input type="email" id="email" class="form-control rounded-1" placeholder="contact@example.com" />
      <label for="email">Email</label>
    </div>
    <div class="form-field col-sm2">
      <input type="text" id="subject" class="form-control rounded-1" disabled placeholder="Disabled input" />
      <label for="subject">Subject</label>
    </div>
    <div class="form-field col-sm2">
      <input type="text" id="address" class="form-control rounded-1" readonly />
      <label for="address">Address</label>
      <span class="form-helper text-center">You can click but not edit in readonly mode.</span>
    </div>
    <div class="form-field col-sm2">
      <label for="textarea">A textarea</label>
      <textarea id="textarea" class="form-control rounded-1"></textarea>
    </div>
  </div>
</form>
    </div>
</template>
