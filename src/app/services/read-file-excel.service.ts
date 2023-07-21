import * as XLSX from 'xlsx';
import { Injectable } from '@angular/core';
import { coerceStringArray } from '@angular/cdk/coercion';

@Injectable({
  providedIn: 'root'
})
export class ReadFileExcelService {

  constructor() { }

  readExcelFile(file: File): string[]  {
    const fileReader = new FileReader();
    let stringArray: string[] = [];
  
    fileReader.onload = (e: any) => {
      const arrayBuffer = e.target.result;
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      
  
      jsonData.forEach((row: unknown) => {
        if (Array.isArray(row)) {
          row.forEach((cell: unknown) => {
            if (typeof cell === 'string') {
              stringArray.push(cell);
            }
          });
        }
      });
  
      //console.log('List of routes is: ');
      //console.log(stringArray); // Aquí puedes hacer lo que quieras con el array de strings
     
      //console.log(resul);
      return stringArray;
    };
  
    
    fileReader.readAsArrayBuffer(file);
  
    return stringArray;
  }    
}
