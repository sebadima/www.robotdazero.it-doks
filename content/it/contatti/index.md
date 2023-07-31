---
title: "Contatti"
description: "Come raggoungerci."
date: 2023-06-27T19:23:18+02:00
lastmod: 2023-06-27T19:23:18+02:00
draft: false
images: []
---

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    position: relative;
    min-width: 1100px;
    min-height: 550px;
    display: flex;
}

.container .contactInfo {
    position: absolute;
    top: 40px;
    background-color: #F8507A;
    width: 320px;
    padding: 80px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0,0,0,0.5);
    align-items: center;
    justify-content: center;
    z-index: 1;
    height: calc(100% - 80px);
}

.container .contactInfo h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
}

.container .contactInfo ul.info {
    position: relative;
    margin: 20px 0;
}

.container .contactInfo ul.info li {
    position: relative;
    list-style-type: none;
    display: flex;
    margin: 20px 0;
    cursor: pointer;
    align-self: flex-start;
}

.container .contactInfo ul.info li span:nth-child(1) {
    width: 30px;
    min-width: 30px;
}

.container .contactInfo ul.info li span img {
    max-width: 100%;
    filter: invert(1);
    opacity: 0.5;
}

.container .contactInfo ul.info li span:nth-child(2) {
    color: #fff;
    margin-left: 10px;
    font-weight: 300;
    opacity: 0.5;
}

.container .contactInfo ul.info li:hover span img,
.container .contactInfo ul.info li:hover span:nth-child(2) {
    opacity: 1;
}

.container .contactInfo ul.socialIcon {
    position: relative;
    display: flex;
}

.container .contactInfo ul.socialIcon li {
    list-style-type: none;
    margin-right: 15px;
}

.container .contactInfo ul.socialIcon li a img {
    filter: invert(1);
    opacity: 0.5;
}

.container .contactInfo ul.socialIcon li a img:hover {
    opacity: 1;
}

.container .contactForm {
    position: absolute;
    background-color: #fff;
    padding: 70px 50px;
    padding-left: 250px;
    margin-left: 150px;
    height: 100%;
    box-shadow: 0 50px 50px rgba(0,0,0,0.5);
}

.container .contactForm h2 {
    font-size: 24px;
    font-weight: 500;
}

.container .contactForm .formBox {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;
}

.container .contactForm .formBox .inputBox {
    position: relative;
    margin: 0 0 35px 0;
}

.container .contactForm .formBox .inputBox.w50 {
    width: 47%;
}

.container .contactForm .formBox .inputBox.w100 {
    width: 100%;
}

.container .contactForm .formBox .inputBox input,
.container .contactForm .formBox .inputBox textarea {
    width: 100%;
    resize: none;
    padding: 10px 5px;
    font-size: 18px;
    color: #333;
    border: none;
    outline: none;
    border-bottom: 1px solid #777;
}

.container .contactForm .formBox .inputBox span {
    position: absolute;
    left: 5px;
    padding: 5px 0;
    pointer-events: none;
    font-size: 17px;
    font-weight: 300;
}

.container .contactForm .formBox .inputBox input:focus ~ span,
.container .contactForm .formBox .inputBox input:valid ~ span,
.container .contactForm .formBox .inputBox textarea:focus ~ span,
.container .contactForm .formBox .inputBox textarea:valid ~ span {
    transform: translateY(-20px);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    color: deeppink;
    font-family: arial;
}

.container .contactForm .formBox .inputBox input[type="submit"] {
    position: relative;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: none;
    padding: 12px;
}

.container .contactForm .formBox .inputBox input[type="submit"]:hover {
    background-color: #F8507A;
    font-weight: 500;
}
</style>

<h3>Invia un messaggio</h3>
<h4>Chiedi e ottieni solo le informazioni che ti interessano</h4>

<section>
<div class="container">
<div class="contactInfo">
<div>
<ul class="info">
<h3 style="color:#ffffff;">INFO</h3>
<p style="color:#eeeeee;">Via Acradina 1</p>
<p style="color:#eeeeee">96100 - Siracusa,</p>
<p style="color:#eeeeee">info@robordazero.it</p>
<p style="font-size: 16px; color:#eeeeee">+39 351 51 33 273</p>
</ul>
</div>

<ul class="socialIcon">
<li><a href="https://twitter.com/robofromscratch"><img src="images/1.png" alt=""></a></li>
<li><a href="https://www.linkedin.com/in/sergiorame/"><img src="images/2.png" alt=""></a></li>
<li><a href="#"><img src="images/3.png" alt=""></a></li>
<li><a href="#"><img src="images/4.png" alt=""></a></li>
</ul>
</div>

<div class="contactForm">
<form action="https://formspree.io/f/xyybpbln" method="POST">
<h2>Invia un messaggio, i campi sono tutti obbligatori</h2>
<div class="formBox">
<div class="inputBox w50">
<input type="text" name="" id="" required>
<span>Nome</span>
</div>
<div class="inputBox w50">
<input type="email" name="email" id="" required>
<span>Email</span>
</div>
<div class="inputBox w100">
<textarea name="message"></textarea>
<span>Scrivi qui il tuo messaggio.</span>
</div>
<div class="inputBox w100">
<input type="submit" value="Invia">
</div>
</div>
</div>
</div>
</form>
</section>

<!--

<details open="">
<summary>Usa il modulo sottostante per inviarci le tue comunicazioni </summary>

<form action="https://formspree.io/f/xyybpbln" method="POST">
<input type="hidden" name="_language" value="it"/>
<label>
<h4>La tua email:</h4>
<input type="email" name="email">
</label>
<br>
<label>
<h4>Messaggio:</h4>
<textarea cols="28" rows="3"  name="message"></textarea>
</label>
<br>
<br>
<button class="btn btn-primary btn-lg px-4 mb-2" type="submit">Invia il messaggio</button>
</form>

</details>

-->
