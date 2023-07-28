---
title: "contatti"
description: "Come raggoungerci."
date: 2023-06-27T19:23:18+02:00
lastmod: 2023-06-27T19:23:18+02:00
draft: false
images: []
---



<ul>
<li>email: info@robotdazero.it</li>
</ul>

<details open="">
<summary>Usa il modulo sottostante per inviarci le tue comunicazioni
</summary>
<form action="https://formspree.io/f/xyybpbln" method="POST">
<label>
<h4>la tua email:</h4>
<input type="email" name="email">
</label>
<br>
<label>
<h4> messaggio:</h4>
<textarea cols="30" rows="3"  name="message"></textarea>
</label>
<br>
<br>
<button class="btn btn-primary btn-lg px-4 mb-2" type="submit">Invia il messaggio</button>
</form>
</details>



<form method="POST" action="/api/submit">
<div class="input">
<label for="name">Full Name</label>
<input id="name" name="name" type="text" />
</div>

<div class="input">
<label for="email">Email Address</label>
<input id="email" name="email" type="email" />
</div>

<div class="input">
<label for="referers">How did you hear about us?</label>
<select id="referers" name="referers">
<option hidden disabled selected value></option>
<option value="Facebook">Facebook</option>
<option value="Twitter">Twitter</option>
<option value="Google">Google</option>
<option value="Bing">Bing</option>
<option value="Friends">Friends</option>
</select>
</div>

<div class="checklist">
<label>What are your favorite movies?</label>
<ul>
<li>
<input id="m1" type="checkbox" name="movies" value="Space Jam" />
<label for="m1">Space Jam</label>
</li>
<li>
<input id="m2" type="checkbox" name="movies" value="Little Rascals" />
<label for="m2">Little Rascals</label>
</li>
<li>
<input id="m3" type="checkbox" name="movies" value="Frozen" />
<label for="m3">Frozen</label>
</li>
<li>
<input id="m4" type="checkbox" name="movies" value="Home Alone" />
<label for="m4">Home Alone</label>
</li>
</ul>
</div>

<button type="submit">Submit</button>
</form>
