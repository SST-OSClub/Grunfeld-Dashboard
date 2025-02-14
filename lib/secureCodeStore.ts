export interface CodeData {
    code: string;
    generatedAt: number;
    expiresAt: number;
    isValid: boolean;
  }
  
  let currentSecureCode: CodeData | null = null;
  
  export function setSecureCode(codeData: CodeData) {
    currentSecureCode = codeData;
  }
  
  export function getSecureCode(): CodeData | null {
    return currentSecureCode;
  }
  
  export function clearSecureCode() {
    currentSecureCode = null;
  }
  