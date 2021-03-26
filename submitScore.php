<?php
if(isset($_POST['submit'])) {
    $name = $_POST['displayName'];
    $score = $_POST['score'];
    $dbconn = mysqli_connect('localhost', 'root', '', 'js-game');
    $sqlQuery = "INSERT INTO snake(`name`,`score`, `datetime`) VALUES('$name', $score, now())";
    $result = $dbconn->query($sqlQuery);
    if($result) {
        header("Location: index.html");
    }
}