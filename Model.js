(function(W){
    var Model = function(){
        var marioRowPoint = 0,marioColPoint=0,maxRow ,maxCol ,mushroom = 0,moves=0;
         var dataAray =[];

         this.createDimansionalArray = function(m,n){
            maxRow = m;
            maxCol = n;
             for(var i=0;i< m;i++){
                dataAray[i]=[];
                for(var j=0;j<n;j++){
                    dataAray[i][j]= 0;
                }
             }

         }

         this.getMarioPoint = function(){
             return {
                 row : marioRowPoint,
                 col : marioColPoint
             }
         }

         this.moveMarioPoint = function(m,n){
            if(dataAray[m][n]===1){
                this.cleanCell();
            }
            marioRowPoint = m;
            marioColPoint = n;
         }

         this.fillCell = function(m,n){
            if(dataAray[m]){
                dataAray[m][n] = 1;
                mushroom++;
            }
         }

         this.cleanCell = function(m,n){
            if(dataAray[m]){
                dataAray[m][n] = "-";
                mushroom--;
            }
         }

        this.checkForGameOver = function(){
            if(mushroom === 0){
                return true;
            }
        }
        this.getDataArray = function(){
            return dataAray;
        }
        this.getCurrentPos = function(){
            var pos = {
                row : marioRowPoint,
                col : marioColPoint
            }
        }
        this.moveCell = function(m,n){
            if(dataAray[m][n]){
                marioRowPoint = m;
                marioColPoint = n ;
                dataAray[m][n] = "x";
                moves++;
            }
        }

    }

    W.marioGame.registerObjTostate('model',new Model());

    

}(window));


