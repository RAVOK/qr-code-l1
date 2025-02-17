import { SCAN_DATA } from '../constants';
import { QRCodeSVG } from 'qrcode.react';

export const  ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    
    return (
        <div>
            {data.map((text) =>(
                
                //<QRCodeSVG value={text} size={170} />

                <p key={text}>
                    {text}
                    <QRCodeSVG value={text} size={170} />
                </p>
            ))}
            
        </div>
    );
};