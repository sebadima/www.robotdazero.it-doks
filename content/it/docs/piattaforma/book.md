---
title: "Ti richiamiamo noi"
description: "La Dashboard di RBT0"
lead: "Come eseguire alcuni semplici task"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "prologue"
weight: 130
toc: true
---

{{< alert icon="💡" text="Se vuoi parlare direttamente con un esperto puoi lasciare il tuo recapito telefonico e un nostro incaricato ti contatterà entro 30 minuti." />}}



<style>

.lead {
  padding-top:    5px;
  padding-bottom: 5px;
  padding-right: 10px;
  padding-left:  12px;
}

h5 {
  font-weight: 700;
}

h3 {
  text-transform: uppercase;
  color: #5f7c57;
}

.bz-form {width: 684px; margin: 200px auto 0; }

.bz-container {
  width: 100%;
  background-color: #fff;
  padding: 30px 40px 20px;
  border-radius: 7px;
  border: 1px solid #a4b1c1;
}

.bz-btmmargin {
  margin-bottom: 14px !important;
}
.bz-topmargin {
  margin-top: 6px !important;
}

.bz-left {float: left; width: 49%; padding-right: 2%; min-width: 300px;}
.bz-right {float: left; width: 49%; min-width: 300px;}
.bz-clear {clear: both;}

input[type='text'], input[type='email'] {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: 0;
  display: block;
  width: 100%;
  padding: 7px;
  border: 0;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin-bottom: 10px;
  height: 45px;
}

input[type='submit'] {
  float: right;
  background-color: #007D7E;
  border: none;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.40);
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

/* input[type='submit']:hover {
  background-color: #000000;
} */

@media only screen and (max-width: 600px) {
  .bz-container {padding: 10px;}
  .bz-form {width: 100%;}
  .bz-left, .bz-right { width: 100%; padding: 0 10px;}
  input[type='submit'] {margin-left: 10px;}
}
</style>


<img width="50%" height="50%" class="x figure-img img-fluid lazyload blur-up" src="images/106.svg" alt="">

<div class="bz-container">
  <form action="https://formspree.io/f/xqkveyej" method="POST">
    <div class="bz-left">
      <input type="hidden" name="_language" value="it"/>
      <input class="bz-btmmargin" type="text" id="nome"     name="nome"     placeholder="Nome"                   required/>
      <input class="bz-btmmargin" type="text" id="telefono" name="telefono" placeholder="Cellulare"              required/>
      <input class="bz-btmmargin" type="text" id="orario"   name="orario"   placeholder="Orario di preferenza" required/>
    </div>
    <div class="bz-clear"></div>
    <input class="btn btn-primary btn-lg px-4 mb-2" type="submit" value="Invia">
    <div class="bz-clear"></div>
  </form>
</div>
