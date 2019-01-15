<?php
	$menu[0][0] = "link 1";
	$menu[0][1] = "index.php";
	$menu[1][0] = "link 2";
	$menu[1][1] = "2.php";
	echo "<ul class=\"menu\">";
	for ($i = 0; $i < count($menu); $i++) 
	{
		if ("http://".$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'] == "http://".$_SERVER['SERVER_NAME'].$menu[$i][1]) {
			echo "<li class=\"active\">".$menu[$i][0]."</li>";
		}
		else {
			echo "<li><a href=\"".$menu[$i][1]."\">".$menu[$i][0]."</a></li>";
		}
	}
	echo "</ul>";
?>

// в меню выделяет пункт стилем через id текущей страницы
