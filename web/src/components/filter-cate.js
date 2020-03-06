import React, { Component } from 'react'
import Slug from './Slug'

const Isotope = typeof window !== `undefined` ? require ("./isotope.js") : null


export default class FilterCate extends Component {

  state = {
    showFilter: false
  }

  showFilterFunc = () => {
    this.setState({
      showFilter: true
    })
  }

  render() {
    let { catesArr } = this.props
    return !this.state.showFilter ?
      (
        <div className='filterOption btn' onClick={() => this.showFilterFunc()}>Chủ đề</div>
      )
      :
      (
        <div className='filter-group-button'>
          <div className='filter-button waves-effect btn' data-filter='*'>Tất cả</div>
          {
            catesArr.map(cate => {
              return (<div className='filter-button waves-effect btn'
                key={cate.node.id}
                data-filter={`.${Slug(cate.node.title)}`}>
                {cate.node.title}
              </div>)
            })

          }
        </div>
      )
  }



  componentDidUpdate = () => {
    // add color to filter button
    const colorArr = ['primary', 'default', 'secondary', 'success', 'info', 'warning', 'danger'];
    let buttons = document.querySelectorAll('.filter-group-button div');
    for (let i = 0; i < buttons.length; i++) {
      let j = i;
      if (i >= colorArr.length) {
        j = i - colorArr.length;
      }
      buttons[i].classList.add(`btn-outline-${colorArr[j]}`);
    }

    // click event handler
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {

        // remove active mode (active: no outline  | inactive: outline)
        for (let j = 0; j < buttons.length; j++) { //  chạy từng button
          for (let k = 0; k < buttons[j].classList.length; k++) { // chạy từng class của button
            if (buttons[j].classList[k].indexOf('btn-') != -1 &&
              buttons[j].classList[k].indexOf('-outline-') == -1) { // class k có outline => active
              let butClass = buttons[j].classList[k]
              buttons[j].classList.remove(butClass)
              let newButClass = butClass.replace('btn-', 'btn-outline-')
              buttons[j].classList.add(newButClass)
            }
          }
        }

        // active clicked button
        for (let i2 = 0; i2 < this.classList.length; i2++) {
          if (this.classList[i2].indexOf('btn-outline') != -1) {
            let butClass = this.classList[i2]
            this.classList.remove(butClass)
            let newButClass = butClass.replace('btn-outline-', 'btn-')
            this.classList.add(newButClass)
          }
        }
      })
    }

    let iso = new Isotope('.grid', {})
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        let filterValue = this.getAttribute('data-filter')
        iso.arrange({ filter: filterValue })
      })
    }

  }
}
