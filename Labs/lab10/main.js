var image = {
  topPosition:'100px',
  leftPosition:'100px',
    
   

  updatePosition: function(){
    $('#img-table').css('left', this.leftPosition);
    $('#img-table').css('top', this.topPosition);
  },
    
    moveUp: function(){
        this.topPosition = parseInt(this.topPosition)-10;
        this.updatePosition();
    },
     moveDown: function(){
        this.topPosition = parseInt(this.topPosition)+10;
        this.updatePosition();
    },
    moveLeft: function(){
        this.leftPosition = parseInt(this.leftPosition)-10;
        this.updatePosition();
    },
    moveRight: function(){
        this.leftPosition = parseInt(this.leftPosition)+10;
        this.updatePosition();
    },
    
};