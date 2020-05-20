import React from 'react'
import './login-section.css'

const LoginSection = () => {
  const togglePopup = () => {
    let showPopupbutton = document.querySelector('.login-section')
    showPopupbutton.classList.toggle('show-popup')
  }

  return (
    <>
      <div className='login-button btn-secondary btn float-right' onClick={togglePopup}>
        Đăng nhập
      </div>
      <div className='login-section'>
        <div className='login-popup'>
          <div className='alert alert-warning'>
            <strong>Lưu ý!</strong>
            {/* <br /> */}
            Đây là blog chỉ đọc nên tính năng đăng nhập và tương tác với các post chỉ dành{' '}
            <b>RIÊNG</b> cho Admin Nghĩa đẹp trai. Nếu bạn không có super account thì bỏ qua phần
            này <br />
            <div className='buttons'>
              <a
                onClick={togglePopup}
                className='login btn btn-primary btn-rounded waves-effect waves-light'
                href='https://sanity-gatsby-blog-studio-vhhtj2dc.netlify.com/dashboard'
                target='_blank'
              >
                Đăng nhập
              </a>
              <a
                onClick={togglePopup}
                className='close-popup btn btn-danger btn-rounded waves-effect waves-light'
              >
                Đóng
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginSection
