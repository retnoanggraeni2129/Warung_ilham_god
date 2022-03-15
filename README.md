# Warung_ilham_god
HTML &amp; CSS Website restauran
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheet.css">
    <title>A014's Team</title>
    <style>
      body {
        height: 7000px;
        width: 900px;
        padding-top: 0px;
        margin: auto;
        box-sizing: border-box;
      }

      .header {
        width: 900px;
        height: 100px;
        position: fixed;
        background-color: rgb(185, 185, 172);
        z-index: 1;
        box-sizing: border-box;
      } 

      .logo {
        width: 20%;
        height: 100%;
        float: left;
        background-color: rgb(185, 185, 172); ;
      }

      .logo img {
        width: 180px;
        height: 100px;
        padding: 20px;
        box-sizing: border-box;
      }

      .menu {
        width: 70%;
        height: 100%;
        float: left;
        background-color: rgb(185, 185, 172);;
      }
      
      .menu ul {
        padding: 30px 125px;
      }
      
      .menu li {
        float: left;
        list-style: none;
        padding: 0px 15px 5px; 
        font-size: 14px;
        color: rgb(36, 30, 22);
        text-decoration: none;
      }

      .menu li a:link {
        color: rgb(36, 30, 22);
        text-decoration: none;
      }
      
      .menu li a:visited {
        color: rgb(36, 30, 22);
      }

      .shop {
        width: 10%;
        height: 100%;
        float: left;
      }

      .shop img {
        height: 100px;
        width: 90px;
        padding: 30px;
        box-sizing: border-box;
        background-color: (185, 185, 172);
      }

      /* Use a media query to add a break point at 250px: */
      @media screen and (max-width: 250px) {
        .logo .menu .shop .top-body {
          width: 100%;
        }
      }

      .top-body {
        width: 100%;
        padding-top: 100px;
        z-index: 0;
        box-sizing: border-box;
      } 

      .top-two {
        width: 55%;
        height: 300px;
        float: left;
        box-sizing: border-box;
        background-color: #5dca88;
      }

      .box {
        padding: 45px 20px;
        box-sizing: border-box;
        width: 100%;
      }

      .top-two span {
        margin-left: 20px;
        padding: 7px 15px;
      }

      .btn {
        border-radius: 8px;
        background-color: #e79830;
        box-shadow: 0 7px #684802;
        margin-top: 20px;
      }

      .massage {
        border-radius: 8px;
        background-color: #5dca88;
        cursor: pointer;
        box-shadow: 0 7px #1a7940;
      }

      .top-two h2 {
        padding: 10px 0px 0px 25px;
      }

      .top-two p {
        padding: 0px 25px 10px 25px;
        text-align: justify;
      }

      .top-sidebar {
        width: 45%;
        float: left;
        box-sizing: border-box;
      }

      .top-sidebar img {
        width: 100%;
        height: 300px;
        padding: 0px;
        box-sizing: border-box;
      }

      .bottom-top {
        width: 900px;
        height: 170px;
        float: left;
        margin: auto;
        box-sizing: border-box;
      }

      .box-info {
        float: left;
        width: 300px;
        height: 150px;
        display: inline-block;
        padding-top: 30px;
        box-sizing: border-box;
      }

      .box-info img {
        width: 80px;
        float: left;
        height: 100px;
        padding: 15px 5px;
        box-sizing: border-box;
      }

      .image-title {
        width: 220px;
        float: left;
        height: 130px;
        padding: 5px;
        margin: auto;
        box-sizing: border-box;
      }

      .image-title h5 {
        margin-top: 0px;
      }

      .image-title p {
        text-align: left;
      }

      /* Use a media query to add a break point at 250px (for image in body) */
      @media screen and (min-width: 250px) {
        .top-two .box .top-sidebar .bottom-top {
          width: 100%;
        }
      }
    </style>  
  </head>
  
  <body>
    
    <!-- container for the top of the web page --> 
    <div class="header">
      <!-- top navbar contains the website menu display --> 
      <div class="logo">
        <img src="D:\koding\html_lesson\pizza_hut.png">
      </div>
      <div class="menu">
        <ul>
          <li><a href="'">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Reservation</a></li>
          <li><a href="">Contact us</a></li>
        </ul>
      </div>
      <div class="shop">
        <img src="D:\koding\html_lesson\keranjang.png">
      </div>
    </div>
      
    <!-- the second page from the top containing the latest information from the website -->
    <div class="top-body">
      <div class="top-two"> 
        <div class="top-two box">
          <span class="btn">Disc 50% For All Products</span>
          <h2>Welcome to Ilham God's Menu</h2>
          <p class="img-title">Khusus buat kalian yang mager! Pilih menu delivery order dan tentukan makanan kesukaanmu sekarang!!</p>
          <span class="massage">Explore Now</span>  
        </div>
      </div>
      <div class="top-sidebar">
        <img src="D:\koding\html_lesson\rendang.jpg" style="max-width:600px;">
      </div>
      <div class="bottom-top">
        <!-- The box inside the bottom-top -->
        <div class="box-info">
          <img src="D:\koding\html_lesson\discount_duapuluhpersen.jpg">
          <div class="image-title">
            <h5>Dapatkan Voucher Disc 20%</h5> 
            <p>untuk pemesanan 14 Maret 2022 s.d  20 Maret 2022</p>
          </div>
        </div>
        <div class="box-info">
          <img src="D:\koding\html_lesson\Gorengan.png">
          <div class="image-title">
            <h5>Side Dishes</h5>
            <p>Tersedia berbagai menu gorengan premium, dibuat dari bahan segar dan berkualitas.</p>
          </div>  
        </div>
        <div class="box-info">
          <img src="D:\koding\html_lesson\delivery_order.png">
          <div class="image-title">
            <h5>Pesan Antar</h5>
            <p>Dapatkan banyak keuntungan dengan memilih layananpesan antar kami.</p>
          </div>
        </div>
      </div>
    </div> 
      
  </body>
</html>
