import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootStore, { Provider } from '@/store/rootStore';
import { Home } from './home';

export const App: React.FC = () => {
  return (
    <Provider value={RootStore}>
      <BrowserRouter>
        {/* <BackButton /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
