import { Link } from "react-router-dom";
import s from "./Navigation.module.css";


export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/qr-code-l1/generate">Генерировать QR код</Link>
            <Link to="/qr-code-l1/scan">Сканировать QR код</Link>
            <Link to="/qr-code-l1/generateHistory">История генерирования</Link>
            <Link to="/qr-code-l1/scanHistory">История сканирования</Link>

        </nav>
    )
}