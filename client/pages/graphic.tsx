import React from 'react';
import { Chart } from '@bit/primefaces.primereact.chart';
import { Footer } from "../features/footer/footer"

const data = {
  labels: ['Работают по специальности', 'Работают не по специальности'],
  datasets: [
    {
      data: [300, 50],
      backgroundColor: ['#36A2EB', '#FF6384'],
    }
  ]
};
 
 
export default function Graphic() {
    return (
        <div style={{ width: 400 }}>
            <Chart type='pie' data={data} />
        </div>
    );
};
