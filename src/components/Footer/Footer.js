import React from 'react'
import {Code, Heart} from 'react-feather'

import './styles.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12'>
                        <div className='footerText'>
                            <Code size={22} />&nbsp;with&nbsp;<Heart size={22} />&nbsp;using&nbsp;<span className='footerBold'>React</span>&nbsp;by&nbsp;<a className='footerBold' href='https://github.com/prajapati-parth' target='_blank'>prajapati-parth</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer