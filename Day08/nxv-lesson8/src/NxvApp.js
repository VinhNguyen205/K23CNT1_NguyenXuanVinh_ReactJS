import React, { Component } from 'react'
import NxvControl from './components/NxvControl'
import NxvStudent from './components/NxvStudent'
import NxvForm from './components/NxvForm'
import NxvStudentList from './components/NxvStudentList'

export default class NxvApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NxvStudents: [
        { NxvId: "SV001", NxvStudentName: "Trịnh Văn Chung", NxvAge: 46, NxvGender: "Nam", NxvBirthday: "25/05/1979", NxvBirthPlace: "HN", NxvAddress: "Tòa VCN, 25 Vũ Ngọc Phan" },
        { NxvId: "SV002", NxvStudentName: "Chu Nguyên Chương", NxvAge: 188, NxvGender: "Nữ", NxvBirthday: "25/05/1179", NxvBirthPlace: "HP", NxvAddress: "Trung quốc" },
        { NxvId: "SV003", NxvStudentName: "Tần Thủy Hoàng", NxvAge: 55, NxvGender: "Nam", NxvBirthday: "25/05/1079", NxvBirthPlace: "TpHCM", NxvAddress: "Trung Quốc" },
        { NxvId: "SV004", NxvStudentName: "Hoàng Thùy Linh", NxvAge: 55, NxvGender: "Nam", NxvBirthday: "25/05/1079", NxvBirthPlace: "TpHCM", NxvAddress: "Hồ chí minh" },
      ],
      NxvStudent: "",

    }
  }
    // Hàm xử lý sự kiện view Student
    nxvHandleView = (nxvStudent) => {
      this.setState({
        nxvStudent: nxvStudent,
      })
    }
  render() {
    // log
    console.log("View Student:", this.state.nxvStudent);
    return (
      <div>
        <h1 className='text-center'>Nguyễn Xuân Vinh - K23CNT1 - Mini project1</h1>
        <section className="<div">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">

              {/* header */}
              <NxvControl />
              {/* danh sách sinh vien  */}
              <NxvStudentList renderNxvStudents={this.state.nxvStudents} onNxvHandleView={this.nxvHandleView} />
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* form  */}
            <NxvForm renderNxvStudent = {this.state.nxvStudent}/>
          </div>
        </section>

      </div>
    )
  }
}
