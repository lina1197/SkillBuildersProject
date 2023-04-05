// import React from 'react';
// import Navigation from './Navigation';
// import Background from './Background';

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Background />
//       <Navigation />
//       {children}
//     </div>
//   );
// }

// export default Layout;
import React from 'react';
import Navigation from './Navigation';
import Background from './Background';

const Layout = ({ children }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Background />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}>
        <Navigation />
      </div>
      {children}
    </div>
  );
}

export default Layout;









