import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import GalleryCard3 from '../components/gallery-card3'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bare Another Goldfinch</title>
        <meta property="og:title" content="Bare Another Goldfinch" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <span className="home-logo">3MINute french</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <span>Home</span>
              <span className="home-nav2">Courses</span>
              <span className="home-nav3">Lessons</span>
              <span className="home-nav4">Images</span>
              <span className="home-nav5">Audio</span>
            </nav>
            <div className="home-buttons"></div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="home-logo1">WEBSITE</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav11">Home</span>
                <span className="home-nav21">Courses</span>
                <span className="home-nav31">Lessons</span>
                <span className="home-nav41">Images</span>
                <span className="home-nav51">Audio</span>
              </nav>
              <div className="home-buttons1">
                <button className="home-login button">Login</button>
                <button className="home-register button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container01">
            <div className="home-container02">
              <Script
                html={`<!DOCTYPE html>
<html>
<head>
    <style>
        .audio-control {
            cursor: pointer;
        }
        #audio-icon {
            font-size: 30px; /* Adjust the size here */
        }
    </style>
</head>
<body>
    <div class="audio-control" onclick="toggleAudio()">
        <span id="audio-icon">🔊</span>
        <audio id="audio" controls style="display: none">
            <source src="https://drive.google.com/file/d/1xaiBlK6dQDSgIuTBJAFRrdkhebZaRYG4/view?usp=drive_link" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
    <script>
        var audio = document.getElementById("audio");
        var audioIcon = document.getElementById("audio-icon");

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                audioIcon.innerHTML = "🔊"; // Speaker on
            } else {
                audio.pause();
                audioIcon.innerHTML = "🔈"; // Speaker off
            }
        }
    </script>
</body>
</html>
`}
              ></Script>
            </div>
          </div>
          <img
            alt="image"
            src="/Notebook images/1a-1100w.jpg"
            className="home-image"
          />
          <div className="home-container03">
            <div className="home-container04">
              <Script
                html={`<!DOCTYPE html>
<html>
<head>
    <style>
        .audio-control {
            cursor: pointer;
        }
        #audio-icon {
            font-size: 30px; /* Adjust the size here */
        }
    </style>
</head>
<body>
    <div class="audio-control" onclick="toggleAudio()">
        <span id="audio-icon">🔊</span>
        <audio id="audio" controls style="display: none">
            <source src="https://drive.google.com/file/d/1Tq8nTrnVBLA7s1QnilvC8_aTJh5eDn_R/view?usp=drive_link" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
    <script>
        var audio = document.getElementById("audio");
        var audioIcon = document.getElementById("audio-icon");

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                audioIcon.innerHTML = "🔊"; // Speaker on
            } else {
                audio.pause();
                audioIcon.innerHTML = "🔈"; // Speaker off
            }
        }
    </script>
</body>
</html>
`}
              ></Script>
            </div>
          </div>
          <div className="home-container05">
            <div className="home-container06">
              <Script
                html={`<!DOCTYPE html>
<html>
<head>
    <style>
        .audio-control {
            cursor: pointer;
        }
        #audio-icon {
            font-size: 30px; /* Adjust the size here */
        }
    </style>
</head>
<body>
    <div class="audio-control" onclick="toggleAudio()">
        <span id="audio-icon">🔊</span>
        <audio id="audio" controls style="display: none">
            <source src="https://drive.google.com/file/d/14gx7WC9n9a2FHLOFIYekT5KRDv22lwGz/view?usp=drive_link" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
    <script>
        var audio = document.getElementById("audio");
        var audioIcon = document.getElementById("audio-icon");

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                audioIcon.innerHTML = "🔊"; // Speaker on
            } else {
                audio.pause();
                audioIcon.innerHTML = "🔈"; // Speaker off
            }
        }
    </script>
</body>
</html>
`}
              ></Script>
            </div>
          </div>
          <div className="home-container07">
            <div className="home-container08">
              <Script
                html={`<!DOCTYPE html>
<html>
<head>
    <style>
        .audio-control {
            cursor: pointer;
        }
        #audio-icon {
            font-size: 30px; /* Adjust the size here */
        }
    </style>
</head>
<body>
    <div class="audio-control" onclick="toggleAudio()">
        <span id="audio-icon">🔊</span>
        <audio id="audio" controls style="display: none">
            <source src="https://drive.google.com/file/d/1IV-zd1QPZcuXpdDW-4RlTUt9TsbPH4zt/view?usp=drive_link" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
    <script>
        var audio = document.getElementById("audio");
        var audioIcon = document.getElementById("audio-icon");

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                audioIcon.innerHTML = "🔊"; // Speaker on
            } else {
                audio.pause();
                audioIcon.innerHTML = "🔈"; // Speaker off
            }
        }
    </script>
</body>
</html>
`}
              ></Script>
            </div>
          </div>
          <div className="home-container09">
            <div className="home-container10">
              <Script
                html={`<!DOCTYPE html>
<html>
<head>
    <style>
        .audio-control {
            cursor: pointer;
        }
        #audio-icon {
            font-size: 30px; /* Adjust the size here */
        }
    </style>
</head>
<body>
    <div class="audio-control" onclick="toggleAudio()">
        <span id="audio-icon">🔊</span>
        <audio id="audio" controls style="display: none">
            <source src="https://drive.google.com/file/d/16zjCg2tGm4dvktk6d1VYj7bUmjQhUBkS/view?usp=drive_link" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
    <script>
        var audio = document.getElementById("audio");
        var audioIcon = document.getElementById("audio-icon");

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                audioIcon.innerHTML = "🔊"; // Speaker on
            } else {
                audio.pause();
                audioIcon.innerHTML = "🔈"; // Speaker off
            }
        }
    </script>
</body>
</html>
`}
              ></Script>
            </div>
          </div>
          <div className="home-container11">
            <div className="home-container12">
              <Script
                html={`<!DOCTYPE html>
<html>
<head>
    <style>
        .audio-control {
            cursor: pointer;
        }
        #audio-icon {
            font-size: 30px; /* Adjust the size here */
        }
    </style>
</head>
<body>
    <div class="audio-control" onclick="toggleAudio()">
        <span id="audio-icon">🔊</span>
        <audio id="audio" controls style="display: none">
            <source src="https://drive.google.com/file/d/1gATm3-vvDDr5tTOBG4FVeJKp6UqjUYt6/view?usp=drive_link" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
    <script>
        var audio = document.getElementById("audio");
        var audioIcon = document.getElementById("audio-icon");

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                audioIcon.innerHTML = "🔊"; // Speaker on
            } else {
                audio.pause();
                audioIcon.innerHTML = "🔈"; // Speaker off
            }
        }
    </script>
</body>
</html>
`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-hero2">
              <img
                alt="image"
                src="/Notebook images/1b-1000w.jpg"
                className="home-image1"
              />
              <div className="home-container13">
                <div className="home-container14">
                  <Script
                    html={`<!DOCTYPE html>
<html>
<head>
    <style>
        .audio-control {
            cursor: pointer;
        }
        #audio-icon {
            font-size: 30px; /* Adjust the size here */
        }
    </style>
</head>
<body>
    <div class="audio-control" onclick="toggleAudio()">
        <span id="audio-icon">🔊</span>
        <audio id="audio" controls style="display: none">
            <source src="https://drive.google.com/file/d/1yKxqhPprQDZh8I-H7m7v_heqcC6GxFlm/view?usp=drive_link" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
    <script>
        var audio = document.getElementById("audio");
        var audioIcon = document.getElementById("audio-icon");

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                audioIcon.innerHTML = "🔊"; // Speaker on
            } else {
                audio.pause();
                audioIcon.innerHTML = "🔈"; // Speaker off
            }
        }
    </script>
</body>
</html>
`}
                  ></Script>
                </div>
              </div>
              <div className="home-container15">
                <div className="home-container16">
                  <Script
                    html={`<!DOCTYPE html>
<html>
<head>
    <style>
        .audio-control {
            cursor: pointer;
        }
        #audio-icon {
            font-size: 30px; /* Adjust the size here */
        }
    </style>
</head>
<body>
    <div class="audio-control" onclick="toggleAudio()">
        <span id="audio-icon">🔊</span>
        <audio id="audio" controls style="display: none">
            <source src="https://drive.google.com/file/d/14gx7WC9n9a2FHLOFIYekT5KRDv22lwGz/view?usp=drive_link" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
    <script>
        var audio = document.getElementById("audio");
        var audioIcon = document.getElementById("audio-icon");

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                audioIcon.innerHTML = "🔊"; // Speaker on
            } else {
                audio.pause();
                audioIcon.innerHTML = "🔈"; // Speaker off
            }
        }
    </script>
</body>
</html>
`}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing"></div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">
            Website Course Gallery
          </h1>
          <span className="home-gallery-sub-heading">
            Explore some of the images from our website course
          </span>
          <div className="home-container17">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1522204538344-922f76ecc041?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTEwMzc5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTEwMzc5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTEwMzc5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTEwMzc5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1422246358533-95dcd3d48961?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTEwMzc5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTEwMzc5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1474377207190-a7d8b3334068?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTEwMzc5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTEwMzc5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1491234323906-4f056ca415bc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTEwMzc5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1631995390084-cb82295cd2c0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTEwMzc5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTEwMzc5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTEwMzc5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Build Professional Websites
          </h1>
          <span className="home-banner-sub-heading">
            Master the art of web design and development
          </span>
          <button className="home-banner-button button">Explore Courses</button>
        </div>
      </div>
      <div className="home-faq"></div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container18">
            <span className="home-logo2">WEBSITE</span>
            <nav className="home-nav1 home-nav1">
              <span className="home-nav12">Home</span>
              <span className="home-nav22">Courses</span>
              <span className="home-nav32">Lessons</span>
              <span className="home-nav42">Images</span>
              <span className="home-nav52">Audio</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container19">
            <span className="home-text">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
