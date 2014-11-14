'use strict';

enchant();

var CHARA_IMAGE = "/home/s14005/Desktop/enchant-1/js/chara2.gif";
var game;

var Boar = Class.create(Sprite,{
      initialize:function(){
       Sprite.call(this,32,32);
       this.x = random(game.width - this.width)
       this.y = random(game.height - this.height)
       this.image = game.assets[CHARA_IMAGE];
       game.currentScene.addChild(this);
       function random (num){
         return ~~(Math.random() * num);
       }
      },
        remove:function(){
        this.parentNode.removeChild(this);
        },
        htis:function(){
        
        },
        ontouchstart:function(){
        this.remove();
        }
    });

    var Boars = Class.create({
      initialize:function(){
      this.max = 50 - 1;
      this.boars = [];
      this.createBoars();
      },
        createBoars :function(){
         var random = ~~(Math.random() * this.max + 1);  
        for (var i = 0; i < random; i++){
        this.boars.push(new Boar);
        };
        }
    });

window.onload = function() {

  game = new Game();
  game.preload(CHARA_IMAGE);  //画像を読み込み	
  game.hits = 0;
      
  var scene = game.rootScene; 
  scene.backgroundColor = "black"; //背景色
  
   game.onload = function(){
   

    for (var i = 0; i < 10; i++){
   var boars = new Boars();

   scene.addEventListener('enterframe',function(){
   
    if (isEnd()){
     game.end();
     }

     function isEnd(){
      return (game.hits == boars.length);
     }
     });
     };
    };
  game.start();
  };
    //猪を生成
     // var boar = new Sprite(32, 32);
     // boar.moveTo(Math.random()*(320-32), Math.random()*(320-32)); //ランダムな位置に
  //    boar.image = game.assets[CHARA_IMAGE]; //画像をセット
   //   this.parentNode.removeChild(this);
   // }  
   // scene.addChild(boar);

    
 // game.start();

//};

/* var scene = game.rootScene; 
 ||     scene.backgroundColor = "black"; //背景色
 || 
 ||     var touchFunc = function() {
 || 
 2-       this.parentNode.removeChild(this); //タッチして消す
 || 
   ||     };
|| 
||     //猪を生成
||     var x  = Math.floor(Math.ran


 var boar = new Sprite(32, 32);
 23       boar.moveTo(Math.random()*(320-32), Math.random()*(320-32)); //ランダム
 23 な位置に
 23       boar.image = game.assets[CHARA_IMAGE]; //画像をセット
 23       boar.ontouchstart = touchFunc; //タッチイベント登録 
 23       scene.addChild(boar); 
 || 
 ||     }  
 || 
 ||     scene.onenterframe = function() {
 || 
 2-       if (scene.childNodes.length === 0) { 
 23 
 3-         alert("Game Clear!!"); 
 34         scene.onenterframe = null;
 23 
   23       }
 || 
   ||     };
"")})}))])))))) */
