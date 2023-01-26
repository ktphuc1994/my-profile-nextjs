import React, { useState } from 'react';

function Sidebar() {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(true);

  const toggleSidebar =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      )
        return;

      setDrawerOpen(open);
    };
  // AppBar
  return <div className="h-screen">Sidebar</div>;
}

export default Sidebar;
