
function manoj2(){var a=document.getElementsByTagName("a");
	var b =document.getElementById("searcj").value.toUppperCase();
	for (var i = 0; i <a.length; i++) {if (a[i].innerHTML.toUppperCase().indexOf(b)>-1){
		a[i].style.display= "";
	}	
	else {a[i].style.display= "none";}
	}
}


function manoj() { document.getElementById("sidenav").classList.remove("sidebar2");
document.getElementById("m1").classList.remove("main2");
}





function manoj1() { document.getElementById("sidenav").classList.add("sidebar2");
document.getElementById("m1").classList.add("main2");


}
