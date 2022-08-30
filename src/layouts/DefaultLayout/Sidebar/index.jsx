import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
    return ( 
        <aside className={cx('wrapper')}>
            abc
        </aside>
    );
}

export default Sidebar;