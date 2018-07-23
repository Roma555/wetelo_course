<script>
class Square{
    constructor(wight,height) {
        this.wight = wight;
        this.height = height;
        this.area = 0;
    }
    getArea(){
        this.area = this.wight * this.height;
        //alert("Площа фігури: " + this.area);
        return "Площа фігури: " + this.area;
    }
}
class Circle extends Square{
    constructor(radius) {
        super();
        this.radius = radius;
        this.pi = Math.PI;
    }
    getArea(){
        this.area = this.pi * Math.pow(this.radius, 2);  
        //alert("Площа круга: " + this.area);
        return "Площа круга: " + this.area;
    }
}

class Area{
    constructor(){
        Object.defineProperty(this,'size',{
            get:function() {
                    var total_area = 0;
                    for (var i=0; i<this._figures.length; i++){ 
                        total_area += this._figures[i].area;
                    }
                return total_area;
                }
        });
        this._figures = [];
    }
    addFigure(figure){
        var figures = {}
        for(var key in figure){
            figures[key] = figure[key];
        }
        this._figures.push(figures)
    }
    clear(){
        this._figures.splice(0,this._figures.length);
    }
}

var figure1 = new Square(10, 15);
//console.log(figure1.getArea());
var figure2 = new Square(15, 15);
//console.log(figure2.getArea());
var circle1 = new Circle(15);
//console.log(circle1.getArea());
var area = new Area();
area.addFigure(figure1);
area.addFigure(figure2);
area.addFigure(circle1);
//console.log(area._figures);
//area.clear();
//console.log(area._figures);
console.log("Size:", area.size);
</script>