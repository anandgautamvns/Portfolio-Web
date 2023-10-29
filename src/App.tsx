import React, { Suspense } from 'react';
import './App.css';
import Loading from './component/loading';
const Page = React.lazy(() => import('./pages'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
        <Page />
      </Suspense>
    </div>
  );
}

export default App;
