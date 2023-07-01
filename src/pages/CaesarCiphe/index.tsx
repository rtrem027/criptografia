import React, { useState } from 'react';
import '../../App.css';



const CaesarCiphe = () => {
    const [inputText, setInputText] = useState('');
    const [shift, setShift] = useState(3); // O número de posições para deslocar (chave da cifra)
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');
  
    const handleInputChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleShiftChange = (event) => {
      setShift(parseInt(event.target.value, 10));
    };
  
    const encrypt = (text, shift) => {
      return text
        .split('')
        .map((char) => {
          if (char.match(/[a-z]/i)) {
            const charCode = char.charCodeAt(0);
            const isUpperCase = charCode >= 65 && charCode <= 90;
            const startCharCode = isUpperCase ? 65 : 97;
            const encryptedCharCode = ((charCode - startCharCode + shift) % 26) + startCharCode;
            return String.fromCharCode(encryptedCharCode);
          }
          return char;
        })
        .join('');
    };
  
    const decrypt = (text, shift) => {
      return encrypt(text, 26 - shift); // Decifração é o inverso da cifração (26 - shift)
    };
  
    const handleEncrypt = () => {
      setEncryptedText(encrypt(inputText, shift));
    };
  
    const handleDecrypt = () => {
      setDecryptedText(decrypt(inputText, shift));
    };
  
    const handleClear = () => {
      setInputText('');
      setShift(3);
      setEncryptedText('');
      setDecryptedText('');
    };
  
    return (
      <div className="CaesarCipher">
        <h1>Cifra de César</h1>
        <div>
          <label htmlFor="inputText">Texto:</label>
          <textarea id="inputText" value={inputText} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="shift">Deslocamento:</label>
          <input type="number" id="shift" value={shift} onChange={handleShiftChange} />
        </div>
        <div>
          <button onClick={handleEncrypt}>Criptografar</button>
          <button onClick={handleDecrypt}>Descriptografar</button>
          <button onClick={handleClear}>Limpar</button>
        </div>
        <div>
          <label htmlFor="encryptedText">Texto Criptografado:</label>
          <textarea id="encryptedText" value={encryptedText} readOnly />
        </div>
        <div>
          <label htmlFor="decryptedText">Texto Descriptografado:</label>
          <textarea id="decryptedText" value={decryptedText} readOnly />
        </div>
      </div>
    );
  };
export default CaesarCiphe;