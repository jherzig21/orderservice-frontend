import Link from "next/link"
import styles from '../styles/Navbar.module.css'

const NavBar = () => {
    return (
        <>
            <header>
                <Link className={styles.logo} href="/">logo</Link>

                <div>
                    <h2>Welcome!</h2>
                </div>

                <nav className={styles.navbar}>
                    <ul>
                        <li>
                            <Link href="/">home</Link>
                        </li>
                        <li>
                            <Link href="/">orders +</Link>
                            <ul>
                                <li>
                                    <Link href="/orders/orders">orders</Link>
                                </li>
                                <li>
                                    <Link href="/orders/add">new order</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/about">about</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default NavBar;