(function(W){
    var View = function(){
        
        var handleKeyEvent = function(event){
            var keyType ;
            switch (event.keyCode){
                case 39 :
                    keyType = "right";
                    break;
                case 37 :
                    keyType = "left";
                    break;
                case 38 :
                    keyType = "up";
                    break;
                case 40 :
                    keyType = "down";   
                    break;
                default :
                    keyType  = "";

            }

            if(keyType){
                // var custevent = new CustomEvent("revieveKey", { "value": keyType});
                var evt = new CustomEvent("revieveKey", {detail: keyType});


                document.dispatchEvent(evt);
            }
        }   

        var registerForKeyEvent = function(handleKeyEvent){
            document.body.addEventListener('keyup',handleKeyEvent)
        }

        this.createTable = function(dataArray,m,n){
            var containerElem = createElement('div','mario_contaier'),rowContainer=[],col;
            for(var i =0 ;i < m;i++){
                 rowContainer[i] = createElement('div','mario_row','mario_row'+i);
                for(var j=0 ;j<n;j++){
                    col = createElement('div','mario_col','mario_col'+i+"_"+j);
                    if(dataArray[i][j]=== 1){
                        col.innerText = dataArray[i][j];
                    }else{
                    col.innerText = "-";
                    }
                    rowContainer[i].appendChild(col);
                }
                containerElem.appendChild(rowContainer[i]);
            }
            document.getElementsByClassName('root')[0].appendChild(containerElem);
            registerForKeyEvent(handleKeyEvent);
        };
        this.clearMario = function(m,n){
            var element = document.getElementById('mario_col'+m+"_"+n);
            if(element){
                element.innerText = "-";
            }
        }
        this.placeMario = function(m,n){
            var element = document.getElementById('mario_col'+m+"_"+n);
            if(element){
                element.innerText = "X";
            }

        }

        var createElement  = function(element,className,id){
            var ele = document.createElement(element);
            ele.className = className;
            if(id){
                ele.id=id;
            }
            return ele;
        };
       

    }

    W.marioGame.registerObjTostate('view',new View());
}(window));