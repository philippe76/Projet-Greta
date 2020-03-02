// ------------- VARIABLE CONTENANT LE HEADER ------------- //

const header = ` <header>
    <img src="img/plane400.png" alt="plane flying around earth" id="nav_logo" />

    <div id="nav_title">
    <h2 id="title_desk">TAKE A TRIP AROUND THE WORLD ...</h2>
    <h2 id="title_mobile">TAKE A TRIP AROUND <br /> THE WORLD ... </h2>
    </div>

    <i class="fas fa-bars" id="burger"></i>

    <nav id="nav_menu">
    <ul>
        <li><a href="index.html">HOME</a></li>
        <li><a href="about.html">ABOUT</a></li>
        <li><a href="tricks.html">TRICKS</a></li>
        <li><a href="blog.html">BLOG</a></li>
        <li><a href="contact.html">CONTACT</a></li>
        <li><i class="fas fa-times" id="cross"></i></li>
    </ul>
    </nav>
  </header>`;

$("#header").html(header);

// ------------- ANIMATION MENU BURGER ------------- //

$(function() {
  $("#burger").click(function() {
    $("#nav_title").toggle();
    $("#nav_menu")
      .toggle()
      .css({ position: "relative", "z-index": 20 });
    $("#nav_menu ul").css({ "padding-left": 5 });
    $("#burger").toggle();
    $("#nav_logo").css({
      position: "absolute",
      opacity: 0.3,
      top: 25,
      left: 250
    });
  });

  $("#cross").click(function() {
    $("#nav_logo").css({ position: "static", opacity: 1 });
    $("#nav_menu")
      .toggle()
      .css({ position: "static" });
    $("#nav_title").toggle();
    $("#burger").toggle();
  });
});
