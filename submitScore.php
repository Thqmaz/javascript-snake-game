<?php
if(isset($_POST['submit'])) {
    $name = $_POST['displayName'];
    $score = $_POST['score'];
    $dbconn = mysqli_connect('localhost', 'root', '', 'js-game');
    $sqlQuery = "INSERT INTO snake(`name`,`score`) VALUES('$name', $score)";
    $result = $dbconn->query($sqlQuery);
    if($result) {
        header("Location: index.php");
    }
}