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
  @Input() placeholder: string;

  @Output() onChange = new EventEmitter<any>();
  @Output() onSave = new EventEmitter();
  constructor() { }

  ngOnInit() {
    let data = this.markdown;
    this.myEditor = editormd("editormd", {
      placeholder : "此处开始编写您要发布的内容..." || this.placeholder,
      markdown: data,
      width: "100%",
      height: 500,
      syncScrolling: "single",
      path: "../../assets/editormd/lib/",
      imageUpload: true,
      imageFormats: ["jpg", "jpeg", "gif", "png", "bmp"],
      imageUploadURL: "api/upload/mdupload?test=dfdf",
      emoji: false,
      taskList: true,
      tex: true,  // 默认不解析
      flowChart: true,  // 默认不解析
      sequenceDiagram: true,  // 默认不解析SS
      toolbarAutoFixed: false,
      saveHTMLToTextarea: true,
      onload: function() {
        var keyMap = {
          "Ctrl-S": function(cm) {
            this.onSave.emit();
          }
        };
        this.addKeyMap(keyMap);
      },
      onchange: () => {
        this.onChange.emit(this.getMarkdown());
      }
    });

    //一个小bug 全窗口预览关闭按钮初始化没有隐藏（原因未知），手动隐藏
    $(".editormd-preview-close-btn").hide();
  }

  /**
   * 将子组件获取的内容传输到父组件
   */
  getData() {
    return {
      markdown: this.myEditor.getMarkdown(),
      html: this.myEditor.getHTML()
    }
  }
  getHtml() {
    return this.myEditor.getHTML();
  }
  getMarkdown() {
    return this.myEditor.getMarkdown()
  }

}
