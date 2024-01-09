import styles from "../contact.module.css"
import Image from "next/image";

export default function Inspiration() {
    return (
        <div className={styles.inspiration}>
            <Image src='/happyfamily.png' priority={true} alt='happy family' width='350' height='350' />
            <h2>
                Family fun
            </h2>
            <p>
                Here is a family having fun at a party! 
            </p>
        </div>
    )
}