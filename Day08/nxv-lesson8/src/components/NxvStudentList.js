import React, { Component } from 'react'
import NxvStudent from './NxvStudent'

export default class NxvStudentList extends Component {
    constructor(props){
        super(props);

    }
       // Hàm xử lý sự kiện xêm
       nxvHandleView = (nxvStudent)=>{
        // Chuyển dữ liệu lên NxvApp
        this.props.onNxvHandleView(nxvStudent);
    }
  render() {
    let {renderNxvStudents} = this.props;
    console.log("List:",renderNxvStudents);
    
    // chuyển dữ liệu vào NxvStudent để hiển thị
    let nxvElementStudent = renderNxvStudents.map((nxvItem,index)=>{
        return <NxvStudent key={index} renderNxvStudent={nxvItem} onNxvHandleView={this.nxvHandleView} />
    })
    return (
        <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              
             <NxvStudent />
             <NxvStudent />
             <NxvStudent />
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
