//  Author: ANTHONY GOOSSENS
//  Email: yorkii@csu.fullerton.edu
//  Draw-Stuff's purpose is to draw the grid and set cases for each cell.
//  No algorithms are located here. Just functions and there definitions.
//  This this resource file is to be called by main.html.


// Set Value Cases for each cell and default values
// draw_rect decides what value a cell has bases on 'color'

function draw_rect( ctx, drawX, drawY, stroke, state )
{
	//  Set cases for what the 'ant' should do.
   
	switch(state){
      case 0:  fill = 'black';	// Turn Right
      break;
      case 1:  fill = 'red';	// Turn Right
      break;
      case 2:  fill = 'yellow';	// Turn Left
      break;
      case 3:  fill = 'blue';	// Turn Left
      break;
    }

	// Setting default values for the state of the cell
    
    state = state || 0;
    stroke = stroke || 'lightgrey';

	// Setting Cell Values and width / height
	// Creating and giving the cells a width and height

    ctx.save( );
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;
    ctx.rect(drawX, drawY, canvas.width/50, canvas.height/50);
    console.log(drawX);
    ctx.stroke();
    ctx.fill();
    ctx.restore( );
}


	// Function draw_grid draws and creates the grid for our ant.
	// This function's logic is dervived from codereview's grid algorithm
	// The algorithm stops after the grid is completed and is only called once

function draw_grid( rctx, rminor, rmajor, rstroke, rfill  )
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    rctx.restore( );
}
