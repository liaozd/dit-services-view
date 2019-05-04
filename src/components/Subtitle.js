import React, { Component } from "react";
import { Layout, Upload, Button, Icon } from "antd";
import axios from "axios";

const {Content} = Layout;

export class SubtitleView extends Component {
  state = {
    fileList: [],
  };

  handleRequest = (info) => {
    const data = new FormData();
    const file = info.file;
    file.status = "uploading";
    data.append("file", file);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: progressEvent => {
        file.percent = (progressEvent.loaded / progressEvent.total * 100 | 0);
        this.setState({fileList: [file]});
      }
    };
    const filename = file.name;
    const url = `http://localhost:8000/subtitle/upload/${filename}/`;
    axios.put(url, data, config).then(response => {
      if (response.status === 204) {
        const file = this.state.fileList[0];
        file.status = "done";
        this.setState({fileList: [file]})
      }
    }).catch(err => {
      console.log(err);
      file.status = "error";
      this.setState({fileList: [file]})
    });
  };

  onRemove = (file) => {
    this.setState((state) => {
      const index = state.fileList.indexOf(file);
      const newFileList = state.fileList.slice();
      newFileList.splice(index, 1);
      return {
        fileList: newFileList,
      };
    });
  };

  render() {
    return (
      <Content style={{padding: "5% 5%"}}>
        <div style={{background: "#fff", padding: 100, minHeight: 280, textAlign: "center"}}>
          <Upload customRequest={this.handleRequest}
                  onRemove={this.onRemove}
                  fileList={this.state.fileList}
          >
            {this.state.fileList.length === 0 ?
              <Button>
                <Icon type="upload" /> 上传XML文件
              </Button> : null
            }
          </Upload>
        </div>
      </Content>
    );
  }
}
