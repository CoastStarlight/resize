var path=new Path2D();
path.moveTo((Width/2)+50,Height/2);
path.lineTo((Width/2),(Height/2)-50);
path.lineTo((Width/2)-50,Height/2);
ctx.fill(path);