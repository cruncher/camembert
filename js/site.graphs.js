(function(jQuery, Raphael, undefined){
	var chart = (function(){
	    	var svg = Raphael('pie_chart');
	    	
	    	//svg.g.txtattr.font = "12px 'Fontin Sans', Fontin-Sans, sans-serif";
	    	//svg.g.text(320, 70, "Static Pie Chart").attr({"font-size": 20});
	    	
	    	return svg.g.camembert(320, 240, 60, 150, [20,90,4,60]);
	    })();
	
	chart.hover(function () {
		this.sector.stop();
		this.sector.animate({scale: [1.2, 1.2, this.cx, this.cy]}, 200, ">");
	}, function () {
		this.sector.stop();
		this.sector.animate({scale: [1, 1, this.cx, this.cy]}, 600, "elastic");
	});
	
	
})(jQuery, Raphael);





        