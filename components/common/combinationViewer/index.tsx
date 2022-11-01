import React from "react";
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';

import styles from './CombinationViewer.module.css';

const CombinationViewer = ({ list, pending }: { list: string[], pending: false }) => {
    if (pending) {
        return (<Spinner animation="border" role="status" >
            <span className="visually-hidden" > Loading...</span>
        </Spinner>);
    }
    return (<div className={`container ${styles.badgeList}`}>
        {list && list.map((name) => (<Badge style={{ marginRight: '1rem' }}>{name}</Badge>))}
    </div>);
};

export default CombinationViewer;
