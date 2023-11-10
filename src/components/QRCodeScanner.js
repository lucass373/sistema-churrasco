import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

const QRCodeScanner = () => {
  const [scannedData, setScannedData] = useState(null);
  const [isScanning, setScanning] = useState(false);

  const handleError = (err) => {
    console.error(err);
  };

  const handleScan = (data) => {
    if (data) {
      setScannedData(data.text);
      setScanning(false);
    }
  };

  const startScanning = () => {
    setScannedData(null);
    setScanning(true);
  };

  return (
    <div>
      <h2>Leitor de QRCode(camera traseira)</h2>
      <button onClick={startScanning} disabled={isScanning}>
        {isScanning ? 'Escaneando...' : 'Escanear'}
      </button>
      {isScanning && (
        <QrScanner
          onScan={handleScan}
          onError={handleError}
          style={{ width: '15%', margin: 'auto', marginTop: '20px' }} // Ajuste o tamanho e o estilo conforme necessário
          facingMode="environment"
        />
      )}
      {scannedData && (
        <div>
          <p>Informações escaneadas:</p>
          <p>{scannedData}</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeScanner;
