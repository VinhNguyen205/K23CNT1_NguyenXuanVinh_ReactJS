import React, { Component } from 'react'

export default class NxvStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    nxvHandleView = (nxvStudent)=>{
        // Chuyển lên NxvStudentList
        this.props.onNxvHandleView(nxvStudent);
    }
  render() {
    let {renderNxvStudent, key} = this.props;
    console.log("Student:",renderNxvStudent);
    return (
      <>
      <tr>
      <td>{key}</td>
          <td>{renderNxvStudent.nxvId}</td>
          <td>{renderNxvStudent.nxvStudentName}</td>
          <td>{renderNxvStudent.nxvAge}</td>
          <td>{renderNxvStudent.nxvGender}</td>
                <td>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-danger btn-icon-text"
                        onClick={()=>this.nxvHandleView(renderNxvStudent)}
                    >
                      Xem
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-icon-text"
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-icon-text"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
      </>
    )
  }
}
