import { makeAutoObservable } from "mobx";

class CanvasState {
  canvas = null;
  undoList = [];
  redoList = [];
  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas) {
    this.canvas = canvas;
  }

  pushToUndo(data) {
    this.undoList.push(data);
  }

  pushToRedo(data) {
    this.redoList.push(data);
  }

  undo() {
    let ctx = this.canvas.getContext("2d");
    if (this.undoList.length > 0) {
        let dataURL = this.undoList.pop()
        this.pushToRedo(this.canvas.toDataURL())
        let img = new Image()
        img.src = dataURL
        img.onload=()=>{
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        }
    } else {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      alert("there isn't undo actions");
    }
  }

  redo() {
    let ctx = this.canvas.getContext("2d");
    if (this.redoList.length > 0) {
        let dataURL = this.redoList.pop()
        this.pushToUndo(this.canvas.toDataURL())
        let img = new Image()
        img.src = dataURL
        img.onload=()=>{
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        }
    } else {
      alert("there isn't redo actions");
    }
  }
}

export default new CanvasState();
