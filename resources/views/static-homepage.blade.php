<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href={{ asset('css/bootstrap-reboot.min.css') }}>
        <link rel="stylesheet" href="https://use.typekit.net/hkc3dnk.css">
        <link rel="stylesheet" href={{ asset('css/homepage.css') }}>
    </head>
    <header>
        <div id="nav-icon">
            <img src="{{ asset('images/ui/icon-nav-mobile-hamburger-white.png') }}" />
        </div>
        <div id="logo">
            <h1>
                Aether_
            </h1>
        </div>
        <div id="nav-screen">
        </div>
        <nav id="nav-top">
            <ul>
                <li>
                    Journal
                </li>
                <li>
                    Lifehacks
                </li>
                <li>
                    Code
                </li>
                <li>
                    Writing
                </li>
                <li>
                    Drawing
                </li>
                <li>
                    Memes
                </li>
                <li>
                    Gaming
                </li>
                <li>
                    Miscellaneous
                </li>
            </ul>
        </nav>
    </header>
    <body>
        <div id="container">
            <article class="entry">
                <div class="bg-screen">
                </div>
                <div class="bg-video">
                    <video autoplay muted loop id="filename-here">
                        <source src="{{ asset('images/manhattan-bridge.mp4') }}" type="video/mp4">
                    </video>
                </div>
                <div class="entry-content">
                    <h1>
                        raw denim selvage kale chips pitchfork gochujang la croix
                    </h1>
                    <p>
                        tattooed cred actually freegan drinking vinegar tumblr put a bird on it cardigan umami. Bitters neutra woke skateboard twee. Heirloom small batch tbh poutine mixtape.
                    </p>
                </div>
            </article>
            <article class="entry" style="background-image:url({{ asset('images/brookfield.jpg') }})">
                <div class="bg-screen">
                </div>
                <div class="entry-content">
                    <h1>
                        pug taiyaki vinyl snackwave hammock butcher
                    </h1>
                    <p>
                        Yuccie narwhal prism try-hard kombucha tbh DIY retro cred lumbersexual tousled live-edge tumblr.
                    </p>
                </div>
            </article>
        </div>
    <script src="{{ asset('js/mobile-nav.js') }}" type="text/javascript"></script>
    </body>
</html>