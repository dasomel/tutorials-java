import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from "../Header";

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
    <div>
        <Header/>
        <main>
            {children}
        </main>
    </div>
);

export default PageTemplate;
