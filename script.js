
	var circles = [];
	
	function onKeyDown(event) {
	if(keyData[event.key]) {
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500)
	newCircle.fillColor = keyData[event.key].color;
	keyData[event.key].sound.play();
	circles.push(newCircle);	
		}
	}
	
	// var animatedCircle = new Path.Circle(new Point(300,300), 100);
	// animatedCircle.fillColor = "blue";
	
	function onFrame(event) {
	for(var i = 0; i < circles.length; i++){
	circles[i].fillColor.hue +=3;
	circles[i].scale(.93);
	}
	// animatedCircle.fillColor.hue += 1;
	}
	
	// animatedCircle.fillColor.hue += 10;
	// animatedCircle.scale(.99);
	
	document.getElementById('h1').addEventListener('keydown', changeVisibility(), null);
	function changeVisibility()
		{
		    document.getElementById('text').style.display = "none";
		    document.getElementById('text').style.display = "block";
		}
