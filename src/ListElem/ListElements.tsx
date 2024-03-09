import React from 'react';
import styles from "./ListElement.module.scss";
import { ListElementProps } from '../typings/index.d';

const ListElements = (props: ListElementProps) => {
    const { icon, name, link, description, help } = props;

    return (
        <div className={styles.listElement}>
            <i className={icon}></i>{''}
            <strong className={help ? styles.alt : ''}>
                {link ? (
                    <a href={link} target={'_blank'} rel='noreferrer'></a>
                ) : (
                    <>{name}</>
                )}
            </strong>{''}
            <em>{description}</em>
        </div>
    )
}

export default ListElements;