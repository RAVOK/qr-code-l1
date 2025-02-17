import { QrCodeGenerator } from './components/Generate/QrCodeGenerator'
import { QrCodeScanner } from './components/Scan/QrCodeScanner'
import { Navigation } from './components/Navigation/Navigation';
import { ScanHistory } from './components/ScanHistory';
import { GenerateHistory } from './GenerateHistory';
import { Routes, Route } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/qr-code-l1/generate" element={<QrCodeGenerator />} />
                <Route path="/qr-code-l1/scan" element={<QrCodeScanner />} />
                <Route path="/qr-code-l1/scanHistory" element={<ScanHistory />} />
                <Route path="/qr-code-l1/generateHistory" element={<GenerateHistory />} />
            </Routes>
        </div>
    );
};


export { Layout };