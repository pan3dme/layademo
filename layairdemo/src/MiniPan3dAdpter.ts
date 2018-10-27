/*
* 微信小游戏适配
*/

module adpterPan3d {

    export class MiniPan3dAdpter {
        static isIphone:boolean
        static init(fun:Function=null): void {
            let wx = window['wx'];
            if (wx) {
                 wx.getSystemInfo({
                        success: res => {
                            this.isIphone= String(res.model).search("iPhone")!=-1
                            this.adpter_Pan3d_LoadManager();
                            this.adpter_Pan3d_Init();
                            if( this.isIphone){
                                console.log("苹果手机")
                            }else{
                                console.log("安卓手机")
                            }
                            fun&&fun()
                        },
                        fail: res => {
                            console.log("fail", res);
                        }
                    });

           
            }else{
                    console.log("网页模式");
                     fun&&fun();
            }
        }
        static adpter_Pan3d_Init(): void {
         
            // Pan3d.BaseRes.prototype.setUrlToImg = function (img: any,imgAryBuffer:ArrayBuffer,url):void{
            //     if( MiniPan3dAdpter.isIphone){
            //           img.src = 'data:image/' + "jpg" + ';base64,' +Pan3d.Base64.encode(imgAryBuffer);//将二进制作转在图片
            //     }else{
            //          img.src = url;    //直接只读图片地
            //     }

            // }

       

            Pan3d.DynamicTexItem.prototype.creatTextureByCurve = function (): void {
                //在手机上直接使用imageData传给纹理不正确;
                var i: number = 0;
                var endVecIndex: number = this.curve.valueVec.length - 1;
                var imgNumVec: Array<number> = new Array;
                for (var i: number = 0; i < this.life; i++) {
                    if (i < this.curve.begintFrame) {
                        imgNumVec.push(this.curve.valueVec[0][0] * 0xff, this.curve.valueVec[0][1] * 0xff, this.curve.valueVec[0][2] * 0xff, this.curve.valueVec[0][3] * 0xff);
                    } else if (i > this.curve.maxFrame) {
                        if (this.curve.maxFrame == 0 && this.curve.begintFrame < 0) {
                            imgNumVec.push(0xff, 0xff, 0xff, 0xff);
                        } else {
                            imgNumVec.push(this.curve.valueVec[endVecIndex][0] * 0xff, this.curve.valueVec[endVecIndex][1] * 0xff, this.curve.valueVec[endVecIndex][2] * 0xff, this.curve.valueVec[endVecIndex][3] * 0xff);
                        }

                    } else {
                        if (this.curve.begintFrame < 0) {
                            imgNumVec.push(0xff, 0xff, 0xff, 0xff);
                        } else {
                            var index: number = i - this.curve.begintFrame;
                            imgNumVec.push(this.curve.valueVec[index][0] * 0xff, this.curve.valueVec[index][1] * 0xff, this.curve.valueVec[index][2] * 0xff, this.curve.valueVec[index][3] * 0xff);
                        }

                    }
                }
                var $ctx: CanvasRenderingContext2D = Pan3d.UIManager.getInstance().getContext2D(64, 2, false);
                var baseindex: number;
                for (var i: number = 0; i < 64; i++) {
                    baseindex = Math.floor(i / 64 * this.life) * 4;
                    $ctx.fillStyle = "rgba(" + imgNumVec[baseindex + 0] + "," + imgNumVec[baseindex + 1] + "," + imgNumVec[baseindex + 2] + "," + imgNumVec[baseindex + 3] / 0xff + ")";
                    $ctx.fillRect(i, 0, 1, 2);
                }
                this._textureDynamic = Pan3d.TextureManager.getInstance().getCanvasTexture($ctx).texture;
            }


        }
        static adpter_Pan3d_Accele(): void {
            let wx = window['wx'];
            if (wx) {
                wx.onCompassChange(function (res) {
                    if (MiniPan3dAdpter.compassChangeFun) {
                        MiniPan3dAdpter.compassChangeFun(res.direction)
                    }
                });
                wx.startCompass();
                wx.onAccelerometerChange(function (res) {
                    if (MiniPan3dAdpter.compassChangeFun) {
                        MiniPan3dAdpter.onAccelerometerChange(res)
                    }
                })
                wx.startAccelerometer({
                    interval: 'game'
                })
            }
        }
        static compassChangeFun: Function;
        static onAccelerometerChange: Function;
        static adpter_Pan3d_LoadManager(): void {
       
        }
    }
}
