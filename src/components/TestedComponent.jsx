//компонент для тестирования - сейчас тут просто кнопка и иконка из MUI
import React from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { Button } from '@mui/material';

function TestMUI() {
  return (
    <div style={{ padding: '20px' }}>
      <h3>Тест MUI компонентов:</h3>
      <Button variant="contained" startIcon={<ShoppingCart />}>
        Тестовая кнопка MUI
      </Button>
      <ShoppingCart style={{ fontSize: 40, color: 'primary', marginLeft: '20px' }} />
    </div>
  );
}

export default TestMUI;