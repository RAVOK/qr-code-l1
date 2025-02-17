import { Link } from "react-router-dom";
import s from "./Navigation.module.css";


export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/qr-code-l1/generate">Згенерувати QR код</Link>
            <Link to="/qr-code-l1/scan">Сканувати QR код</Link>
            <Link to="/qr-code-l1/generateHistory">Історія генерування</Link>
            <Link to="/qr-code-l1/scanHistory">Історія сканування</Link>

        </nav>
    )
}