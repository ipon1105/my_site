<!DOCTYPE html>
<html lang="ru">

<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Обо мне</title>
    <link rel="stylesheet" href="../css/general.css">
    <link rel="stylesheet" href="../css/time.css">
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
    <script src="../js/time.js" charset="ISO-8859-1"></script>
    <script src="../js/localStorage.js" charset="ISO-8859-1"></script>
    <style>
        body main article div p {
            padding-top: 5%;
            padding-left: 5%;
        }

        img {
            width: 30%;
            height: 30%;
            float: left;
            border: 10px solid #ffffff;
        }
    </style>
</head>

<body>
    <?php
    echo "123";
    ?>

    <!--Шапка-->
    <header>
        <div>
            <div class="local-story">
                <img src="../img/icon_1.png">
                <a href="History.html">История просмотра</a>
            </div>
            <h1 id="page">Обо мне</h1>
            <!-- Навигация с гиперссылками -->
            <nav>
                <ul>
                    <li onmouseover="document.getElementById('img_1').src='../img/figure_01.png';"
                        onmouseout="document.getElementById('img_1').src='../img/figure_00.png';">
                        <img id="img_1" src="../img/figure_00.png" >
                        <a href="MainPage.html">Главная страница</a>
                    </li>
                    <li onmouseover="document.getElementById('img_2').src='../img/figure_02.png';"
                        onmouseout="document.getElementById('img_2').src='../img/figure_02.png';">
                        <img id="img_2" src="../img/figure_02.png">
                        <a href="AboutMePage.php">Обо мне</a>
                    </li>
                    <li onmouseover="document.getElementById('img_3').src='../img/figure_03.png';"
                        onmouseout="document.getElementById('img_3').src='../img/figure_02.png';"
                        id="li_top_of_submenu" class="top_of_submenu">
                        <img id="img_3" src="../img/figure_02.png">
                        <a>Мои интересы </a>
                        <ul id="ul_submenu" class="submenu">
                            <li><a href="MyInterestingPage.html#my_1">Моя любимая музыка</a></li>
                            <li><a href="MyInterestingPage.html#my_2">Любимые выди спорта</a></li>
                            <li><a href="MyInterestingPage.html#my_3">Мои любимые книги</a></li>
                            <li><a href="MyInterestingPage.html#my_4">Мои любимые фильмы</a></li>
                            <li><a href="MyInterestingPage.html#my_5">Моя любимая</a> </li>
                        </ul>
                    </li>
                    <li onmouseover="document.getElementById('img_4').src='../img/figure_04.png';"
                        onmouseout="document.getElementById('img_4').src='../img/figure_03.png';">
                        <img id="img_4" src="../img/figure_03.png">
                        <a href="StudiesPage.html">Учёба</a>
                    </li>
                    <li onmouseover="document.getElementById('img_5').src='../img/figure_05.png';"
                        onmouseout="document.getElementById('img_5').src='../img/figure_04.png';">
                        <img id="img_5" src="../img/figure_04.png">
                        <a href="PhotoAlbomPage.html">Фотоальбом</a>
                    </li>
                    <li onmouseover="document.getElementById('img_6').src='../img/figure_06.png';"
                        onmouseout="document.getElementById('img_6').src='../img/figure_05.png';">
                        <img id="img_6" src="../img/figure_05.png">
                        <a href="ContactsPage.html">Контакт</a>
                    </li>
                    <li onmouseover="document.getElementById('img_7').src='../img/figure_07.png';"
                        onmouseout="document.getElementById('img_7').src='../img/figure_06.png';">
                        <img id="img_7" src="../img/figure_06.png">
                        <a href="TestPage.html">Тест по дисциплине</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <!--Главное содержимое-->
    <main>
        <article>
            <div>
                <img src="../img/image_1.jpg" alt="Фото меня">

                <h2>Рождение</h2>
                Жизнь моя началась в Чебоксарах, но начал осознавать себя Я в Москве.<br>
                Мои родители будуче молодыми ещё активно гнались за возможностями, так и попали они в Москву, а Я с
                ними. Там меня быстро пристроили в ближайший детский сад, где лет 6 Я прожил самый простой период в моей
                жизни. По окончанию этих 6 лет, мои родители осознали, что жить им вместе будет тяжело и, порешив на
                том, что будет лучше для них, разошлись кто-куда, а мнение маленького ребёнка на тот момент никого не
                интересовало.<br>
                Я же остался с матерью, который было и так тяжело, но сдаваться никто и не собирался. Она переехала в
                новую квартиру, меня устроила в школу, а сама пошла на работу. Так и начался мой долгий путь к осознанию
                себя, которой до сих пор продолжается и будет продолжаться вплоть до самой смерти.<br>
                <h2>Школа</h2>
                В школе Я сразу не смог найти себе место. Уж очень трудно мне довалось общаться со сдешним контенгентом,
                что и подорвало мой интерес как к самой школе, так и к учёбе. Со временем мои оценки были похожи на
                сборник разного рода письменности двоек. Но беда не приходит одна и Я влюбился. Девушка была для меня
                небывалой красоты, лучшая в классе, если не в школе. Каждый день Я пытался проявлять знаки внимание, всё
                меньше уделяю учёбе. Но после любой чёрной полосы идёт белая. И вот Я начал себя осознавать и стараться
                учиться, как в мой мир нагрянула ещё одна детская беда. Переезд. Он для ребёнка означал конец всего того
                единственного, что было в его жизни - Друзей. Но мне это не сильно грозила, хотя и на новом месте было
                не легко. Там Я пошёл в новую школу 5 классом, где обучился год и построил новые отношения. И как знак
                судьбы меня ждал ещё один переезд и поход в новую школу. В кадетскую. Сначало для меня это было сродне
                страху неизвестности, но как окажется дальше это было моё спасение и счастье. Именно кадетская школа
                дала мне так не хватающие мне дисциплину, желание учиться и друзей. Ничто так не сближает, как
                маршировка часами на плацу. Так Я и проучился с 6 по 11. К тому времени Я уже знал и кем хочу быть и что
                хочу делать.<br>
                Но мне до сих пор печально за тех, кто не определися и не смог выбрать себе путь в жизнь. Так Я поступил
                в ВУЗ, где сейчас и пишу этот рассказ, понимая, что его так и никто не прочтёт.

            </div>
        </article>
    </main>

    <!--Подвал-->
    <footer></footer>

</body>

</html>