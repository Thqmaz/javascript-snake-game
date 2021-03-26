<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="">
    <meta property="og:type" content="">
    <meta property="og:url" content="">
    <meta property="og:image" content="">

    <link rel="manifest" href="site.webmanifest">
    <link rel="apple-touch-icon" href="icon.png">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <meta name="theme-color" content="#fafafa">
</head>

<body>

    <!-- Add your site or application content here -->

    <div id="board">
        <h2 id="scoreel">Score: <span id="scoreElement"></span></h2>
        <div id="gameover" style="padding-left:20px;">
            <h2><b>GAME OVER!</b></h2>
            <span id="gameSummary"></span> <br><br>Save your score by filling in your name. Try and get in the top 10!
            <form action="submitScore.php" method="post">
                <label>Name: </label>
                <input type="text" name="displayName">
                <input type="hidden" name="score" id="score">
                <input type="submit" name="submit" value="Submit score">
            </form>
            <p><b>Push spacebar to try again!</b></p>
        </div>
        <div id="scoreBoard">
            <h2>Scoreboard</h2>
            <ul>
                <?php
                $dbconn = mysqli_connect('localhost', 'root', '', 'js-game');
                $sqlQuery = "SELECT * FROM `snake` ORDER BY `score` DESC";
                $result = $dbconn->query($sqlQuery);
                while($row = mysqli_fetch_array($result)) {
                ?>
                <li><?php echo $row['name'] . " | " . $row['score'] ?></li>
                <?php
                }
                ?>
            </ul>
        </div>
    </div>

    <script src="js/vendor/modernizr-3.11.2.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>

    <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
    <script>
        window.ga = function() {
            ga.q.push(arguments)
        };
        ga.q = [];
        ga.l = +new Date;
        ga('create', 'UA-XXXXX-Y', 'auto');
        ga('set', 'anonymizeIp', true);
        ga('set', 'transport', 'beacon');
        ga('send', 'pageview')
    </script>
    <script src="https://www.google-analytics.com/analytics.js" async></script>
</body>

</html>

</html>