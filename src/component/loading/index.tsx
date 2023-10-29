import React from "react";
import styles from './index.module.scss'
interface Props {

}
const Loading: React.FC<Props> = (props) => {
    return (
        <div className={styles.container}>
            Loading....
        </div>
    )
}

export default Loading;