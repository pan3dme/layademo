import Browser = Laya.Browser;
import Loader = Laya.Loader;
import LEvent = Laya.Event;
import Stage = Laya.Stage;


// 打印

Laya.MiniAdpter.init();

// 启动程序
class Launch {
    private _canvas: HTMLCanvasElement;
    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }
    constructor() {
        setTimeout(() => {
          this.init();
        }, 200)
    }

    private init(): void {

        // 初始化舞台
        this._canvas = Laya.init(Browser.clientWidth * Browser.pixelRatio, Browser.clientHeight * Browser.pixelRatio, Laya.WebGL);

 
        Laya.stage.mouseThrough = true;
        
        // 监听窗口大小变化
        mainpan3d.canvas = main.canvas;
        Pan3d.Scene_data.fileRoot = " http://" + document.domain + "/res/";
        Pan3d.Scene_data.fileRoot = "https://webpan.oss-cn-shanghai.aliyuncs.com/res/";


     
       
       
  
       adpterPan3d. MiniPan3dAdpter.init(()=>{
             this.loadBaseUiArt();
        });

 
    }
    private addLaya3dScene(): void {

       // Laya.stage.addChild(new Scene2dSprite); //基本2d场景 行走
   

          setTimeout(() => {
                   Laya.stage.addChild(new Scene2dSprite()); //2dui场景 行走
                   Laya.stage.addChild(new Game3dScene()); //2d 技能播放
        }, 20)

        
        //Laya.stage.addChild(new Avatar3dUiPanel()); //3d场景行走
  // Laya.stage.addChild(new Game3dScene());      //3d包含地图
        //Laya.stage.addChild(new Skill3dUiPanel());   //3d场景播技能
      //  Laya.stage.addChild(new Particle3dPanel());   //播放3d特效
        //Laya.stage.addChild(new Particle2dPanel());   //播放2d特效
        //Laya.stage.addChild(new DeleteRolePanel); //删除与添加角色
      //  Laya.stage.addChild(new Sanguo3dScenePanel); //三国角色特效
       //Laya.stage.addChild(new Scale2dScenePanel); //鼠标中键滚动控制2D场景比例
        // Laya.stage.addChild(new buff.BuffThreePanel); //BUFF
      // Laya.stage.addChild(new SelectChar3dPanel); //鼠标中键滚动控制2D场景比例
      //  Laya.stage.addChild(new Particle3dPanel());   //播放3d特效
        
    }
    private loadBaseUiArt(): void {
        var $baseUiList: Array<any> = new Array;
        $baseUiList.push({ xmlurl: "ui/textlist/textlist.txt", picurl: "ui/textlist/textlist.png", name: Pan3d.UIData.textlist });
        $baseUiList.push({ xmlurl: "ui/public/public.txt", picurl: "ui/public/public.png", name: Pan3d.UIData.publicUi });
        Pan3d.UIData.init($baseUiList,
            () => {
                console.log("ui加载完成")
               this.addLaya3dScene();
            },
            (num: number) => {
                console.log(num, "/", $baseUiList.length)
            }
        );
    }

}
var   main = new Launch(); 

