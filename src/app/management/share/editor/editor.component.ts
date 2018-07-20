import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public myEditor: any;
  public obj: any;
  @Input() markdown: string;
  constructor() { }

  ngOnInit() {
    let data = this.markdown;
    this.myEditor = editormd("editormd", {
      markdown: data,
      width: "100%",
      height: 640,
      syncScrolling: "single",
      path: "../../assets/editormd/lib/",
      imageUpload: true,
      imageFormats: ["jpg", "jpeg", "gif", "png", "bmp"],
      imageUploadURL: "api/upload/mdupload?test=dfdf",
      emoji: true,
      taskList: true,
      tex: true,  // 默认不解析
      flowChart: true,  // 默认不解析
      sequenceDiagram: true,  // 默认不解析SS
    });

    //一个小bug 全窗口预览关闭按钮初始化没有隐藏（原因未知），手动隐藏
    $(".editormd-preview-close-btn").hide();
  }

  /**
   * 将子组件获取的内容传输到父组件
   */
  @Output() onChange = new EventEmitter();
  getData() {
    this.onChange.emit(this.myEditor.getMarkdown());
  }

}
